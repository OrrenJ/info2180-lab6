$(document).ready(function(){
    
    $("#definition").click(function(){
        $.ajax({
            method: "GET",
            url: "request.php",
            data: { q: "definition" }
        }).done(function(msg){
            alert(msg);
        });
    });
});