class UI {
    constructor() {
        this.profile = $('.profile');
    }
    /////////////////////////////////////////////////////////
    showProfile(user) {

        this.profile.html(`
        <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <img src="${user.avatar_url}" width="100%" class="img-fluid mb-2" alt='not found'>
              <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary mb-1">Public Repository: ${user.public_repos}</span>
              <span class="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
              <span class="badge badge-info mb-1">Following: ${user.following}</span>
              <ul class="list-group mt-3">
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">company: ${user.company}</li>
                <li class="list-group-item">Website-Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                <li class="list-group-item">Last Update: ${user.updated_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repositories</h3>
       <div class="repos"></div>
        `);

    }
    /////////////////////////////////////////////////////////
    showRepos(repos) {
        for (let item of repos) {
            let repo = $(`
            <div class="card mb-1">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 my-2">
                  <a href="${item.html_url}" target="_blank">${item.name}</a>
                </div>
                <div class="col-md-6 text-center my-2">
                  <span class="badge badge-primary mb-1">Stars: ${item.stargazers_count}</span>
                  <span class="badge badge-secondary mb-1">Watchers: ${item.watchers_count}</span>
                  <span class="badge badge-success mb-1">Forks: ${item.forks_count}</span>
                  <span class="badge badge-success mb-1">Language: ${item.language}</span>
                </div>
              </div>
            </div>
          </div>
            `);

            $('.repos').append(repo);
        }
    }
    /////////////////////////////////////////////////////////

    clearProfile() {
        this.profile.html('');
    }

    /////////////////////////////////////////////////////////

    showAlert() {

        this.clearAlert();

        var alert = $(`<div class="alert alert-danger">User Not Found 🤷</div>`).css('text-align', 'center');
        $('.searchCard').before(alert);

        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }
    /////////////////////////////////////////////////////////
    clearAlert() {
        var currentAlert = $('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    /////////////////////////////////////////////////////////
}