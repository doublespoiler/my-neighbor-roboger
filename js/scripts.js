//Business Logic
function countUp(userInputString){
  const userInputArray = userInputString.split("");
  const userInputValue = parseInt(userInputString);
  const countUpArray = [];
  if (isNaN(userInputString) === true || userInputString.trim() === ""){
    return 0;
  } else { for (i = 0; i < userInputValue + 1; i++){
    countUpArray.push(i);
  }
    console.log(countUpArray);
    return countUpArray;
  }
}

<<<<<<< HEAD
=======
function beepBoop(inputArray){
  const modifiedArray = [];
    inputArray.forEach(function(element){
    if(element === "1"){  //replace 1 with beep
      modifiedArray.push("Beep!");
    }
    else {   
      modifiedArray.push(element);
    }
  });
  //replace 2 with boop
  //replace 3 with won't you be my neighbor
  //returns new array
  return modifiedArray;
}

>>>>>>> 0c808f8 (Make beepBoop() pass test 1..)
//UI Logic
window.addEventListener("load", function(event){
  event.preventDefault();
  const submitButton = document.querySelector("form#submit-button");
  const resetButton = document.querySelector("form#reset-button");
  const form = document.querySelector("form");

  form.addEventListener("submit", handleSubmission);
  form.addEventListener("reset", resetForm)
});

function handleSubmission(event){
  event.preventDefault();
}

function resetForm(event){
  event.preventDefault();
};