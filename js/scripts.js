$("document").ready(function() {
  $("button#start").submit(function(event) {
    
    $(".jumbotron").hide();
    
    $("form#question1").show();
    
    event.preventDefault();
  });
})