// Business Logic
let userInputsArray = [];
let allRogoberSaids = [];

  // Write a function that takes in a single input num. Func returns an array with each digit replaced as necessary a la FizzBuzz. For example, if at particular i-value, a 1 is found at any place-value of the i-value number ---> "Beep!"; 2  --> "Boop"; and 3 --> "Won't you be my neighbor?"; Numbers lacking 1s, 2s, and 3s will simply be pushed to the returnable array.
function newMrRoboger(input) {
  let MrRobogerSponse = [];
  let response = "";
  const inputMax = parseInt(input);
  for (let i = 0; i < inputMax; i++) {
    i = i.toString();
    if (i.search("3")) {
      response = "Won't you be my neighbor?";
      MrRobogerSponse.push(response);
      i = parseInt(i);
      continue;
    } else if (i.search("2")) {
      response = "Boop!";
      MrRobogerSponse.push(response);
      i = parseInt(i);
      continue;
    } else if (i.search("1")) {
      response = "Beep!";
      MrRobogerSponse.push(response);
      i = parseInt(i);
      continue;
    } else {
      MrRobogerSponse.push(i); // i is being pushed still as typeof "String" here.
      i = parseInt(i);
    }
  }
  allRogoberSaids.push(...MrRobogerSponse);
  return allRogoberSaids;
}

function mrRobogerSpeaks(input) {
  let currentNum = 0;}

function stillGoing(str) {
  // str possibilities: "Boop!", "Beep!" "Won't you be my neighbor?", "4444", "5555", etc.
  const checker = /[BW]/;
  // return value of String.prototype.search(): The index of the first match between the regular expression and the given string, or -1 if no match was found.
  if (str.search(checker) == "0") {
    // console.log("stillGoing f(x) got into its .search(checker) block");
    return str;
  }
  parseInt(str);
  let responseArray = [];
  for (let i = 0; i < 3; i++) {
    responseArray.push(Math.floor(Math.random() * str));
  }
  const outputString = responseArray.join(" ");
  return outputString;
}

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("div#output").show();
    // grab the user's inputted number and store as a newly declared variable
    const currentInput = $("input").val();

    // Push current user input into allUsersInputs array and push Mr. Roboger's current response to allRobogerSaids array
    userInputsArray.push(" "+currentInput);
    // Determine what Mr. Rogober says (his response):
    const currentResponse = stillGoing(mrRobogerSpeaks(currentInput));
      
    // Push Mr. Rogober's currentResponse into allRogoberSaids array
    allRogoberSaids.push(" "+currentResponse);
    // Have "What you have entered:" and "What robot has responded:" fields populate to <span> element with class="output-group":
    $("span.user-output").text(`What you have entered: ${userInputsArray}`);
    $("span.robot-output").text(`What Mr. Roboger has said: ${allRogoberSaids}`);

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
});

// Counts clicks to main submit button:
$("button.btn-primary")
    .data('counter', 0) // begin counter at zero
    .click(function() {
        let counter = $(this).data('counter'); // get
        $(this).data('counter', counter++ ); // set
        
    });