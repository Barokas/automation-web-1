var railsMainPage = {

	emailInput: '#user_email',
	passwordInput: '#user_password',
	loginButton: '#new_user > input[type="submit"]:nth-child(6)',
	messageContainer: '#hld > div > div.block.message_container > div',
	errorMessage: '.errormsg',
	menu: '#header',
	detailsTab: '#tabs-container > div.tabs-menu > a:nth-child(1)',
	paymentsTab: '#tabs-container > div.tabs-menu > a:nth-child(2)',
	
	/* User Details */
	userDetailsTab: '#tabs-container > div.tabs-menu > a:nth-child(2)',
	userDetailsEditButton: '#tab-1 > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > ul:nth-child(4) > input:nth-child(1)',
	userDetailsEmail: '#user_email',
	userDetailsMobile: '#user_mobile',
	userDetailsSave: '//input[5]',
	
	/* Admin Notes */
	adminNotesTab: '#tabs-container > div.tabs-menu > a:nth-child(3)',
	adminActionTaken: '#note_action',
	adminReason: '#note_reason',
	zenDeskURL: '#note_related_url',
	adminNotesDescription: '#note_description',
	adminMessage: 'Mass Delete',
	adminSave: '#new_note > table > tbody > tr > td:nth-child(3) > input:nth-child(1)',
	
	/* Alerts */
	alertsTab: '#tabs-container > div.tabs-menu > a:nth-child(7)',
	saveNotificationSettingsButton: 'div.block_head:nth-child(4) > ul:nth-child(4) > li:nth-child(1) > input:nth-child(1)',
	
	/* Email Notifications */
	email_alerts: '#alert_settings_email_airtasker_alerts',
	email_info: '#alert_settings_email_information',
	email_interesting_tasks: '#alert_settings_email_interested_tasks',
	email_news: '#alert_settings_email_news',
	email_task_reminders: '#alert_settings_email_task_reminders',
	email_task_updates: '#alert_settings_email_task_updates',
	email_transactions: '#alert_settings_email_transactions',
	
	
	/* Push Notifications */
	push_alerts: '#alert_settings_push_airtasker_alerts',
	push_info: '#alert_settings_push_information',
	push_interesting_tasks: '#alert_settings_push_interested_tasks',
	push_news: '#alert_settings_push_news',
	push_task_reminders: '#alert_settings_push_task_reminders',
	push_task_updates: '#alert_settings_push_task_updates',
	push_transactions: '#alert_settings_push_transactions',
	
	
	/* SMS Notifications */
	sms_alerts: '#alert_settings_sms_airtasker_alerts',
	sms_info: '#alert_settings_sms_information',
	sms_interesting_tasks: '#alert_settings_sms_interested_tasks',
	sms_news: '#alert_settings_sms_news',
	sms_task_reminders: '#alert_settings_sms_task_reminders',
	sms_task_updates: '#alert_settings_sms_task_updates',
	sms_transactions: '#alert_settings_sms_transactions',

	/* User Status */
	deleteUser: '#body > div > div.block_head > ul > li:nth-child(3) > a',
	deleteUserSuccessContainer: '#hld > div > div.block.message_container > div',
	successClass: 'success',
	aliveUser: 'DELETE USER',
	
	/* for undeleting user */
	undeleteUser: '#body > div > div.block_head > ul > li > a',
	deletedUser: 'UNDELETE USER',
	activateUser: '#body > div > div.block_head > ul > li:nth-child(1) > a',
	deactivatedUser: 'ACTIVATE USER'
	
};

module.exports = railsMainPage;
	