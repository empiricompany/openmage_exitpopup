<?php
class MM_ExitPopup_Model_System_Config_Source_Modes
{
    
    const MODE_EXIT_INTENT = 'exitintent';
    const MODE_DELAY = 'delay';
    const MODE_EXIT_INTENT_DELAY = 'exitintentdelay';

    public function toOptionArray()
    {
        return array(
            array('value' => self::MODE_EXIT_INTENT, 'label' => 'Exit Intent'),
            array('value' => self::MODE_DELAY, 'label' => 'Delay'),
            array('value' => self::MODE_EXIT_INTENT_DELAY, 'label' => 'Exit Intent (desktop) + Delay (mobile)'),
        );
    }
}