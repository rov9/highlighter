// This listens for a message from the background script and sends the selected text back to it
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "highlight_text" ) {
        var selectedText = window.getSelection().toString();
        if(selectedText.length > 0) {
          chrome.runtime.sendMessage({"message": "highlight_text", "selectedText": selectedText});
        }
      }
    }
  );
  