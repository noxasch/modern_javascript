
class GitHub {
  constructor() {
    this.client_id = 'dce5a5992a10476f6873';
    this.client_secret = '63843373286412eed8ca111fefa48bd1fa728473';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const self = this;
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/vnd.github.v3+json'
      }
    });

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/vnd.github.v3+json'
      }
    });

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    // return an object
    return {
      profile,
      repos
    };
  }
}