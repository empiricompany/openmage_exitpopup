<?php
class MM_ExitPopup_Helper_Data extends Mage_Core_Helper_Abstract
{
    public function isEnabled()
    {
        return Mage::getStoreConfig('mm_exitpopup/general/enabled');
    }

    public function getPopupContent()
    {
        return Mage::getStoreConfig('mm_exitpopup/general/cms_static');
    }

    public function getMode()
    {
        return Mage::getStoreConfig('mm_exitpopup/general/open_mode');
    }

    public function getDelay()
    {
        return intval(Mage::getStoreConfig('mm_exitpopup/general/open_delay'));
    }

    public function getExitIntent()
    {
        return intval(Mage::getStoreConfig('mm_exitpopup/general/exit_intent'));
    }

    public function getCookieLifetime()
    {
        return intval(Mage::getStoreConfig('mm_exitpopup/general/cookie_lifetime'));
    }
}