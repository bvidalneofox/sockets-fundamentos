var socket = io();

        socket.on('connect', function(){
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function(){
            console.log('Desconectado del servidor');
        });

        socket.emit('enviarMensaje', {
            usuario: 'Bryan',
            mensaje: 'Hola mundo'
        }, function(res){
            console.log(res);
        });

        // Escuchar información
        socket.on('enviarMensaje', function(res){
            console.log(res);
        });