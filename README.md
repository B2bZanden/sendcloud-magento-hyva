# SendCloud Magento 2 Hyva compatibility module

## Requirements
This module requires Magento2 CE version 2.3 or higher, [Sendcloud plugin](https://gitlab.com/sendcloud-public/sendcloud-magento) version 2.0.0 or higher and Magento2 Hyva Checkout 1.1 or higher.
This module meets strict Content Security Policies and tested with Hyva Checkout version up to 1.3.5. 
It also works with CSP-compatible version of Alpine.js. 

## Installation
This module can be installed through Composer.
````
php bin/magento module:enable SendCloud_Hyva
php bin/magento setup:upgrade
php bin/magento setup:di:compile
````

## Support
For support, please contact [SendCloud](https://www.sendcloud.com/contact/)

## License
Apache License 2.0
