const { io } = require('../server')
io.on('connection', (client) => {
    console.log('usuario conectado');
    client.on('disconnect', () => {
            console.log('Usuario Desconectado')
        })
        //Enviar mensaje al cliente
    client.emit('enviarMensaje', {
            usuario: 'ADministrador',
            mensaje: 'Bienvenido a esta aplicacion'
        })
        //Escuchar el Cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'Todo salio bien'
            //     });
            // } else {
            //     callback({
            //         resp: 'Todo salio mal!!!'
            //     });
            // }
    })
})