 // chapter #21-25 Task #1

 var first = prompt("What is your first name?");
 var last = prompt("What is your last name?");
 var fullName = first + " " + last;
  
 document.write("<b> Hello </b>" +  fullName + "<br/>");

 // chapter #21-25 Task #2

 var moblieSpec = "<b> My favorite phone is: </b>";
 var mobleSpe = " Samsung Galaxy S6 Edge Plus"; 
 
 var moblieLen = moblieSpec.length;
 var moblie = mobleSpe.length;
     
 document.write("<br/>" + moblieSpec + mobleSpe);     
 document.write("<br/>" + "<b> Length of string: </b>" + moblie);


// chapter #21-25 Task #3

 var countryName = "Pakistan";
 var find = countryName.indexOf("n");  

 document.write("<br/>" + "<br/>" + "<b> String: </b>" + countryName);
 document.write("<br/>" + "<b> index of 'n' : </b>" +  find);

// chapter #21-25 Task #4

 var greet = "Hello World";
 var findOne = greet.lastIndexOf("l");
 
 document.write("<br/>" + "<br/>" + "<b> String: </b>" + greet);
 document.write("<br/>" + "<b> Last Index of 'l' : </b>" +  findOne);

// chapter #21-25 Task #5

 var countryNameOne = "Pakistani";
 var findOne = countryNameOne.charAt(3);
 
 document.write("<br/>" + "<br/>" + "<b> String: </b>" +  countryNameOne);
 document.write("<br/>" + "<b> Character at index 3: </b>" + findOne);

// chapter #21-25 Task #6

 var firstOne = prompt("What is your first name again? ");
 var lastTwo = prompt("What is your last name again? ");
 var fullNameZero = firstOne.concat(lastTwo);
  
  document.write("<br/>" + "<br/>" + "<b> After concat method(): </b>" + "  " + fullNameZero);

// chapter #21-25 Task #7

 var cityName = "Hyderabad";
 var aCityName = "Hyderabad";

 aCityName = aCityName.replace("Hyderabad", "Islamabad");

 document.write("<br/>" + "<br/>" + "<b> City: </b>"+ cityName);
 document.write("<br/>" + "<b> After replacement: </b>" + aCityName); 

// chapter #21-25 Task #8

 var message = "Ali and Sami are best friends.They play cricket and football together." 
 var replaceAMessage =  "Ali and Sami are best friends.They play cricket and football together."
  
replaceAMessage = replaceAMessage.replace("Ali and Sami are best friends.They play cricket and football together.","Ali & Sami are best friends.They play cricket & football together.");
 
 document.write("<br/>" + "<br/>" + "<b> Message: </b> " + message);
 document.write("<br/>" + "<b> After replacement: </b>" + replaceAMessage);

// chapter #21-25 Task #9

 var num = 472;
 var strinGinNum = num.toString();
 var stri = typeof(strinGinNum);
 
 document.write("<br/>" + "<br/>" + "<b> Value: </b>" + strinGinNum);
 document.write("<br/>" + "<b> Type: </b>" + stri);

// chapter #21-25 Task #10

 var dry = "peanuts";
 var dryOne = dry.toUpperCase();
 
 document.write("<br/>" + "<br/>" + "<b> User input: </b>" + dry);
 document.write("<br/>" + "<b> Upper case: </b>" + dryOne); 

// chapter #21-25 Task #11

 var language = prompt('What is your favourite programming language')
 var select = language.charAt(0).toUpperCase()
 var slices = language.slice(1, 10) 
 
//  console.log(select + slices);
 
 document.write("<br/>" + "<br/>" + "<b> User input: </b>" + language);
 document.write("<br/>" + "<b> Title Case: </b>" + select + slices);

// chapter #21-25 Task #12

 var num = 35.36;

 var numTOStrinG = num.toString();

 var num1 = numTOStrinG.slice(0, 2);

 var num2 = numTOStrinG.slice(3, 5);

 var num3 = num1 + num2;
 
 document.write("<br/>" + "<br/>" + "<b> Number: </b>" + num)  
 document.write("<br/>" + "<b> Result: </b>" + num3 + "<br />");

// chapter #21-25 Task #13

 var userName = prompt("Enter username");

 for(var i = 0; i < userName.length; i++){

  if (userName.charCodeAt(i) === 38 || userName.charCodeAt(i) === 35 ||
      userName.charCodeAt(i) === 64 || userName.charCodeAt(i) === 36) {     
   
          //  ASCII CODE 35(#) 38(%) 64(@) 36($) ASCII CODE
   
            alert("Enter a valid  username.");
      }
 }

 // chapter #21-25 Task #14

 var userPrompt = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'ma?");
 var bakerArr = ["cake", "apple pie","cookie", "chips" , "patties"];

  var myFlag, indeX;

  var changeCase = userPrompt.toUpperCase();
    // console.log(changeCase);
  
  for (var i = 0; i < bakerArr.length; i++) {   
     
   var changeCases = bakerArr[i].toUpperCase()
     
 
    if (changeCase === changeCases) {

      myFlag = true;
      indeX = i;     
      
      break;
  }
  
   else {
         myFlag = false;
      }
     
 } 
  
  if (myFlag === true) {      
       document.write(" <br /> " + userPrompt + " is available at index " + indeX + " in our bakery <br/>");     
  }   
   
  else {   
   alert("We are sorry " + userPrompt + " is  not available in our bakery"); 
  }


 // chapter #21-25 Task #15

 var input = prompt("Enter password"); 

      console.log(input.length);      

for (var i = 0; i < 1; i++) {

  if (input !== i && input.length > 6) {
    alert("password is valid");
    break;
  }
  
  else if(input.charCodeAt(i) === 38 || input.charCodeAt(i) === 35 ||
          input.charCodeAt(i) === 64 || input.charCodeAt(i) === 36) {
            alert('password is incorrect')

           //  ASCII CODE 35(#) 38(%) 64(@) 36($) ASCII CODE
      }
  
   else
    alert("Password should not start with number and password length greater than 6 ");
}

 

 //chapter #21-25 Task #16

 var str = "University of Karachi";    
 
           document.write("<br/>")
     
      for(var a = 0; a < 1; a++) {                 
        document.write(str.toString().split(''));                 
      }

  //chapter #21-25 Task #17

  var userInput = "Pakistan";

  var lastChar = userInput.charAt(7)

    //  console.log(lastChar);

  document.write("<br /> <br />" + "<b>User input: </b>" + userInput + "<br />")  
  document.write("<b>Last character of input: </b>" + lastChar + "<br />")  

 // chapter #21-25 Task #18

 var sentence = "The quick brown fox jumps over the lazy dog.";
 var lowerCase =  sentence.toLowerCase()
  var searchGlobal = lowerCase.match(/the/g).length  
   
   console.log(searchGlobal);   
  
  document.write("<br /> " + "<b> Text: </b>" + sentence)
  document.write("<br />" + "<b> There are </b> " + searchGlobal + ' occurrence(s) of word the')
  
  // chapter #26-30 Task #1
 
 var num = 3.45214

 document.write("<br/>" + "<br/>" + "<b> number: </b>" + num + "<br>");

 document.write("<b> round off value: </b>" + Math.round(num) + "<br>");   

 document.write("<b> floor value: </b>" + Math.floor(num) + "<br>");        

 document.write("<b> ceil value: </b>" + Math.ceil(num) + "<br><br>"); 

 // chapter #26-30 Task #2
 
 var num1 = -2.673

 document.write("<b> number: </b>" + num1 + "<br>");

 document.write("<b> round off value: </b>" + Math.round(num1) + "<br>");   

 document.write("<b> floor value: </b>" + Math.floor(num1) + "<br>");        

 document.write("<b> ceil value: </b>" + Math.ceil(num1) + "<br><br>");     

 // chapter #26-30 Task #3

  var absoluteValue = -4;

  var value = Math.abs(absoluteValue)

  document.write("The absolute value of " + absoluteValue + " is " + value + "<br />")  

 // chapter #26-30 Task #4

 var random = Math.random() * 6;
     random = Math.ceil(random);
       // random = Math.floor(random) + 1;
  document.write("<br/>" + "random dice value: " + random);
 
 // chapter #26-30 Task #5

  var randomNumber = Math.random() * 2;
     randomNumber = Math.ceil(randomNumber);

      //randomNumber = Math.floor(randomNumber) + 1;

      document.write(randomNumber);
      document.write("<br/>");
  
  var coin = randomNumber === 1 ? "Tails" : "Heads";

      document.write("random coin value: " + coin);
      document.write("<br/><br/>");

 // chapter #26-30 Task #6

 var ranDom = Math.random() * 100;

 var ranDomOne = Math.round(ranDom);

 document.write( "random number between 1 to 100: "  + ranDomOne + "<br />");

 // chapter #26-30 Task #7

 var yourWeight = parseInt(prompt("Enter your weight in kilograms"))

        document.write("The weight of user is " + yourWeight + " kilograms")

 // chapter #26-30 Task #8

  var guessANumber = +prompt("Enter a number between 1 to 10")

  var secretNumber = Math.floor(Math.random() * 10);
  // console.log(secretNumber);

   if(guessANumber == secretNumber) {

     alert("Congratulations your enter number is correct")
   }
   else {
     alert("try again" + " The number is " + secretNumber)
   }
  

 // chapter #31-34 Task #1

 document.write("<h3> Date  </h3>")

 var currentDate = new Date();

 document.write(currentDate + "<br />");

 // chapter #31-34 Task #2

 //var monthNames = [""];

 var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug", "Sep","Oct" ,"Nov", "Dec"];
   
 var right = new Date();

 var monthName = right.getMonth();
 
 document.write("<br/>" +"Current month: " + months[monthName] + "<br />");

 // chapter #31-34 Task #3  

 var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
   
 var rightNow = new Date();
 
 var c = rightNow.getDay();
    
 alert("Today is " + days[c] );

 // chapter #31-34 Task #4

 var how = new Date();
 var toDay = how.getDay();

 if(toDay === 6 || toDay === 0){   
   alert("It's Fun Day"); 
 }
 else {
   alert("It's Normal Day");   
}

 // chapter #31-34 Task #5

 var noww = new Date();

 var datee = noww.getDate();

 if(datee < 16){ 
  alert("First fifteen days of the month");
}    

 else{ 
  alert("Last Days of month"); 
}

// chpater #31-34 Task #6

var myObJ = new Date();
 
 var millisecondS = myObJ.getTime();
 
document.write("<br/>" + "Current Date: " + myObJ +
                "<br/>" + "\n Elapsed Milliseconds Since January 1 1970: " +
                 millisecondS +"<br/>"  +"\n Elapsed Minutes Since January 1 1970: "
                 + millisecondS/60000);

 // chapter #31-34 Task #7
 
 var newObj = new Date();

 var hours = newObj.getHours();

  if(hours < 12){

   alert("It's AM");

}
  else{
    alert("It's PM");
}

 // chapter #31-34 Task #8

 var laterObj = new Date("31-Dec-2020");

 document.write("<br/>" + "<br/>" + "Later Date: " + laterObj);

 // chapter #31-34 Task #9
 
 var differenceS = new Date().getTime() - new Date("June 18, 2015").getTime();

var a = differenceS / (1000 * 60 * 60 * 24);
   
    a = Math.floor(a);
   
document.write("<br/>" + "<br/>" + a  + " days have passed since 1st Ramadan, 2015" + "<br/>");

 // chapter #31-34 Task #10

 var daate = new Date("December 5, 2015");

 var day = new Date();

 var iff = day.getTime() - daate.getTime();

 var secondss = iff / 1000;

 var difff = Math.abs(secondss);


 document.write("<br/>" + "On reference date: " + daate + 
                "\n" +'<br/>' + difff + 
                " seconds has passed since beginning of 2015");

 // chapter #31-34 Task #11
 
 var reset = new Date();

 var resetAtime = new Date(reset.getTime()-1000*60*60); 

 document.write("<br/>" + "<br/>" +"Current Date: " + reset + 
                "<br/>" + "1 hour ago it was: " + resetAtime + "<br/>" );

 // chapter #31-34 Task #12
 
 var dateObj = new Date();

 var hundredYearsBack = new Date(dateObj.getTime()-1000*60*60*24*365*100);

         alert(hundredYearsBack)

 document.write("<br/>" +"Current Date: " + dateObj + '<br/>' +
                "100 years back it was: " +    hundredYearsBack + "<br/>");

 // chapter #31-34 Task #13
 
 var myAge = +prompt("Enter your age");

 var current = new Date();

 var currentYear = current.getUTCFullYear();

 var year = currentYear - myAge;

 document.write("<br/>" + "Your age is: "+ myAge + '<br/>' +
                "Your birthday year is: " + year + "<br/> <br />");

 // chapter #31-34 Task #14
 
 var customer = prompt("Customer Name");

 var month = prompt("Enter a month");

 var numOfUnits = prompt("Enter number of units");

 var charge_unit = prompt("Enter charge per unit");

 var net_amount = numOfUnits * charge_unit;

 var latePayment_surcharge = 309.20;

 var gros_amount = net_amount + latePayment_surcharge;

 var fixedAmount = gros_amount.toFixed()

     console.log(fixedAmount);
     
 


 document.write("Customer Name: " + customer + "<br/>");

 document.write("<br/>" + "Month: " + month + "<br/>");

 document.write("<br/>" + "Number of units: " + numOfUnits + "<br/>");

 document.write("<br/>" + "Charges per units: " + charge_unit +'<br/>');

 document.write("<br/>" + "Net Amount Payable(within Due Date): " + net_amount + "<br/>");

 document.write("<br/>" + 'Late payment surcharge: ' + latePayment_surcharge + '<br/>');

 document.write("<br/>" + "Gross Amount Payable(after Due Date): " + fixedAmount);
                
 // chapter #35-38 Task #1

  document.write("<h3> Functions </h3>")

 function pstTime() {
   
   var currentDate = new Date();
   
    document.write(currentDate + "<br />");
}
  
         pstTime();

 // chapter #35-38 Task #2
 
 function myName(firstName, lastName) {

   document.write("<br/>" + " Hello " + firstName +"  " +  lastName);
     
}
      
       myName("Hamza", "Ahmed" + "<br />"); 

 // chapter #35-38 Task #3
 
 function add(x, y) {

  alert(x + y);
  
  }
 
            add(7, 7);

 // chapter #35-38 Task #4
 
 function calT(a, b, op) {

  var result;
  
  if (op == "+") {
  
    result = a + b;
    
     alert(result);
 }
 
  else if (op == "-") {
 
    result = a - b;
    
    alert(result);
 
 }
 
  else if(op == "*") {
 
    result = a * b;
  
     alert(result);
 }
 
  else if(op == "/"){
 
     result = a / b;
     
     alert(result);
 }
 
 
 }
         calT(51, 8, '-');

 // chapter #35-38 Task #5
 
 function squaR(a) {
   
  var squared = Math.pow(a, 3);
  
    document.write("<br/>" + "Squares Its: " + squared + "<br />");
}       
              squaR(5);

  
 // chapter #35-38 Task #6

 function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

 document.write(" factorial number is " +  factorial(5) + "<br/>") 


 // chapter #35-38 Task #7
 
 function  count(add1, add2) {
    
  for (var i = add1; i <= add2; i++) {
          
          document.write(i + "<br/>") 
        }
  }
             count(0, 10);

 // chapter #35-38 Task #8
 
 function calculateHypo(b, p){
 
  var bSquare = Math.pow(b, 2);
  var pSquare = Math.pow(p, 2);

  var prod = bSquare + pSquare;
  var hypo = Math.sqrt(prod);
  
document.write("<br/>" + "This the result of a hypotenuse: " + " " + 
               hypo + "<br /> <br />");

}
        calculateHypo(5, 4)

 // chapter #35-38 Task #9 
 
  var length = parseInt(prompt("Enter a whole number for the length of your rectangle."));
  var width = parseInt(prompt("Enter a whole number for the width of your rectangle."));

    function area(length, width) {
        return length * width;
    }

    document.write('The area of your rectangle is ' + area(length, width) + "<br />");         
   
 


 // chapter #35-38 Task#10
 
 function check(any){

  var b = any.split(" ").reverse().join(' ');
  
  if(b === any){
  
   alert("The word is a palindrome");
  }
  }
        check("madam");

 // chapter #35-38 Task#11

 function checkCase(text){

  text = text.toLowerCase().split(' ');
  
  for(var i = 0; i < text.length; i++){
  
  text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  
  }
   document.write("<br/>" + text.join(' ') + "<br/>");
  }
  
      checkCase("the quick brown fox" + "<br />");

 // chapter #35-38 Task#12
 
 function longestWord(str){

  var arr = str.split(' ');
  
  var long = "";
  
  for(var word of arr){
   
   if(word.length > long.length){
    
        long = word;
    
    }
   }
           return long;
  }
   
  document.write(longestWord("Web Development Tutorial") + "<br />");

  // chapter #35-38 Task#13

  function countDown(str, letter){

    count = 0;

   for(var i = 0; i < str.length; i++){

    if(str.charAt(i) === letter){
      
      count++;
   }
  }
         alert(count);
 }                       
      countDown("JSResourceS.com", "S");

 // chapter #35-38 Task#14
 
 function calcCircumference(radius){

  var circumference = 2 * 1.67 * radius
  
  document.write("<br/>" + "The circumference of the circle is " + circumference);
  
}
            calcCircumference(4);

  function calcArea(radi){

     var area = 1.67 * (radi * radi);
    
     document.write("<br/>" + "The area of the circle is " + area + "<br />");
  }
           calcArea(6);           

