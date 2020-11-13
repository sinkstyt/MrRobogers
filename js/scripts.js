// Business Logic
let userInputsArray = [];
let allRogoberSaids = [];

function newMrRoboger(input) {
  let MrRobogerSponse = [];
  let response = "";
  const inputMax = parseInt(input);
  for (let i = 0; i < inputMax; i++) {
    i = i.toString();
    response = i;
    if (i.includes("3")) {
      response = "Won't you be my neighbor?";
      MrRobogerSponse.push(response);
      i = parseInt(i);
    } else if (i.includes("2")) {
      response = "Boop!";
      MrRobogerSponse.push(response);
      i = parseInt(i);
    } else if (i.includes("1")) {
      response = "Beep!";
      MrRobogerSponse.push(response);
      i = parseInt(i);
    } else {
      MrRobogerSponse.push(i); // i is being pushed still as typeof "String" here.
      i = parseInt(i);
    }
  }
  return MrRobogerSponse;
}

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("div#output-div").show();
    const currentInput = $("input").val();
    userInputsArray.push(" "+currentInput);
    let currentResponse = newMrRoboger(currentInput);
    for (let j = 0; j < currentResponse.length; j++) {
      allRogoberSaids.push(currentResponse[j]);
    }
    let robogerAllString = allRogoberSaids.join(" ");
    $("span.user-output").text(`What you have entered: ${userInputsArray}`);
    $("span.robot-output").text(`What Mr. Roboger has said: ${robogerAllString}`);
  });
  $("button.btn-primary").click(function() {
    $("span").show();
  });

  $("button[type='reset']").click(function() {
    $("form")[0].reset();
    $("input")[0].focus();
  });

  $("button.btn-outline-primary").click(function() {
    $("span").show();
  });

  $("button#hider-button").click(function() {
    $("span").hide();
  });
});