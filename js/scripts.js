$("document").ready(function() {

  $("button#start").click(function(event) {
    $("#questions").toggle();
    $(".start").hide();
    event.preventDefault()
  });

  $("#submitButton").click(function(event) {
    event.preventDefault();
    const career = parseInt($("input:radio[name=optionsCareer]:checked").val());
    const task = parseInt($("input:radio[name=optionsTask]:checked").val());
    const company = parseInt($("input:radio[name=optionsCompany]:checked").val());
    const difficulty = parseInt($("input:radio[name=optionsDifficulty]:checked").val());
    const income = parseInt($("input:radio[name=optionsIncome]:checked").val());
    const versatility = parseInt($("input:radio[name=optionsVersatility]:checked").val());
    const type = parseInt($("input:radio[name=optionsType]:checked").val());
    let results = career + task + company + difficulty + income + versatility + type;
    if (results <= 10) {
      $("#c").show();
    } else if (results >= 11 && results <= 15) {
      $("#cPlusPlus").show();
    } else if (results >= 16 && results <= 20) {
      $("#cSharp").show();
    } else if (results >= 21 && results <= 25) {
      $("#css").show();
    } else if (results >= 26 && results <= 30) {
      $("#python").show();
    } else if (results >= 31 && results <= 35) {
      $("#ruby").show();
    } else if (results >= 36 && results <= 40) {
      $("#java").show();
    } else if (results >= 41 && results <= 45) {
      $("#javascript").show();
    } else if (results >= 46 && results <= 50) {
      $("#html").show();
    } else if (results >= 51 && results <= 55) {
      $("#sql").show();
    } else if (results >= 56 && results <= 60) {
      $("#swift").show();
    } else if (results >= 61 && results <= 65) {
      $("#perl").show();
    } else if (results === 70) {
      $("#PHP").show();
    }
  });
})