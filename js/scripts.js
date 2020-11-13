// Business Logic
let userInputsArray = [];
let allRogoberSaids = [];

  // Write a function that takes in a single input num as typeof "String". Func returns an array with each digit replaced as necessary a la FizzBuzz. For example, if at particular i-value, a 1 is found at any place-value of the i-value number ---> "Beep!"; 2  --> "Boop"; and 3 --> "Won't you be my neighbor?"; Numbers lacking 1s, 2s, and 3s will simply be pushed unchanged to the returnable array.
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
      // continue;
    } else if (i.includes("2")) {
      response = "Boop!";
      MrRobogerSponse.push(response);
      i = parseInt(i);
      // continue;
    } else if (i.includes("1")) {
      response = "Beep!";
      MrRobogerSponse.push(response);
      i = parseInt(i);
      // continue;
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
    // grab the user's inputted number and store as a newly declared variable
    const currentInput = $("input").val();

    // Push current user input into allUsersInputs array and push Mr. Roboger's current response to allRobogerSaids array
    userInputsArray.push(" "+currentInput);
    // Determine what Mr. Rogober says (his response):
    let currentResponse = newMrRoboger(currentInput);
    // Use a loop to push each index value from currentResponse array into allRobogerSaids array
    for (let j = 0; j < currentResponse.length; j++) {
      allRogoberSaids.push(currentResponse[j]);
    }
    // Change allRogoberSaids array to a string with a space passed as argument to .join(" ")
    let robogerAllString = allRogoberSaids.join(" ");
    // Have "What you have entered:" and "What robot has responded:" fields populate to <span> element with class="{APPROPRIATE]-output":
    $("span.user-output").text(`What you have entered: ${userInputsArray}`);
    $("span.robot-output").text(`What Mr. Roboger has said: ${robogerAllString}`);
  });
});

// What should happen when each of the four buttons gets clicked?
$(document).ready(function() {
  $("button.btn-primary").click(function() {
    $("span").show();
    // This primary button's functionality is kind of already fleshed out in the UI master function above...
  });

  // Reset button:  
  $("button[type='reset']").click(function() {
    $("form")[0].reset();
    $("input")[0].focus();
  });

  // button with text "show response history"
  $("button.btn-outline-primary").click(function() {
    $("span").show();
  });

  // button with text "hide these outputs"
  $("button#hider-button").click(function() {
    $("span").hide();
  });