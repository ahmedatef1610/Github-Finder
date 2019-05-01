class Github {

    constructor() {
        this.client_id = 'e9c8832a257a0acea4a2';
        this.client_secret = 'b952c31cc5e3546ca0b45ca4a4926edcdcf91ff4';
        this.repos_count=5;
        this.repos_sort='pushed';

    }

    async getUser(user) {

        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let profile = await profileResponse.json();

        let reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${ this.repos_count}&sort=${ this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let repos = await reposResponse.json();

        return {
            // profile:profile;
            profile,
            repos
        };
    }


}