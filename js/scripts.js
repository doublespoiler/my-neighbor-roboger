//Business Logic
function countUp(userInputString){
  const userInputArray = userInputString.split("");
  const userInputValue = parseInt(userInputString);
  const countUpArray = [];
  if (isNaN(userInputString) === true){
    return 0;
  } else { for (i = 0; i < userInputValue + 1; i++){
    countUpArray.push(i);
  }
    console.log(countUpArray);
    return countUpArray;
  }
}

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