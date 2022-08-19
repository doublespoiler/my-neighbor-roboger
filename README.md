
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
  </details>
</details>

  <details>
    <summary>Describe beepBoop()</summary> 
      Test 1: "It should return an array that has the same elements as the input array, but with every '1' replaced with 'Beep!'"
        <blockquote>Code: <br>
        beepBoop(["0", "1", "2"]) <br>
        Expected Result: <br>
        ["0", "Beep!", "2"] <br>
        </blockquote>
      Test 2: "It should return an array that is a mirror of the input, but with every '1' replaced with 'Beep!' and every '2' replaced with 'Boop!'"
        <blockquote>Code: <br> 
        beepBoop(["0", "1", "2", "0", "2", "1"]) <br>
        Expected Result: <br>
        ["0", "Beep!", "Boop!", "0", "Boop!", "Beep!"]<br>
        </blockquote>
      Test 3: "It should return an array that is a mirror of the input, but with every '1' replaced with 'Beep!', every '2' replaced with 'Boop!' and every 3 replaced with 'Won't you be my neighbor?'"
        <blockquote>Code: <br>
        beepBoop(["3", "0", "1", "2", "3", "0", "2", "1"])<br> 
        Expected Result: ["Won't you be my neighbor?", "0", "Beep!", "Boop!", "Won't you be my neighbor?" "0", "Boop!", "Beep!"]<br>
        </blockquote>
      Test 4: "It will console.log() an array made of the element's individual digits if the element is greater than 11."<br> <!--This is the part where I realized I didn't take into account numbers larger than 11 for the rules -->
        <blockquote>Code: <br>
        beepBoop(["12"])<br>
        Expected Result: ["1", "2"]<br>
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