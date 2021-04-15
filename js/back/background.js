(function() {

    var browser = browser || chrome;
    let blockedUrls = typeof(bannedUrls) !== 'undefined' ? bannedUrls : [];

    function checkUrl (request) {
        for (let i = 0; i < blockedUrls.length; i++) {
            let url = blockedUrls[i];
            if (request.url.includes(url)) {
                return {
                    // redirectUrl: browser.extension.getURL("html/dashboard.html")
                    redirectUrl: browser.extension.getURL("dashboard/build/index.html")
                };
            }
        }
    }

    var flushingCache = browser.webRequest.handlerBehaviorChanged();
    browser.webRequest.onBeforeRequest.addListener(
       checkUrl,
       {urls: ["<all_urls>"]},
       ["blocking"]
    );

})();
