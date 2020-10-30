// Business Logic
function mrRobogerSpeaks(input) {
  
}


// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("div#output").show();
    // grab the user's inputted number and store as a newly declared variable
    const currentInput = $("input").val();
    // If this is FIRST CLICK on SUBMIT BUTTON: declare an empty array to hold all of user's inputs AND declare an empty array to hold Mr. Roboger's responses
    if ($("button.btn-primary").data('counter') === 1) {
      let userInputsArray = [];
      let allRogoberSaids = [];
    }
    // Push current user input into allUsersInputs array and push Mr. Roboger's current response to allRobogerSaids array
    userInputsArray.push(currentInput);
    // Determine what Mr. Rogober says (his response). AKA DO BUSINESS LOGIC
      // business logic(s)
    const currentResponse = mrRobogerSpeaks(currentInput);
    // Push Mr. Rogober's currentResponse into allRogoberSaids array
    allRogoberSaids.push(currentResponse);
    // Have "What you have entered:" and "What robot has responded:" fields populate to <span> element with class="output-group":
    

  });
});

// What should happen when each of the four buttons gets clicked?...
$(document).ready(function() {
  $("button.btn-primary").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });

  $("button[type='reset']").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button.btn-outline-primary").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

  $("button#hider-button").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
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