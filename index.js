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

    $("#getall").click(function(){
        $.ajax({
            method: "GET",
            url: "request.php",
            dataType: "xml",
            data: { all: true }
        }).done(function(xml){
        	var def_arr = $(xml).find("definitions");
        	var terms = $(def_arr).children();
        	var ol = $("<ol>");
        	$(terms).each(function(){
        		var li = $("<li>");
        		var name = $(this).find('name').text();
        		var definition = $(this).find('definition').text();
        		var author = $(this).find('author').text();
        		$(li).append("<h3>"+name.toUpperCase()+"</h3>");
        		$(li).append("<p>"+definition+"</h3>");
        		$(li).append("<p>- "+author+"</p>");
        		$(ol).append(li);
        	});
        	$("#result").html(ol);
        });
	});
});
