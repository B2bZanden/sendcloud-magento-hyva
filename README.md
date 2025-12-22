# SendCloud Magento 2 Hyva compatibility module
This module provides compatibility between the [Sendcloud Magento 2 plugin](https://commercemarketplace.adobe.com/sendcloud-sendcloud.html) and [Hyvä](https://www.hyva.io/). 
It enables Sendcloud features such as service point selection in shops using the Hyvä front end.

## Features
- Full integration of Sendcloud’s Service Point Picker with Hyvä Checkout.
- CSP (Content Security Policy) compliant — works with Magento 2.4.7+ strict CSP mode and PCI DSS v4 requirements.
- Tested with Hyvä Checkout up to version 1.3.5.
- Works with CSP-compatible version of Alpine.js

## Requirements
- Magento 2.3 or higher
- [Sendcloud Magento 2 extension](https://commercemarketplace.adobe.com/sendcloud-sendcloud.html) v2.0.0 or higher
- [Hyvä Checkout](https://www.hyva.io/hyva-checkout.html) v1.1 or higher
- A valid Hyvä Themes license

## Installation
Option A — Composer (recommended)
- Add the Sendcloud Hyvä repo (if not already configured)
composer config repositories.sendcloud-hyva git https://gitlab.com/sendcloud-public/sendcloud-magento-hyva.git
- Require the module:
composer require sendcloud/magento-hyva
- Enable and compile:
````
bin/magento module:enable SendCloud_Hyva
bin/magento setup:upgrade
bin/magento setup:di:compile
````

Option B — Manual installation
- Download the latest release from: https://gitlab.com/sendcloud-public/sendcloud-magento-hyva
- Extract the archive into the folder `app/code/SendCloud/Hyva`
- Enable and compile:
````
bin/magento module:enable SendCloud_Hyva
bin/magento setup:upgrade
bin/magento setup:di:compile
````

## Support
For support, please contact [SendCloud](https://www.sendcloud.com/contact/)

## License
Licensed under the Apache License 2.0. 
Usage also requires a valid [Hyvä license](https://www.hyva.io/license).

## Note
This module is maintained by [Sendcloud](https://www.sendcloud.com/) and kept in sync with current Magento 2 and Hyvä Checkout releases.
For the latest version, please refer to this repository.
