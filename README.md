# SendCloud Magento 2 Hyva compatibility module

## Requirements
- Magento 2.3 or higher
- Sendcloud Magento 2 extension v2.0.0 or higher
- Hyvä Checkout v1.1 or higher

## Installation
Composer (recommended)
- composer require sendcloud/sencloud-magento-hyva

Manual installation
- Download the latest release from: https://gitlab.com/sendcloud-public/sendcloud-magento-hyva
- Extract the archive into the folder `app/code/SendCloud/Hyva`

After that run:
````
php bin/magento module:enable SendCloud_Hyva
php bin/magento setup:upgrade
php bin/magento setup:di:compile
````

## Support
For support, please contact [SendCloud](https://www.sendcloud.com/contact/)

## License
Apache License 2.0

## Note
This module is maintained by [Sendcloud](https://www.sendcloud.com/) and kept in sync with current Magento 2 and Hyvä Checkout releases.
For the latest version, please refer to this repository.
