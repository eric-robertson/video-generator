import * as PopupCommunicator from './controllers/popupCommunicator'
import * as Notifications from './src/Notifications'
import '../Background'


Notifications.createElement()

PopupCommunicator.onRecieve( "ping", () => {
    Notifications.showNotification('ℹ️ Ping Recieved', 2000)
})

PopupCommunicator.onRecieve( "selectSentence", ({ label }) => {
    Notifications.showNotification('🎯 Choose a sentence for ' + label)

})