function exploreArray ( event ) {
    currentOperation = event.target.innerHTML
    if ( currentOperation === 'push' || currentOperation === 'unshift' ) {
        this.style.visibility = 'visible'
    } else if (currentOperation = "position"){
        position.style.visibility = 'visible'
        elem.style.visibility = 'visible'
    } else {
        if ( array.length === 0 ) {
            this.placeholder = 'There are no items in the array. Unable to perform operation'
        } else {
            extracted.innerHTML = array [ currentOperation ] ()
            arrElem.innerHTML = array
        }
    }

}