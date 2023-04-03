# Timed-JS-Quiz

#NEED TO EDIT FOR CURRENT PROJECT

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| JavaScript | [https://www.w3schools.com/jsref/event_onclick.asp](https://www.w3schools.com/jsref/event_onclick.asp);  [https://www.w3schools.com/jsref/dom_obj_pushbutton.asp](https://www.w3schools.com/jsref/dom_obj_pushbutton.asp); [https://www.w3schools.com/jsref/prop_style_position.asp](https://www.w3schools.com/jsref/prop_style_position.asp); [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array);[https://www.w3schools.com/jsref/prop_win_localstorage.asp](https://www.w3schools.com/jsref/prop_win_localstorage.asp);
 
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random); [https://www.w3schools.com/js/js_objects.asp](https://www.w3schools.com/js/js_objects.asp); [https://www.w3schools.com/js/js_strings.asp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

## Description 

This application is a JavaScript Quiz. The Quiz has a start button that begins the quiz. A timer starts when the quiz begins. The next question appears once an answer is chosen. If a question is asked incorrectly, the timer is reduced by 15 seconds. The user plays until all questions are answered or the timer reaches zero. The user is then presented with their score and the option to enter their initials to be saved to the high score page. 



![Screenshot of My Site](images/PG%20Site.PNG)




[Visit the Deployed Site](https://tdusenbury.github.io/Password-Generator-Project/)


## Code Example

Instead of using the array method to state all of my elements, I chose to use the object method by defining "keys" and then pulling each of the chosen elements into a new string called customerChoices.

```
Created an object:
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*~+={}[]:,./"
}

The new string:
var customerChoices =""

Directed choices to go into the new string:
if (confirmLowerCase === true) {
    console.log("Before ", customerChoices);
    customerChoices = customerChoices + keys.lowerCase;
    console.log("After ", customerChoices);
}
```


## Usage 

This Password Generator can be used by anyone who wants to control most of the length and types of characters in a random password.


## Learning Points 

This project involved utilizing JavaScript. I tried to approach it section by section initially, but became stuck. I was able to get advice from my tutor as well as classmates and went back to writing each section followed by a console.log to test that the code was working without error. I learned about arrays and objects, random number/character generation, the types of message boxes prompts, alerts, and confirms can produce.

I struggled with this project every time I tried to move to the next part before it was ready. It took lots of testing before I was able to get my "If not truthy" alert correct if someone did not choose any options. I was trying to evaluate it as an equality not as a true/false statement.
Fortunately, a great classmate helped explain my error and helped me simplify the statement.
Here are pictures of the code that finally worked and the message it now produces if no character options are chosen:

![Screenshot of My Site](images/Code%20if%20No%20Choices.PNG)


![Screenshot of My Site](images/No%20Choices%20Made%20Message.PNG)

## Author Info


TAMARA "T" DUSENBURY
```
    I am excited to take my knowledge of various industries into the virtual realm.

* [Portfolio](https://youtu.be/bHX54GCrDB4)
* [LinkedIn](https://www.linkedin.com/in/tamara-dusenbury-02ab8591/)
* [Github](https://github.com/tdusenbury)
```
```


## Credits

Shout out to Laurie Fish for helping keep the ideas rolling and weird for more hours than we care to admit; to my tutor Katie; and to Liubov Sobolevskaya for making me think so very hard!!!


## License

MIT License

Copyright (c) 2023 tdusenbury

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.