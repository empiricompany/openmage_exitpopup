## Requirements
- [OpenMage](https://github.com/OpenMage/magento-lts) / Magento 1.9.x
- PHP 7.4 / 8.x

## Description

With [Exit Popup]([https://github.com/microsoft/monaco-editor](https://github.com/empiricompany/openmage_exitpopup)) you can configure an overlay popup to display CMS static content. 
Inside the static block, you can insert a widget with the newsletter subscription form, for example:
```
{{block type="newsletter/subscribe" template="newsletter/subscribe.phtml"}}
```
On successful form submission, the cookie lifetime is equal to the session, and the popup will not show again.

## Configuration
**System -> MM Extensions -> Exit Popup**

- Enable/disabled the module  [enabled]
- CMS Static Block: select a cms static block to show in
- Cookie Lifetime [180]: The lifetime of the cookie in seconds. If content contains a form, on submit cookie lifetime is equal to session and popup don't show again
- Open Mode [Exit Intent (desktop) + Delay (mobile)]
    - Delay
    - Exit Intent
    - Exit Intent on Desktop and Delay on Mobile
-  Open Delay [5]: The delay in seconds before the popup is displayed. 

## Demo
![demo](https://github.com/user-attachments/assets/41532d68-b154-469b-9d99-ff204ec8e925)
![settings](https://github.com/user-attachments/assets/2875a6ac-1479-4735-a80d-608b54fb2195)

