$("document").ready(function() {

  $("submit#submitButton6").submit(function(event) {
  const career = parseInt($("input:radio[name=career]:checked").val());
  const task = parseInt($("input:radio[name=task]:checked").val());
  const company = parseInt($("input:radio[name=company]:checked").val());
  const difficulty = parseInt($("input:radio[name=difficulty]:checked").val());
  const income = parseInt($("input:radio[name=income]:checked").val());
  const versatility = parseInt($("input:radio[name=versatility]:checked").val());
  const type = parseInt($("input:radio[name=type]:checked").val());
  let results = career + task + company + difficulty + income + versatility + type;
  event.preventDefault();
  });
  
  if (results <= 10) {
    $("c").show();
  }

  if (results >= 11 && results <= 15) {
    $("cPlusPlus").show();
  }

  if (results >= 16 && results <= 20) {
    $("cSharp").show();
  }

  if (results >= 21 && results <= 25) {
    $("css").show();
  }

  if (results >= 26 && results <= 30) {
    $("python").show();
  }

  if (results >= 31 && results <= 35) {
    $("ruby").show();
  }

  if (results >= 36 && results <= 40) {
    $("java").show();
  }

  if (results >= 41 && results <= 45) {
    $("javascript").show();
  }

  if (results >= 46 && results <= 50) {
    $("html").show();
  }

  if (results >= 51 && results <= 55) {
    $("sql").show();
  }

  if (results >= 56 && results <= 60) {
    $("swift").show();
  }

  if (results >= 61 && results <= 65) {
    $("perl").show();
  }

  if (results = 70) {
    $("personalHomePage").show();
  }
})