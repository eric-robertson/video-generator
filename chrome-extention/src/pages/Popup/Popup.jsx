import React, {useState} from 'react';
import * as TabCommunication from './tabCommunicator'
import './Popup.css'

export default () => {

    const [state, setState] = useState('none')

    // State transitions
    function startVideo () {
        setState('choose-title')
        TabCommunication.selectSentence("title");
    }

    // Default State
    if ( state == 'none' )
        return <div className="App">
            <div className="App-header">
                Click to Start Video Generation
                <button onClick={startVideo}> Start generation </button>
            </div>
        </div>



    return <div/>
};
