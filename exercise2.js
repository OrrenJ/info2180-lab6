$(document).ready(function(){
    
    $("#description").click(function(){
        $.ajax({
            method: "GET",
            url: "request.php",
            data: { q: "description" }
        }).done(function(msg){
            alert(msg);
        });
    });
});