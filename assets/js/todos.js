$("li").click(function(){
  $(this).toggleClass("done");
})

$("span").click(function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
})
