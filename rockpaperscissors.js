
//We prompt the user with a prompt dialog box asking them to input their choice and we store the string they type into a variable called userChoice
// var userChoice = prompt("Do you choose rock, paper or scissors?");


// The computer's choice has to be random so we use the Math.random() JavaScript method, which is randomly set to a decimal value between 0 and1. We take this value and store its value in a variable called computerChoice.

// var computerChoice = Math.random();
//························································
//NOTE: var compterChoice above has been moved to UI Logic in the $(document).ready block below.
// ·······················································

//We need a way for the computer to select rock, paper, or scissors.
//Because the variable, computerChoice, is storing a random value between 0 and 1 we can select from this range and update the value of computerChoice with the corresponding string of "rock", "paper", or "scissors"
//NOTE: if the first (computerChoice < 0.34) and second (computerChoice <= 0.67) branches have their order reversed computerChoice will equal "scissors" for ANYTHING <= 0.67. Because the document is read top to bottom the order is critical!

// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);

//························································
//NOTE: Branching above has been moved to UI Logic in the $(document).ready block below.
// ·······················································

//Now we will make a function that can compare the userChoice input and the computerChoice input to determine a winner. All possible game outcomes need to be figured here.
//There are only 3 conditions for this if/else branch: TIE, WIN, LOSS
function compare(choice1, choice2) {
//The first outcome is a tie. Begin the branch with condition that says if choice1 is the same as choice2, then return "The result is a tie"
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
//Next the 3 possible values of choice1 (rock, paper, scissors) conditions must be declared in three else/if branches.
//Within each of those branches conditions for a win and lose must be declared.
//NOTE: Because the document is read top-bottom the program will run through the branches until the conditions are met.
    else if (choice1 === "rock") {
      if (choice2 === "scissors") {
          return "rock wins";
      }

      else {
          return "paper wins";
      }
    }

    else if (choice1 === "paper") {
        if (choice2 === "scissors") {
            return "scissors wins";
        }

        else {
            return "paper wins";
        }
    }

    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors wins";
        }

        else {
            return "rock wins";
        }
    }
}
//RECAP
//We have established the prompt for the userChoice and also the ranges of values for computerChoice.
//Then we created the function called compare taking the arguments choice1 and choice2. Within compare() we have specified the conditions and outputs for a TIE, WIN and LOSS.
//Now, we can call compare() with the arguments userChoice and computerChoice and play the game! :)


$(document).ready(function() {
  $("#submit").click(function(event) {
    var userChoice = $("#user").val();
    $("#user").val("");
    console.log(userChoice);
    var computerChoice = Math.random();
	    if (computerChoice < 0.34) {
	    	computerChoice = "rock";
	    } else if(computerChoice <= 0.67) {
	    	computerChoice = "paper";
	    } else {
	    	computerChoice = "scissors";
	    }
	    console.log(computerChoice);
    var result = compare(userChoice, computerChoice);
    console.log(result);
	$(".result").append("<p>" + result + "</p>");
});
});
