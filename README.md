## Requirements
- [OpenMage](https://github.com/OpenMage/magento-lts) / Magento 1.9.x
- PHP 7.4 / 8.x

## Description

With [Exit Popup]([https://github.com/microsoft/monaco-editor](https://github.com/empiricompany/openmage_exitpopup)) extension you can configure an overlay popup to show a CMS Static content.
Inside stitic block you can insert a widget with the newsletter subscriber form for example:
```
{{block type="newsletter/subscribe" template="newsletter/subscribe.phtml"}}
```
On successfull submit form cookie lifetime is equal to session and popup don't show again.

## Configuration
**System -> MM Extensions -> Exit Popup**

- Enable/disabled the module  [enabled]
- CMS Static Block: select a cms static block to show in
- Cookie Lifetime: The lifetime of the cookie in seconds. If content contains a form, on submit cookie lifetime is equal to session and popup don't show again
- Open Mode [disabled]
    - Delay
    - Exit Intent
    - Exit Intent on Desktop and Delay on Mobile
-  Open Delay: The delay in seconds before the popup is displayed. 
