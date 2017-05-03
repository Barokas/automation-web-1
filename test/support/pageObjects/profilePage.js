var profilePage = {

	/* User Profile Selectors */
	
	firstName: '#ui-test-first-name',
	lastName: '#ui-test-last-name',
	tagLine: '#ui-test-tagline',
	description: '#ui-test-description',
	locationInput: '#location-input',
	location: 'Carlingford',
	locationResult: 'Carlingford, New South Wales, Australia',
	
	location_production: 'Pigeon Hole',
	locationResult_production: 'Pigeon Hole, Northern Territory, Australia',

	locationSuggestion: '//*[@id="page-and-screen-content"]/div[1]/div/div[3]/div[2]/div[2]/div/div[6]/div/div/div[1]',
	
	/* hulee | user */
	gravatarFile: './assets/images/profile/hulee.png',
	gravatarImageFormat: 'jpg',
	
	uploadAvatarInputButton: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-profile > div.account-inner > div > div:nth-child(1) > div > div > div.anchovy-avatar-input-inner > input[type="file"]',
	uploadAvatarVisibleButton: '#page-and-screen-content > div.content > div > div.account.vertical-scroll > div.account-profile > div.account-inner > div > div:nth-child(1) > div > div > div.anchovy-avatar-input-inner > button',
	saveProfileButton: '#ui-test-begin-save'
	
};

module.exports = profilePage;
