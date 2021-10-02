// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
 
*/
 let num=Number(prompt('Enter a Number'));
 if ((num%2)===0){
    alert("Number is even");
  }
    else {
    alert("Number is odd")
  }

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=Number(prompt('Enter first Number'));
let num2=Number(prompt('Enter Second Number'));
let max;
if (num1>=num2){
  if(num1===num2)
    {
      alert("Both Numbers are equal");
    }
    else{
      max = num1;
      alert("Max value is "+max);
    }

}
  else {
    max= num2;
    alert("Max value is "+max);
  }



// 3. Convert the above code using`?` terniary operator
 num1>num2 ?
 alert("max value is "+num1):
 alert("max value is "+ num2)
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt('Enter Your House Name');
if (houseName=="stark") {
  alert("winter is coming");
}
else if(houseName =="lannister"){
    alert("A lannister always pays his debt");
}
else {
   alert("All men must die");
}

// 5. Convert the above code using`?` terniary operator

houseName=="stark" ? alert("winter is coming"): alert("All men must die")
houseName =="lannister" ? alert("A lannister always pays his debt"): alert("All men must die")

// Switch
switch (houseName){
  case "stark":
    alert("winter is coming");
    break;
  case "lannister":
    alert("A lannister always pays his debt");  
    break;
    default:
      alert("All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = prompt("enter code give for month to know no of days in that month \n month code:-jan, fab, mar, apr, may, jun, jul, aug, sep, oct, nov, dec")
switch (month) {
  case "jan":
    alert("31 days in January")
    break;
  case "fab":
    alert("28-29 days in February")
    break;
  case "mar":
    alert("31 days in March")
    break;
  case "apr":
    alert("30 days in April")
   break;
   case "may":
    alert("31 days in May")
    break;
  case "jun":
    alert("30 days in June")
    break;
  case "jul":
    alert("31 days in July")
    break;
  case "aug":
    alert("31 days in August")
   break;
   case "sep":
    alert("30 days in September")
    break;
  case "oct":
    alert("31 days in October")
    break;
  case "nov":
    alert("30 days in November")
    break;
  case "dec":
    alert("31 days in December")
   break;
 default:
 alert(`please write month code properly`)
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
//  if..else vs switch

//if-else
let salery = Number(prompt("Enter your salary"));
if (salery <= 20000) {
  alert(`in hand amount is ${salery - (salery * 0.10)}`);
}
else if (salery <= 40000) {
  alert(`in hand amount is ${salery - (salery * 0.20)}`);

}
else if (salery > 50000) {
  alert(`in hand amount is ${salery - (salery * 0.20)}`);
}
else {
  alert("given value is invalid");
}


// switch


let salery = Number(prompt("Enter your salary"));

alert(salery)
switch (true) {
  case (salery <= 20000):
    alert(`in hand amount is ${salery - (salery * 0.10)}`);
    break;
  case (salery <= 40000):
    alert(`in hand amount is ${salery - (salery * 0.20)}`);
    break;
  case (salery > 50000):
    alert(`in hand amount is ${salery - (salery * 0.30)}`);
    break;
  default:
    alert("given value is invalid");
}


/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

//if -else

let marks = Number(prompt("Enter your Marks"));
if (marks > 100){
  alert("Marks can't be greater than 100")
}
else if (marks > 80 && marks < 100){
  alert("Grade A")
}
else if (marks > 50  && marks < 80){
  alert("Grade B")
}
else if (marks > 30  && marks < 50){
  alert("Grade C")
}
else if (marks > 0  && marks < 30){
  alert("Grade D")
}
else {
  alert("entered Marks is invalid")
}
// switch
let marks = Number(prompt("Enter your Marks"));
switch (true){
  case (marks > 100):
    alert("Marks can't be greater than 100")
    break;
  case (marks > 80 && marks < 100):
    alert("Grade A");
    break;
  case (marks > 50  && marks < 80):
    alert("Grade B"); 
    break;
    case (marks > 30 && marks < 50):
    alert("Grade C");
    break;
  case (marks >= 0  && marks < 30):
    alert("Grade D");
    break;
    default:
      alert("entered Marks is invalid")

}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside");
switch (weather) {
  case "sunny":
    alert("Wear a T-shirt");
    break;
  case "rainy":
    alert("Don't forget to take your reincoat");
    break;
  case "hot":
   alert("alert Get a hanky");
   break;
   case "freezing":
     alert("Get your sweeter on");
     break;
     default:
       alert("Not a valid outside");
}
