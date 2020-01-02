function formatDate(date) {
    let string = date.getFullYear();
    string += '-';
    string += ("0" + (date.getMonth() + 1)).slice(-2)
    string += '-';
    string += ("0" + date.getDate()).slice(-2);
    return string
}
let twitterForm = document.getElementById('twitterForm');
twitterForm.onsubmit = function(event) {
    event.preventDefault();
    let today = new Date();
    // https://stackoverflow.com/questions/5511323/calculate-the-date-yesterday-in-javascript
    let yesterday = new Date(Date.now() - 86400000);
    let term = document.getElementById('twitterTerm');
    // https://twitter.com/search?q=
    // "term" lang:fr until:2020-01-02 since:2020-01-01
    let query = term.value
    query += ' lang:fr';
    query += ' since:' + formatDate(yesterday);
    query += ' until:' + formatDate(today);
    let url = "https://twitter.com/search?q=" + query;
    chrome.tabs.create({ url: url });
};
