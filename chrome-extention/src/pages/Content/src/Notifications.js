let elm;

export function createElement () {
    
    // Spawn the element
    elm = document.createElement('div')
    document.body.appendChild( elm )

    // Tag it
    elm.classList.add( 'Notifier-Root' )    
    elm.classList.add( 'Notifier-slide-off' )

}


export function showNotification ( text, dismiss ) {

    // Shift it on
    elm.classList.remove('Notifier-slide-off')
    elm.classList.add( 'Notifier-slide-on' )

    // Set text
    elm.innerText = text

    // Dissmiss if needed
    if ( dismiss ) setTimeout( dismissNotification, dismiss )

}

export function dismissNotification ( ) {

    elm.classList.remove('Notifier-slide-on')
    elm.classList.add( 'Notifier-slide-off' )

}