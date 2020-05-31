const github = new Github;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

    const username = e.target.value;

    if(username !== '') {
        github.getUser(username)
        .then(
            data => {
               if(data.profile.message === 'Not Found') {
                    console.log('Not Found');
               }else{
                   console.log(data.profile);
                   console.log(data.repos);
               }
            }
        )
    } 
    else {
        //
    }
});