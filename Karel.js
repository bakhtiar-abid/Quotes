function main(){
   //your code here
  putBeeper();
move();
turnLeft();
move();
  putBeeper();
  
goAgain();

}
   
    


function goAgain(){
   move();
turnRight();
move();
putBeeper();


   move();
   turnLeft();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   putBeeper();
}

function getGrades() {
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}

// Let's output this!
console.log(getGrades(90, 100, 75, 40, 89, 95));

// OUTPUT SHOULD BE: //
// [100, 75] <- Why? Because it started from index 1 and stopped at index 3
// so, index 3 (40) wasn't taken into consideration.
//
// If we remove the '3' parameter, leaving just (arguments, 1) we'd get
// every argument from index 1: [100, 75, 40, 89, 95].


// var message = "ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently ECMAScript 2020";


// alert("You have written "+ message.length + " characters, " + " you have characters " + (140-message.length) + " left. "); 

// var name = prompt("Enter your characters");
// var nameCount = name.length;
//  var maxCount = name.slice(0,140);

// alert(" You have entered "+ nameCount + " Characters "+ " Your characters are cut down to only 140 characters "+ maxCount)

// var name = prompt ("What's your name ?");

// var yourName = name.slice(0,1);

// var lastName = name.slice(1,14);

// var showingName = yourName.toUpperCase();

// var showingName1 = lastName.toLowerCase();

// alert(" Hello " + showingName + showingName1);

/*calculating humanAge*/

// var dogAge = prompt("Enter the dog age");

// var humanAge = (dogAge -2) * 4 + 21;
// alert(" This dog age is " +  humanAge + " in Human age ");

function getMilk(bottles) {
    var perBottle = Math.floor(bottles/1.5);   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("you will get "+ perBottle);
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

}
getMilk(5);