function Train(){
    var data = $("#moninput").val();
    console.log(data);
    socket.emit('message', data);
}

