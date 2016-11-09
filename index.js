$(document).ready(function(){
    
    $("#search").click(function(){
        $.ajax({
            method: "GET",
            url: "request.php",
            data: { q: $("#request_input").val().toLowerCase() }
        }).done(function(msg){
            $("#result").html(msg);
        });
    });
});
