$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
})

$("ul").on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
})

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    var todotxt = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todotxt + "</li>");
  }
})

$("#toggle-form").click(function(){
  $("input[type='text']").toggle();
})
