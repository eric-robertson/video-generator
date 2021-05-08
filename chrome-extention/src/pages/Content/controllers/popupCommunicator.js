let messageReciever = {
    ping : () => {
        alert("Ping recieved")
    }
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if ( request.message in messageReciever )
            messageReciever[request.message]( request.body )
});

export function onRecieve ( message, funct ){
    messageReciever[message] = funct
}