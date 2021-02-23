function getRepoCommits() {
    const request = new XMLHttpRequest();
    request.open('get', 'https://api.github.com/repositories/19438/commits');
    request.onload = () => {
        try {
            const commits = JSON.parse(request.responseText);
            populateRepoTable(commits);
        } catch {
            console.warn('Could not get repo commits');
        }
    };
    request.send();
}
