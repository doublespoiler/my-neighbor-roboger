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

function beepBoop(inputArray){
  const modifiedArray = [];
    inputArray.forEach(function(element){
    if(parseInt(element) === 1){  //replace 1 with beep
      modifiedArray.push("Beep!");
    }
    else if (parseInt(element) === 2){  //replace 2 with boop
      modifiedArray.push("Boop!");
    } else if (parseInt(element) === 3){   //replace 3 with won't you be my neighbor
      modifiedArray.push("Won't you be my neighbor?")
    } else if (parseInt(element) > 11){
      const elementAsArray = element.split("");
      console.log(elementAsArray);
      if (elementAsArray.includes("3")){
        modifiedArray.push("Won't you be my neighbor?");
      }
    } else{
      modifiedArray.push(element);
    }
  });
  return modifiedArray;
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