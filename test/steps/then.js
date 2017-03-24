import checkTitle from '../support/check/checkTitle';
import isVisible from '../support/check/isVisible';
import waitForVisible from '../support/action/waitForVisible';
import waitForExist from '../support/action/waitForExist';
import checkContainsText from '../support/check/checkContainsText';
import checkContent from '../support/check/checkContent';
import compareText from '../support/check/compareText';
import isExisting from '../support/check/isExisting';
import checkWithinViewport from '../support/check/checkWithinViewport';
import checkURL from '../support/check/checkURL';
import checkCurrentRelativeURL from '../support/check/checkCurrentRelativeURL';
import checkURLPath from '../support/check/checkURLPath';
import checkInURLPath from '../support/check/checkInURLPath';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import isEnabled from '../support/check/isEnabled';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkOffset from '../support/check/checkOffset';
import checkClass from '../support/check/checkClass';
import checkNewWindow from '../support/check/checkNewWindow';
import checkIsOpenedInNewWindow from
    '../support/check/checkIsOpenedInNewWindow';
import checkFocus from '../support/check/checkFocus';
import waitfor from '../support/action/waitfor';
import checkModal from '../support/check/checkModal';
import checkModalText from '../support/check/checkModalText';
import captureTaskDetails from '../support/check/captureTaskDetails';
import claimTask from '../support/action/claimTask';
import captureEyes from '../support/action/captureEyes';
import closeEyes from '../support/action/closeEyes';
import goToPostedTask from '../support/action/goToPostedTask';
import pickDate from '../support/action/pickDate';

var frameworkSettings	= require('../support/settings/framework.js');

module.exports = function then() {
    this.Then(
        /^([^ ]*) expect(?:s)? that the title is( not)* "([^"]*)?"$/,
        checkTitle
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that element "([^"]*)?" is( not)* visible$/, { retry: frameworkSettings.retryCountMed }, 
        isVisible
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that element "([^"]*)?" becomes( not)* visible$/, { retry: frameworkSettings.retryCountMax }, 
        waitForVisible
    );

    this.Then(
        /^([^ ]*) wait(?:s)? for element "([^"]*)?" to( not)* appear$/, { retry: frameworkSettings.retryCountMed }, 
        waitForExist
    );
	
    this.Then(
        /^I expect that element "([^"]*)?" is( not)* within the viewport$/, { retry: frameworkSettings.retryCountMin }, 
        checkWithinViewport
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* exist$/,
        isExisting
    );

    this.Then(
        /^I expect that element "([^"]*)?" does( not)* contain the same text as element "([^"]*)?"$/,
        compareText
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that (element|inputfield) "([^"]*)?"( not)*( eventually)* contains the (text|value|quotedText|price) "([^"]*)?"$/, { retry: frameworkSettings.retryCountMax },
        checkContent
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that (element|inputfield) "([^"]*)?" does( not)* contain (some|any) text$/, { retry: frameworkSettings.retryCountMin }, 
        checkContent
    );

    this.Then(
        /^I expect that (element|inputfield) "([^"]*)?" is( not)* empty$/,
        checkContainsText
    );

    this.Then(
        /^I expect that the url is( not)* "([^"]*)?"$/,
        checkURL
    );
	
    this.Then(
        /^([^ ]*) expect(?:s)? that the currenturl is( not)* "([^"]*)?"$/,
        checkCurrentRelativeURL
    );
	

    this.Then(
        /^I expect that the path is( not)* "([^"]*)?"$/,
        checkURLPath
    );

    this.Then(
        /^I expect the url to( not)* contain "([^"]*)?"$/,
        checkInURLPath
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/, { retry: frameworkSettings.retryCountMin },
        checkProperty
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that checkbox "([^"]*)?" is( not)* checked$/,
        checkSelected
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that element "([^"]*)?" is( not)* selected$/,
        checkSelected
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* enabled$/,
        isEnabled
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
        checkCookieContent
    );

    this.Then(
        /^I expect that cookie "([^"]*)?"( not)* exists$/,
        checkCookieExists
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
        checkDimension
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
        checkOffset
    );

    this.Then(
        /^([^ ]*) expect(?:s)? that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/, { retry: frameworkSettings.retryCountMax }, 
        checkClass
    );

    this.Then(
        /^I expect a new (window|tab) has( not)* been opened$/,
        checkNewWindow
    );

    this.Then(
        /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
        checkIsOpenedInNewWindow
    );

    this.Then(
        /^I expect that element "([^"]*)?" is( not)* focused$/,
        checkFocus
    );

    this.Then(
        /^([^ ]*) wait(?:s)? on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*$/, { retry: frameworkSettings.retryCountMin }, 
        waitfor
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
        checkModal
    );

    this.Then(
        /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
        checkModalText
    );
	
    this.Then(
        /^I capture task details of ([^"]*)?$/,
        captureTaskDetails
    );
	
    this.Then(
        /^([^"]*)? claims task$/,
        claimTask
    );
	
    this.Then(
        /^([^"]*)? capture(?:s)? a screenshot for the "([^"]*)?" page$/,
        captureEyes
    );
	 
    this.Then(
        /^([^"]*)? expect(?:s)? the posted task to be available$/,
        goToPostedTask
    );
	
    this.Then(
        /^([^"]*)? picks any date from the datepicker$/,
        pickDate
    );

    this.Then(
        /^([^"]*)? closes Eyes$/,
        closeEyes
    );
	
};
