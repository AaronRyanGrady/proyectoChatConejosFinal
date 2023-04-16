const app =require('express')();
const http = require ('http').Server(app);
const io = require('socket.io')(http,{

    cors:{
        origin: true,
        credentials:true,
        methods:['GET','POST']
    }


});


io.on('connection', (socket)=>{

    console.log('nuevo usuario conectado');
    socket.on('sendMessage', (messageInfo)=>{
        console.log("eEnviando un Mensaje  ");

        socket.broadcast.emit("receiveMessage", messageInfo);
        
    });

});
app.get('/',(req,res)=>{
    res.send('hola , funciona')
});

http.listen(3000,(req,res)=>{
    
    console.log('Servidor corriendo en el puerto 3000');});