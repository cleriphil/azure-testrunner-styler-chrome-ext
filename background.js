

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  
    console.log('Turning ' + tab.url + ' red!');
    // chrome.tabs.executeScript({
    //   code: 'document.body.style.backgroundColor="red"'
    // });

    chrome.tabs.executeScript({
        file: "style-it.js",
        allFrames: true
    });

  });
  


