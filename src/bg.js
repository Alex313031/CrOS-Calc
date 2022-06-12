chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'Calculator',
    innerBounds: {minWidth: 350, minHeight: 340, width: 350, height: 450}
  });
});
