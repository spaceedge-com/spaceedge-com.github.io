chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({ url: 'popup.html' });  // Open popup or any URL on click
});

