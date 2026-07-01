function servicePointComponent() {
    return {
        keyScriptLoaded: !!document.getElementById('sendcloudkeyscriptloaded'),
        scriptLoaded: !!document.getElementById('sendcloudscriptloaded'),
        isLoading: false,
        failure: false,
        postalCode: this.$wire.entangle('postalCode'),
        country: this.$wire.entangle('country'),
        servicePointData: this.$wire.entangle('servicePointData'),
        servicePointAddressData: {},
        keyScriptUrl: null,
        scriptsLoaded: false,

        init() {
            this.keyScriptUrl = this.$root.dataset.keyscripturl;
            this.loadKeyscript();

            this.servicePointAddressData = Alpine.store('sendcloud_servicepoint')
                ? Alpine.store('sendcloud_servicepoint') : {
                "sendcloud_service_point_id": null,
                "sendcloud_service_point_name": null,
                "sendcloud_service_point_street": null,
                "sendcloud_service_point_house_number": null,
                "sendcloud_service_point_zip_code": null,
                "sendcloud_service_point_city": null,
            };
        },
        checkScriptLoaded() {
            this.scriptsLoaded = this.scriptLoaded && this.keyScriptLoaded;
        },
        loadKeyscript() {
            if (!document.getElementById("shipping-method-sendcloud")) {
                return;
            }
            if (!document.getElementById("sendcloudkeyscriptloaded")) {
                this.isLoading = true;
                const keyscript = document.createElement("script");
                keyscript.id = "sendcloudkeyscriptloaded";
                keyscript.type = "text/javascript";
                keyscript.src = this.keyScriptUrl;
                keyscript.onload = () => {
                    this.keyScriptLoaded = true;
                    this.isLoading = false;
                    this.checkScriptLoaded();
                    dispatchEvent(new CustomEvent("sendcloudkeyscriptloaded"));
                };
                keyscript.onerror = () => {
                    this.failure = true;
                }
                document.head.appendChild(keyscript);
            }

            if (!document.getElementById("sendcloudscriptloaded")) {
                this.isLoading = true;
                const script = document.createElement("script");
                script.id = "sendcloudscriptloaded";
                script.type = "text/javascript";
                script.src = "https://embed.sendcloud.sc/spp/1.0.0/api.min.js";
                script.onload = () => {
                    this.scriptLoaded = true;
                    this.isLoading = false;
                    dispatchEvent(new CustomEvent("sendcloudscriptloaded"))
                    this.checkScriptLoaded();
                };
                script.onerror = () => {
                    this.failure = true;
                }
                document.head.appendChild(script);
            }

            this.checkScriptLoaded();
        },
        sendcloudOpen() {
            let lang = document.documentElement.lang;
            let availableLanguages = ['en', 'fr', 'nl', 'de'];

            if (!(availableLanguages.includes(lang))) {
                lang = 'en';
            }

            const config = {
                'apiKey': sendcloud.getApiKey(),
                'postalCode': this.postalCode,
                'country': this.country,
                'language': lang
            };

            sendcloud.servicePoints.open(
                config,
                function(servicePointObject, postNumber) {
                    var servicePointData = {
                        sendcloud_service_point_id: servicePointObject.id,
                        sendcloud_service_point_name: servicePointObject.name,
                        sendcloud_service_point_street: servicePointObject.street,
                        sendcloud_service_point_house_number: servicePointObject.house_number,
                        sendcloud_service_point_zip_code: servicePointObject.postal_code,
                        sendcloud_service_point_city: servicePointObject.city,
                        sendcloud_service_point_country: servicePointObject.country,
                        sendcloud_service_point_postnumber: postNumber,
                        sendcloud_service_point_carrier: servicePointObject.carrier
                    };

                    this.servicePointAddressData = servicePointData;
                    this.servicePointData = servicePointData;
                    Alpine.store('sendcloud_servicepoint', servicePointData);
                }.bind(this),
                function(errors) {
                    errors.forEach(function(error) {
                        console.log('Failure callback, reason: ' + error);
                    });
                }
            );

        },
    }
}
window.addEventListener(
    'alpine:init',
    () => Alpine.data('servicePointComponent', servicePointComponent),
    {once: true}
)
