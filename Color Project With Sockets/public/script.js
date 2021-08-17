let socket = io()

socket.on('connect',() => {
    document.getElementById('socketid').innerText = socket.id
})

function colorthebox(color) {
    document.querySelector("."+color).style.backgroundColor = color
    setTimeout(() => {
        document.querySelector("."+color).style.backgroundColor = null
    }, 500)
}

document.getElementById('Colorit').onclick = function () {
 const color = document.getElementById('selectedcolor').value
//  colorthebox(color)  

socket.emit('Colorit', {color})
}

socket.on('Colorit', (data) => {
    colorthebox(data.color)
})