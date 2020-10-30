// Business Logic
let userInputsArray = [];
let allRogoberSaids = [];

function mrRobogerSpeaks(input) {
  // if (typeof input !== "number") {
  //  input = parseInt(input);
  // }
  let response;
  // typeof input //--> string
  // Use a loop to check all the characters of the string for first instance of "1"
  for (const char of input) {
    if (char == "3") {
      response = "Won't you be my neighbor?";
      return response;
    }
  }
  for (const char of input) {
    if (char == "2") {
      response = "Boop!";
      return response;
    }
  }
  for (const char of input) {
    if (char == "1") {
      response = "Beep!";
      return response;
    }
  }
  return input;
}

function stillGoing(str) {
  // str possibilities: "Boop!", "Beep!" "Won't you be my neighbor?", "4444", "5555", etc.
  const checker = /[BW]/;
  // return value of String.prototype.search(): The index of the first match between the regular expression and the given string, or -1 if no match was found.
  if (str.search(checker) == "0") {
    // console.log("stillGoing f(x) got into its .includes() block");
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
    // Determine what Mr. Rogober says (his response). AKA DO BUSINESS LOGIC
      // business logic calls:
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
        // do something else...
    });