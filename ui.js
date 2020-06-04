class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }


    showAlert(message, className){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        // Clear the alert after 3 sec
        setTimeout(() => {
            const currentAlert = document.querySelector('.alert');

            if(currentAlert){
                currentAlert.remove();
            }
        }, 3000);
    }

    showProfile(user){

    }

    showRepos(repos) {

    }

    clearProfile() {

    }
}