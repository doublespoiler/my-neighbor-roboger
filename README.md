
# My Neighbor Roboger

By Skylan Lew

#### Project 3 - Arrays and Looping

For Epicodus

Takes a user input number, and returns a list counting from 0 to that number, replacing numbers containing 1, 2 and 3 with various phrases (see description).

## Technologies Used

* Javascript
* HTML
* CSS
* Bootstrap
* QMK

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* To clone:
  * git clone https://github.com/doublespoiler/my-neighbor-roboger
  * OR
  * Navigate to the repository, click the "Code" button, and "Download Zip".  You will need to unzip this folder to a place you can access.
* open index.html located in the portfolio-main folder in your web browser or IDE/text editor
  * alternatively, access through [Github Pages https://doublespoiler.github.io/my-neighbor-roboger](https://doublespoiler.github.io/my-neighbor-roboger)

## Tests

<details>
  <summary>Collapse/expand</summary>
  <details>
    <summary>Describe countUp()</summary>
<<<<<<< HEAD
    <blockquote>
      Test 1: "It should return an array of numbers from 0 to the user's inputted number"  <br>
      Code:  <br>
        countUp("5");  <br>
      Expected Result: [0, 1, 2, 3, 4, 5]  <br>
      Test 2: "It should return 0 if the input is not fully a number" <br>
        Plan on if countUp===0 (in handleSumbission) to show error "input is not a number" <br>
      Code:  <br>
        countUp("hello6");  <br>
      Expected Result: 0  
      Test 3: "It should return 0 if the input blank" <br>
        Plan on if countUp===0 (in handleSumbission) to show error "input is not a number" <br>
      Code:  <br>
        countUp("      ");  <br>
      Expected Result: 0  
    </blockquote>
=======
      Test 1: "It should return an array of numbers from 0 to the user's inputted number"
      <blockquote>
        Code: <br>
        countUp("5"); <br>
        Expected Result: <br> 
        [0, 1, 2, 3, 4, 5] <br>
      </blockquote>
      Test 2: "It should return false if the input is not fully a number" <br>
      Plan on if countUp===false (in handleSumbission) to show error "input is not a number"
      <blockquote>
        Code:  <br>
        countUp("hello6");  <br>
        Expected Result: <br> 
        false <br> 
      </blockquote>
      Test 3: "It should return false if the input blank" <br>
      Plan on if countUp===false (in handleSumbission) to show error "input is not a number" 
      <blockquote>
        Code:  <br>
        countUp("      "); <br>
        Expected Result: <br>
        false <br> 
      </blockquote>
      Test 4: "It should return an array with each digit of the input number being its own array entry"
      <blockquote>
        Code:  <br>
        countUp("123");  <br>
        Expected Result: <br> false <br>
      </blockquote>
>>>>>>> 0c808f8 (Make beepBoop() pass test 1..)
  </details>


  <details>
<<<<<<< HEAD
    <summary>Describe replaceNumbers()</summary> 
    <blockquote>
      Test 1:  
      Code:  
      Expected Result: 
=======
    <summary>Describe beepBoop()</summary> 
      Test 1: "It should return an array that has the same elements as the input array, but with every '1' replaced with 'Beep!'"
      <blockquote>Code: <br>
      beepBoop(["0", "1", "2"]) <br>
      Expected Result: <br>
      ["0", "Beep!", "2"] <br></blockquote>
    </blockquote>
      Test 2: 
      <blockquote>Code: <br> 
        beepBoop <br>
        Expected Result: <br>
        <br>
      </blockquote>
>>>>>>> 0c808f8 (Make beepBoop() pass test 1..)
    </blockquote> 
  </details>

  <details>
    <summary>Describe countUp()</summary>  
      Test 2: 
      <blockquote>
        Code: <br> 
        <br>
        Expected Result: <br>
        <br>
      </blockquote>
  </details>
</details>


## Known Bugs

* _Any known issues_
* _should go here_

## License

[GNU GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)

Copyright (c) 2022 Skylan Lew