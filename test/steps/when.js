import clickElement from '../support/action/clickElement';
import acceptTerms from '../support/action/acceptTerms';
import setInputField from '../support/action/setInputField';
import personaLogin from '../support/action/personaLogin';
import clearInputField from '../support/action/clearInputField';
import dragElement from '../support/action/dragElement';
import submitForm from '../support/action/submitForm';
import pause from '../support/action/pause';
import setCookie from '../support/action/setCookie';
import deleteCookie from '../support/action/deleteCookie';
import pressButton from '../support/action/pressButton';
import handleModal from '../support/action/handleModal';
import setPromptText from '../support/action/setPromptText';
import scroll from '../support/action/scroll';
import closeLastOpenedWindow from '../support/action/closeLastOpenedWindow';
import focusLastOpenedWindow from '../support/action/focusLastOpenedWindow';
import selectOptionByIndex from '../support/action/selectOptionByIndex';
import selectOption from '../support/action/selectOption';
import moveToElement from '../support/action/moveToElement';
import chooseFile from '../support/action/chooseFile';
import debug from '../support/action/debug';
import doAndVerifyAction from '../support/action/doAndVerifyAction';
import tickOrClearCheckbox from '../support/action/tickOrClearCheckbox';

var frameworkSettings	= require('../support/settings/framework.js');

module.exports = function when() {
    this.When(
        /^([^ ]*) (click|clicks|doubleclick|doubleclicks|jclick|jclicks|eclick|eclicks) on the (link|button|element) "([^"]*)?"$/, { retry: frameworkSettings.retryCountMed }, 
        clickElement
    );
	
    this.When(
        /^([^ ]*) (click|clicks|doubleclick|doubleclicks) on the (link|button|element) "([^"]*)?" and expects (element|button) "([^"]*)?" to be visible$/, { retry: frameworkSettings.retryCountMed }, 
        doAndVerifyAction
    );
	
    this.When(
        /^([^ ]*) (click|clicks) on terms if presented$/,
        acceptTerms
    );
	
    this.When(
        /^([^ ]*) (add|adds|set|sets|prefix|prefixes) "([^"]*)?" to the inputfield "([^"]*)?"$/,
        setInputField
    );

    this.When(
        /^([^ ]*) (log|logs|sign) "([^"]*)?" (to|of|on) "([^"]*)?"$/,
        personaLogin
    );
	
    this.When(
        /^([^ ]*) clear(?:s)? the inputfield "([^"]*)?"$/,
        clearInputField
    );

    this.When(
        /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
        dragElement
    );

    this.When(
        /^I submit the form "([^"]*)?"$/,
        submitForm
    );

    this.When(
        /^([^ ]*) pause(?:s)? for (\d+)ms$/,
        pause
    );

    this.When(
        /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
        setCookie
    );

    this.When(
        /^I delete the cookie "([^"]*)?"$/,
        deleteCookie
    );

    this.When(
        /^([^ ]*) press(?:es)? "([^"]*)?"$/,
        pressButton
    );

    this.When(
        /^([^ ]*) (accept|accepts|dismiss|dismisses) the (alertbox|confirmbox|prompt)$/,
        handleModal
    );

    this.When(
        /^I enter "([^"]*)?" into the prompt$/,
        setPromptText
    );

    this.When(
        /^I scroll to element "([^"]*)?"$/,
        scroll
    );

    this.When(
        /^I close the last opened (window|tab)$/,
        closeLastOpenedWindow
    );

    this.When(
        /^I focus the last opened (window|tab)$/,
        focusLastOpenedWindow
    );

    this.When(
        /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
        selectOptionByIndex
    );

    this.When(
        /^([^ ]*) select(?:s)? the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
        selectOption
    );

    this.When(
        /^I move to element "([^"]*)?"( with an offset of (\d+),(\d+))*$/,
        moveToElement
    );
	
    this.When(
        /^([^ ]*) upload(?:s)? "([^"]*)?" ([^"]*)? on the element "([^"]*)?"$/,
        chooseFile
    );
	
    this.When(
        /^([^ ]*) debug(?:s)?$/,
        debug
    );
	
    this.When(
        /^([^ ]*) (clear|clears|tick|ticks) the checkbox "([^"]*)?"$/,
        tickOrClearCheckbox
    );
	
};
