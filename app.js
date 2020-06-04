const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

    const username = e.target.value;

    if(username !== '') {
        github.getUser(username)
        .then(
            data => {
               if(data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
               }else{
                   // Show Profile
                   console.log(data.profile);
                   ui.showProfile(data.profile);
                   ui.showRepos(data.repos);
               }
            }
        )
    } 
    else {
        // Clear Profile
        ui.clearProfile();
    }
});