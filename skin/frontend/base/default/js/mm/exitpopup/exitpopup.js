/** 
 * @class ExitPopup 
 * @description Class to create exit popup
 * @param {number} cookieLifetime - cookie lifetime in seconds
 * @param {number} delay - delay in seconds
 * @memberof ExitPopup
 * @example
 * const exitPopup = new ExitPopup(3600, 5);
 * exitPopup.init('exitintentdelay');
 * */
class ExitPopup {
    /**
     * Creates an instance of ExitPopup.
     * @param {number} cookieLifetime - cookie lifetime in seconds
     * @param {number} delay - delay in seconds
     * @memberof ExitPopup
     * */
    constructor(cookieLifetime, delay) {
        this.popup = document.querySelector('.exit-popup__overlay');
        this.closeButton = document.querySelector('.exit-popup__close');
        this.lifetime = cookieLifetime;
        this.delay = delay;
        if (this.lifetime > 0) {
            this.expireAt = new Date();
            this.expireAt.setTime(this.expireAt.getTime() + this.lifetime * 1000);
        }
        // find from with button inside content and attach an event before submit to set cookie and remember forever
        this.popup.addEventListener('submit', (e) => {
            e.preventDefault();
            this.remember4ever();
            this.close();
            e.target.submit();
        });
    }

    /**
     * Method to init popup
     * @param {string} mode - delay, exitintent, exitintentdelay
     * @returns {void}
     * @memberof ExitPopup
     * */
    init(mode) {
        if (!this.rememberCheck()) {
            switch (mode) {
                case 'delay':
                    this.openDelay();
                    break;
                case 'exitintent':
                    this.openExitIntent();
                    break;
                case 'exitintentdelay':
                    this.openExitIntentDelay();
                    break;
            }
        }
    }

    /**
     * Method to open popup with delay
     * @returns {void}
     * @memberof ExitPopup
     * */
    openDelay() {
        setTimeout(() => {
            this.open();
            this.remember();
        }, this.delay * 1000);
    };

    /**
     * Method to open popup on exit intent
     * @returns {void}
     * @memberof ExitPopup
     * */
    openExitIntent() {
        document.addEventListener('mouseout', this.mouseEvent);
    };

    /**
     * Method to open popup on exit intent if not touch device, otherwise open with delay
     * @returns {void}
     * @memberof ExitPopup
     * */
    openExitIntentDelay() {
        if (!this.isTouchDevice()) {
            this.openExitIntent();
        } else {
            this.openDelay();
        }
    };

    /**
     * Method to close popup
     * @param {Event} e
     * @returns {void}
     * @memberof ExitPopup
     * */

    exit = (e) => {
        const shouldExit =
            [...e.target.classList].includes('exit-popup__overlay') || // user clicks on mask
            e.target.className === 'exit-popup__close' || // user clicks on the close icon
            e.keyCode === 27; // user hits escape

        if (shouldExit) {
            this.close();
        }
    };

    /**
     * Method to open popup
     * @returns {void}
     * @memberof ExitPopup
     * */
    open() {
        this.popup.classList.add('visible');
        document.addEventListener('keydown', this.exit);
        this.popup.addEventListener('click', this.exit);
    };

    /**
     * Method to close popup
     * @returns {void}
     * @memberof ExitPopup
     * */
    close() {
        this.popup.classList.remove('visible');
    };

    /**
     * Method to set cookie
     * @returns {void}
     * @memberof ExitPopup
     * */
    remember() {
        Mage.Cookies.set('exitIntentShown', true, this.expireAt);
    }

    /**
     * Method to set cookie
     * @returns {void}
     * @memberof ExitPopup
     * */
    remember4ever() {
        Mage.Cookies.set('exitIntentShown', true);
    }

    /**
     * Method to check if cookie exists
     * @returns {boolean}
     * @memberof ExitPopup
     * */
    rememberCheck() {
        return Mage.Cookies.get('exitIntentShown');
    }

    /**
     * Method to check if mouse is near the top of the screen
     * @param {MouseEvent} e
     * @returns {void}
     * @memberof ExitPopup
     * */
    mouseEvent = (e) => {
        const shouldShowExitIntent =
            !e.toElement &&
            !e.relatedTarget &&
            e.clientY < 10;

        if (shouldShowExitIntent) {
            document.removeEventListener('mouseout', this.mouseEvent);
            this.open();
            this.remember();
        }
    };

    /**
     * Method to check if device is touch
     * @returns {boolean}
     * @memberof ExitPopup
     * */
    isTouchDevice = () => {
        return (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    };
}