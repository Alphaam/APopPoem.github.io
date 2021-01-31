$(document).ready(function(){
  $("button").click(function(){
    
    $("#About-Image").fadeOut(1000);
    $("#button1").fadeOut(1000);
   

    $("#howTo").fadeIn(1000);
    $("#socialMedia").fadeIn(1000);
    $("#button2").fadeIn(1000);
  });
});

$(document).ready(function(){
  $("#button2").click(function(){
    
    $("#About-Image").fadeIn(1000);
    $("#button1").fadeIn(1000);
    

    $("#howTo").fadeOut(1000);
    $("#socialMedia").fadeOut(1000);
    $("#button2").fadeOut(1000);
  });
});