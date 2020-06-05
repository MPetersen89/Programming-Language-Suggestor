$("document").ready(function() {
  const career = $("input:radio[name=career]:checked").val();
  const task = $("input:radio[name=task]:checked").val();
  const company = $("input:radio[name=company]:checked").val();
  const difficulty = $("input:radio[name=difficulty]:checked").val();
  const income = $("input:radio[name=income]:checked").val();
  const versatility = $("input:radio[name=versatility]:checked").val();
  const type = $("input:radio[name=type]:checked").val();

  $("button#start").submit(function(event) {
    $(".jumbotron").toggle()
    $("form#questions#question0").toggle();
    event.preventDefault();    
  });

  if 
})