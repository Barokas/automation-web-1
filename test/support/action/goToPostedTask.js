/**
 * Navigate to the task created by a Poster
 */

module.exports = (
    person, done
) => {
	
	var url = '';
	
	if ((person === 'I') || (person === 'Both')){
		
		browser.url(global.taskURL);
		
	} else {
		
		browser.select(person).url(global.taskURL);
	}

	done()
};
