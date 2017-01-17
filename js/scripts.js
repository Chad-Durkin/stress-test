$(document).ready(function() {
var stressCounter = 0;
var stressCounter2 = 0;
var stressCounter3 = 0;

  $("form#stress-test-questions").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=symptoms]:checked").each(function() {
      stressCounter += parseInt($(this).val());
    });
    $("input:checkbox[name=coping]:checked").each(function() {
      stressCounter2 += parseInt($(this).val());
    });
    $("input:checkbox[name=life-style]:checked").each(function() {
      stressCounter3 += parseInt($(this).val());
    });
    $("input:checkbox[name=life-style]:not(:checked)").each(function() {
      stressCounter3 += -(parseInt($(this).val()));
    });
    $("#results").show();
    console.log("counter1 is " + stressCounter);
    console.log("counter2 is " + stressCounter2);
    console.log("counter3 is " + stressCounter3);
    $("#symptoms-result").text(stressCounter);
    $("#coping-result").text(stressCounter2);
    $("#life-style-result").text(stressCounter3);
    $("#final-result").text(stressCounter3 + stressCounter2 + stressCounter);
  });
});
