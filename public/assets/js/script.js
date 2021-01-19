//* see 12-Blog-Crud blog.js & cms.js for example of event handlers for front end.


//Need to create new task for project task page
//Need to create new user for People page
//Need to create select project for Budget page
//Need to create new projects button and new team member button on homepage


//selecting button element with id #new-user-button and saving a variable newUser
var newUser = $('#new-user-button')

//adding a listener to button to listen to click event
newUser.addEventListener('click', (e) => {
    if (e) {
      console.log('DOM loaded!');
    }});
