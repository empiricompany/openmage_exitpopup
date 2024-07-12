<?php
class MM_ExitPopup_Block_Popup extends Mage_Core_Block_Template
{

    public function getPopupContent()
    {
        /** @var MM_ExitPopup_Helper_Data $_helper */
        $_helper = Mage::helper('mm_exitpopup');
        $cms_static_id = $_helper->getPopupContent();
        $block = Mage::getModel('cms/block')->load($cms_static_id);
        if (!$block->getId()) {
            return '';
        }
        // convert widgets
        $processor = Mage::getModel('widget/template_filter');
        $block->setContent($processor->filter($block->getContent()));
        return $block->getContent();
    }
}