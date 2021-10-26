function ejecutarAJAX(q){

    $.get("https://www.googleapis.com/youtube/v2/search", {

        part: snippet, id,
        q : q,
        datatype : 'video',
        pageToken: '',
        key: 'AIzaSyDAzuu88r0e3Xk5xzcZ83pJPioFSZBBpHU',
}, function(data){
        console.log(data);


});


    }


function buscarvideo(){

    var q = alert($("#usuarioInput").val());
    ejecutarAJAX(q);
}
    






       











