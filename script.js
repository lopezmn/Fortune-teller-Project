$("button").click(function(){
  var name =$(".userName").val();
  var current = parseInt($(".follow").val());
  var year =$(".number").val(); 
  var finalNumber= current*20;
 $("#result").text("In 2030 "+ name + " will have " + finalNumber + " followers on Instagram " );   
});