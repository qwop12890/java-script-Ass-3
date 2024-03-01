// user input and Condition Statement


//part 1
var cityname = prompt("Enter the City Name :");
if (cityname === "karachi"){
    alert("Wellcome to city of light");
}
else{
    alert("Welcome to"+" "+ cityname);
}


//part 2

var Gender = prompt("Enter Your Gender : ");
if(Gender === "male"){
    alert("Good Morning Sir")
}
else if (Gender === "Female"){
    alert("Welcome Ma`am");
}
else{
    alert("You Enter a Wrong Gender")
}


//part 3
var colorlight = prompt("Enter athe Color of Road Traffic Signal : ")
if(colorlight === "Red"){
    alert("Must Stop");
}
else if(colorlight === "Yellow"){
    alert("Ready to Move");
}
else if (colorlight === "Green"){
    alert("Move Now");
}
else{
    alert("You Enter a Wrong Color")
}



//part 4
var remainingFuel = prompt("Enter the remaining fuel in liter");
if (remainingFuel < 0.25){
    alert("plz refill the fuel in Car");
}
else{
alert("Fuel level is sufficient");
}



//part 5

var aa = 4;
if(++aa ===5){
    alert("given condition for variable is ture");
}

var ab = 82;
if(ab++ === 83){
    alert("given condition for variable ab is ture")
}


//part 7




const  secretNumber = Math.floor(Math.random() *10 ) + 1;
userGuse = parseInt(prompt("Guess a number between 1 and 10"));


if(userGuse === secretNumber){
    alert("Bingo ! Correct Number !");
}
else if (Math.abs(userGuse - secretNumber) === 1){
    alert("close enough! the correct answer is " + secretNumber);
}
else{
    alert("Sorry Try again. the correct answer  is " + secretNumber)
}

if else and else if statement



// part 8


userinput = prompt("Enter a Number : ");
if (userinput % 3 === 0){
    alert(userinput + " is devided by 3")
}
else{
    alert(userinput + " " + " is not devided by 3")
}
//part 1


var number1 = prompt("Enter the first number");
var number2 = prompt("Enter the Second number");
if(number1>number2){
    alert(number1 + " is larger ")
}
else if (number2>number1){
    alert(number2 , " is larger");
}
else{
    alert("Both interger are Equall");
}


//part 3

var number = prompt("Enter a Number");
if (number<0){
    alert("Number is Positive");
}
else if (number>0){
    alert("number is Negative");
}
else if(number=0){
    alert("number is zero");
}
else{
    alert("You enter a wrong number");
}










///part 6


var hour = prompt("Enter a time in Hours");
if(hour>6 && hour<=18){
    alert("Good Day")
}
else{
    alert("Good Evening");
}


// part 7

 var time = prompt("Enter a time");
 if(time>=0 && time<12){
    alert("Good Morning !");
 }
 else if (time>=12 && time<17){
    alert("Good Afternoon");
 }
 else if (time>=17 && time<21){
    alert("good Evening");
 }
 else if (time>=21 && time<=24){
    alert("Good Night");
 }
 else{
    alert("You Enter a Wrong time")
 }