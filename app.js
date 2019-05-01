$(document).ready(function () {

    $('.searchUser').keyup(function (e) {

        if ($(this).val() !== '') {
            github.getUser($(this).val()).then(data => {
                if (data.profile.message == "Not Found") {
                    ui.showAlert();
                    ui.clearProfile();
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
        } else {
            ui.clearProfile();
        }
    });

});
/*******************************************************************/
var github = new Github();
var ui = new UI();