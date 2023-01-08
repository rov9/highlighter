// This listens for the message from the content script and highlights the selected text
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "highlight_text" ) {
        highlightText(request.selectedText);
        sendResponse({status: "success"});
      }
    }
  );
  
  // This function adds the highlight effect to the selected text
  function highlightText(selectedText) {
    // Get the current webpage content
    var html = document.body.innerHTML;
    // Replace the selected text with a highlighted version of it
    html = html.replace(selectedText, '<span class="highlight">' + selectedText + '</span>');
    // Update the webpage with the highlighted text
    document.body.innerHTML = html;
  }
  