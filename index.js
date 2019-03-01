var operations = [ 'unshift', 'shift', 'push',  'pop', 'position' ]
var currentOperation = null
var array = []

var arrElem = document.createElement ( 'section' )
document.body.appendChild ( arrElem )
arrElem.innerHTML = array

var elem = document.createElement ( 'input' )
elem.type = 'text'
document.body.appendChild ( elem )
elem.placeholder = 'Add item to array'
elem.style.visibility = 'hidden'

elem.onchange = function ( event ) {
    array [ currentOperation ] ( this.value )
    arrElem.innerHTML = array
    this.style.visibility = 'hidden'
}
var extracted = document.createElement ( 'p' )
document.body.appendChild ( extracted )

var position = document.body.appendChild (document.createElement ("input"))
  position.className = "num"
  position.type = 'number';
  position.min = '-1';
  position.placeholder = 'Add position in array';
  position.style.visibility = 'hidden'

position.onchange = function (event) {
  array [this.value] = elem.value
  this.style.visibility = 'hidden'
  elem.style.visibility = 'hidden'
  arrElem.innerHTML = array
}

var btns = []

for ( var operation of operations ) {
    btns.push ( 
      document.body.appendChild ( 
        document.createElement ( 'button' )
      )
    )
    btns [ btns.length-1 ].innerHTML = operation
    btns [ btns.length-1 ].onclick = exploreArray.bind ( elem )
}


