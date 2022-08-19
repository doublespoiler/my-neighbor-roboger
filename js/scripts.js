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
};

function beepBoop(inputArray){
  const modifiedArray = [];
    inputArray.forEach(function(element){
    if(element === 1){
      modifiedArray.push("Beep!");
    }
    else if (element === 2){
      modifiedArray.push("Boop!");
    } else if (element === 3){
      modifiedArray.push("Won't you be my neighbor?")
    } else if (element > 9){
      const elementString = element.toString();
      const elementAsArray = elementString.split("");
      console.log(elementAsArray);
      if (elementAsArray.includes("3")){
        modifiedArray.push("Won't you be my neighbor?");
      } else if (elementAsArray.includes("2")){
        modifiedArray.push("Boop!");
      } else if (elementAsArray.includes("1")){
        modifiedArray.push("Beep!");
      } else {
        modifiedArray.push(element);
      }
    } else{
      modifiedArray.push(element);
    }
  });
  return modifiedArray;
}

//UI Logic
window.addEventListener("DOMContentLoaded", function(){
  console.log("loaded");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", handleSubmission);
});

function handleSubmission(event){
  event.preventDefault();
  const userInput = document.getElementById("user-input").value;
  const countArray= countUp(userInput);
  const resultArray = beepBoop(countArray).join("... ");
  console.log(resultArray);
  const resultDiv = document.getElementById("result-div");
  const paragraph = document.createElement("p");
  resultDiv.innerHTML = "";
  paragraph.append(resultArray);
  resultDiv.append(paragraph);
}

function resetForm(event){
  event.preventDefault();
};

function makeList(array){
  array.forEach(function(element){
    
  });
};