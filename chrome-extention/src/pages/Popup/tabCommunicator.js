
// Tab communication 

function sendMessage( text, body ) {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { message: text, body });
   });
}

// Exported values

export const pingTab = () => {
    sendMessage( "ping" )
}

export const selectSentence = ( label ) => {
    sendMessage( "selectSentence", {label} )
}