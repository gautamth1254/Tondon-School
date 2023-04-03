$(document).ready(function(){
    //history
   

    $("#area").click(function(){
        
        $("#mainphoto").hide();
        $("#main-faculty").hide();
        $("#area-ee").show();
        $("#areaphoto").show();
    });
    $("#main").click(function(){
        
        $("#areaphoto").hide();
        $("#area-ee").hide();
        $("#main-faculty").show();
        $("#mainphoto").show();
        
    });
   

});