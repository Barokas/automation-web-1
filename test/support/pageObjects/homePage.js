var homePage = {

	root_URL: '/',
	dashboard_URL: '/account/dashboard/',
	payments_URL: '/account/payments/',
	profile_URL: '/account/profile/',
	preLogin_postTask_URL: '/post-task/',
	postLogin_postTask_URL: '/account/dashboard/post-task/',
	postSignup_registration_URL: '/sign-up/user-registration/',
	profile_URL: '/account/profile/',
	postTask_signUpContext_URL: '/post-task/sign-up/?context=post-task',
	postTask_dashboard_URL: '/account/dashboard/post-task/',
	writeReview_URL: '/tasks/<taskslug>/write-review/<taskslug>/', //todo
	title: 'Hire skilled people & earn extra money today on Airtasker.com',
	postTaskLink: '#header #menu-cta .post-task-link',
	postTaskForm: '#task-form',
	taskPostedSuccessNoLoader: '#task-form > div.loader-container > div',
	taskPostedSuccessNoLoaderClass: 'loaderific-not-loading',
	postTaskFormTitle: '#form-title',
	postTaskFormTitleValue: 'Get FREE Quotes',
	loginForm: '#dialog-stack > div:nth-child(2) > div > div > div.login-form',

	howItWorksLink: '#header #menu-cta .how-it-works-link',
	postTaskTitle: '.post-task-form #post-task-title',
	errorMessage: '.error-message',
	postTaskDescriptionInput: '#post-task-description',
	taskDetailsButton: '#ui-test-task-details-button',
	toggleLogin: '.dialog .login-form #toggle-login',
	loginLink: 'Login',
	emailInput: '#email-input',
	passwordInput: '#password-input',
	loginButton: '.dialog .login-form #login-button',
	signupButton: '.dialog .login-form #sign-up-button',
	taskDetailsButton: '.dialog .post-task-form #ui-test-task-details-button',
	taskLocationButton: '#ui-test-location-button',
	recurringDateButton: '#ui-test-recurring-date-button',
	dialog: '#dialog-stack',
	formLocationInput: '.post-task-form #location-input',
	physicalOrOnline: '#physical-or-online',
	physicalTask: '#physical-task',
	onlineTask: '#online-task',
	onceOffTask: '#once-off-input',
	recurringTask: '#recurring-input',
	dueDateSelection: '#recurring-date-step > div.margin-20-top > div.air-date-picker > div > div.cell.input-cell > div',
	recurringInterval: '#recurring-interval-input',
	recurringInterval_2_weeks: '.air-select option:nth-child(2)',
	completedByCertainDay: '#date-picker-component > form > div.radio-set.margin-10-bottom > span:nth-child(2) > label',
	datePicker: 'body > div.react-datepicker__tether-element.react-datepicker__tether-element-attached-top.react-datepicker__tether-element-attached-left.react-datepicker__tether-target-attached-bottom.react-datepicker__tether-target-attached-left.react-datepicker__tether-enabled > div > div.react-datepicker__month',
	neverEndingTask: '#never-ends-input',
	recurringEndingDate: '#recurring-ends-input',
	recurringEndDateSelection: '#recurring-date-step > div:nth-child(3) > div:nth-child(2) > div.air-date-picker > div > div.cell.input-cell > div',
	recurringEndingDatePicker: 'body > div.react-datepicker__tether-element.react-datepicker__tether-element-attached-top.react-datepicker__tether-element-attached-left.react-datepicker__tether-target-attached-bottom.react-datepicker__tether-target-attached-left.react-datepicker__tether-enabled > div > div.react-datepicker__month',
	recurringDateStep: '#recurring-date-step',
	paymentAmount: '#post-task-payment-amount',
	pricingButton: '#ui-test-pricing-button',
	allDoneButton: '#ui-test-all-done-button',
	
	loginLink_landing_page: '#menu-user > a.link.login-link',
	signupLink_landing_page: '#menu-user > a.link.sign-up-link',
	
	/* User Menu Items */
	menu: '//*[@id="menu-user"]/a[1]/div[2]',
	dashboardMenu: '#menu-popup > div:nth-child(1) > div > a.button.selected',
	settingsMenu: '#menu-popup > div:nth-child(2) > div.menu-folder-control.showing > a',
	PaymentsHistoryMenu: '#menu-popup > div:nth-child(1) > div > a:nth-child(7)',
	profileMenu: '#menu-popup > div.menu-folder.expanded > div.menu-folder-items.showing > a:nth-child(1)',
	logoutButton: '//*[@id="menu-popup"]/div[5]/div/a',
	
	closeDialog: 'close-cross',
	
	/* site alert */
	siteAlertButton: '#header > div.site-alert > div > div.message-content.message-tail > button',
	termsConditionsText: 'I Agree to the Terms & Conditions',
	
	/* Onboarding Section */
	userRegistrationForm: '#dialog-stack > div:nth-child(2) > div > div > div.user-registration-form',
	userRegistrationHeader: '#dialog-stack > div:nth-child(2) > div > div > div > div.dialog-panel-header.border-none.with-subheading > div:nth-child(1)',
	signupSuccessMessage: 'Welcome!',
	newUserOnbardingFirstName: '#first-name',
	newUserOnbardingLastName: '#last-name',
	newUserOnbardingSuburb: '#location-input',
	locationSuggestion: '#dialog-stack > div:nth-child(2) > div > div > div > div.dialog-panel-body > div > div:nth-child(3) > div > div',
	chooseWorkerProfile: '#is-runner',
	choosePosterProfile: '#is-sender',
	createProfileButton: '#ui-test-create-profile-button',
	
	onboardingStepDialog: '#dialog-stack > div > div > div > div.anchovy-form > div',
	onboardingHeader: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-header.border-none.with-subheading > div:nth-child(1)',
	uploadAvatarHeaderMessage: 'Upload a profile picture',
	
	postTaskLocationInput: '#location-input',
	
	uploadAvatarInputButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.attachment-input-holder > div.attachment-input > input[type="file"]',
	uploadAvatarVisibleButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.attachment-input-holder > div.attachment-input',
	uploadAvatarFinalButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.attachment-input-holder > div.attachment-upload.button-cta.button-med',
	avatarUploadedSuccessNoLoader: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.loaderific-not-loading',
	
	addSkillsHeaderMessage: 'Let us know what your skills are',
	
	addMobileNumberMessage: 'Mobile Number',
	mobileNumberInput: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div > div.anchovy-verify-mobile.anchovy-form-item > input[type="tel"]',
	sendVerificationCodeButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div > div.anchovy-verify-mobile.anchovy-form-item > button',
	
	verificationCodeSentDialog: '#dialog-stack > div:nth-child(2) > div > div > div.generic-alert.anchovy-form',
	verificationCodeHeader: '#dialog-stack > div:nth-child(2) > div > div > div.generic-alert.anchovy-form > div.dialog-panel-header',
	verificationCodeSentSuccessMsgTitle: 'Verification Code Sent',
	verificationCodeBody: '#dialog-stack > div:nth-child(2) > div > div > div.generic-alert.anchovy-form > div.dialog-panel-body > div > div',
	verificationCodeBodyMessage: 'You should receive a 6-digit mobile verification code in a few minutes.',
	verificationAlertOKButton: '#dialog-stack > div:nth-child(2) > div > div > div.generic-alert.anchovy-form > div.dialog-panel-footer > button',
	
	verificationCodeInput: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div > div.anchovy-verify-mobile.anchovy-form-item > input[type="number"]',
	verificationCodeDisplay: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div > div.anchovy-verify-mobile.anchovy-form-item > div',
	
	verificationCodeChangeButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div > div.anchovy-verify-mobile.anchovy-form-item > button:nth-child(2)',
	verificationCodeRemoveButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div > div.anchovy-verify-mobile.anchovy-form-item > button:nth-child(3)',
	
	moreAboutYouDialogHeaderMessage: 'Tell us more about you',
	moreAboutYouDescriptionInput: '#description-input',
	
	paymentDetailsDialogHeaderMessage: 'Enter your payment details',
	accountHolderNameInput: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.margin-10-0 > div > div:nth-child(1) > input',
	bsbInput: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.margin-10-0 > div > div:nth-child(2) > input',
	accountNumberInput: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.margin-10-0 > div > div:nth-child(3) > input',
	addBankAccountButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.margin-10-0 > button',
	addBankAccountSuccessNoLoader: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div > div.loaderific-not-loading',
	
	checkOutAvailableWorkHeaderMessage: 'Check out available work',
	chooseTaskHeaderMessage: 'Choose the task that suits you best',
	completeTaskHeaderMessage: 'Complete tasks & start earning',
	
	onboardingNextButton: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-footer.anchovy-buttons > button.button-cta.button-med.next',
	onboardingFinalButton: '#info-screen-three > div.dialog-panel-footer.anchovy-buttons > button.button-cta.button-med.next',
	
	paymentMethodBillingAddress: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > div > div:nth-child(1) > input',
	paymentMethodPostCode: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > div > div:nth-child(2) > input',
	paymentMethodCity: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > div > div:nth-child(3) > input',
	paymentMethodState: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > div > div:nth-child(4) > input',
	paymentMethodCountry: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > div > div:nth-child(5) > input',
	paymentMethodAddBillingAddressButton: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > button',
	paymentMethodBillingAddressRemoveButton: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-payments > div:nth-child(4) > div.splitter-section-content > div > div.anchovy-form > div:nth-child(1) > button',

	profileBirthdayDate: '#date-of-birth-input > input.date',
	profileBirthdayMonth: '#date-of-birth-input > input.month',
	profileBirthdayYear: '#date-of-birth-input > input.year',
	profileSaveButton: '#ui-test-begin-save',
	
	noLoaderClass: 'loaderific-not-loading',
	loaderClass: 'loaderific',
	
	taskSettingsButton: '#show-settings-button',
	taskTypeWithLocation: '#page-and-screen-content > div.content > div > div.task-list > div.task-search > div.padder-0-10 > div:nth-child(2) > div.button-bar > a:nth-child(2)',
	baseLocation: '#location-input',
	updateButton: '#update-button',
	taskIDforRegression: '#automated-visual-regression-305531'
};

module.exports = homePage;
