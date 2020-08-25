var socket = io()
socket.on('connect', function() {
    console.log('Se conecto')
})
socket.on('disconnect', function() {
        console.log('Perdimos coneccion con el servidor')
    })
    // socket.emit('enviarMensaje', {
    //     usuario: 'Genaro',
    //     mensaje: 'Hola Mundo'
    // }, function(resp) {
    //     console.log('Servidor: ', resp);
    // })

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje)
})