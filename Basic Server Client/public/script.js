let socket = io()

const btn = document.querySelector('.btn')

btn.onclick = function () {
    socket.emit('😂😂😂')
}
socket.on('Laugh', ()=> {
    const div = document.createElement('div')
    div.innerHTML = 'Laugh'
    document.body.appendChild(div)
})