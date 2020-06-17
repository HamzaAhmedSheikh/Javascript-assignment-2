 // chapter 21-25 Task #1

 var first = prompt("What is your first name?");
 var last = prompt("What is your last name?");
 var fullName = first + " " + last;
  
 document.write("<b> Hello </b>" +  fullName + "<br/>");

 // chapter 21-25 Task #2

 var moblieSpec = "<b> My favorite phone is: </b>";
 var mobleSpe = " Samsung Galaxy S6 Edge Plus"; 
 
 var moblieLen = moblieSpec.length;
 var moblie = mobleSpe.length;
     
 document.write("<br/>" + moblieSpec + mobleSpe);     
 document.write("<br/>" + "<b> Length of string: </b>" + moblie);


// chapter 21-25 Task #3

 var countryName = "Pakistan";
 var find = countryName.indexOf("n");  

 document.write("<br/>" + "<br/>" + "<b> String: </b>" + countryName);
 document.write("<br/>" + "<b> index of 'n' : </b>" +  find);

// chapter 21-25 Task #4

 var greet = "Hello World";
 var findOne = greet.lastIndexOf("l");
 
 document.write("<br/>" + "<br/>" + "<b> String: </b>" + greet);
 document.write("<br/>" + "<b> Last Index of 'l' : </b>" +  findOne);

// chapter 21-25 Task #5

 var countryNameOne = "Pakistani";
 var findOne = countryNameOne.charAt(3);
 
 document.write("<br/>" + "<br/>" + "<b> String: </b>" +  countryNameOne);
 document.write("<br/>" + "<b> Character at index 3: </b>" + findOne);

// chapter 21-25 Task #6

 var firstOne = prompt("What is your first name again? ");
 var lastTwo = prompt("What is your last name again? ");
 var fullNameZero = firstOne.concat(lastTwo);
  
  document.write("<br/>" + "<br/>" + "<b> After concat method(): </b>" + "  " + fullNameZero);

// chapter 21-25 Task #7

 var cityName = "Hyderabad";
 var aCityName = "Hyderabad";

 aCityName = aCityName.replace("Hyderabad", "Islamabad");

 document.write("<br/>" + "<br/>" + "<b> City: </b>"+ cityName);
 document.write("<br/>" + "<b> After replacement: </b>" + aCityName); 

// chapter 21-25 Task #8

 var message = "Ali and Sami are best friends.They play cricket and football together." 
 var replaceAMessage =  "Ali and Sami are best friends.They play cricket and football together."
  
replaceAMessage = replaceAMessage.replace("Ali and Sami are best friends.They play cricket and football together.","Ali & Sami are best friends.They play cricket & football together.");
 
 document.write("<br/>" + "<br/>" + "<b> Message: </b> " + message);
 document.write("<br/>" + "<b> After replacement: </b>" + replaceAMessage);

// chapter 21-25 Task #9

 var num = 472;
 var strinGinNum = num.toString();
 var stri = typeof(strinGinNum);
 
 document.write("<br/>" + "<br/>" + "<b> Value: </b>" + strinGinNum);
 document.write("<br/>" + "<b> Type: </b>" + stri);

// chapter 21-25 Task #10

 var dry = "peanuts";
 var dryOne = dry.toUpperCase();
 
 document.write("<br/>" + "<br/>" + "<b> User input: </b>" + dry);
 document.write("<br/>" + "<b> Upper case: </b>" + dryOne); 

// chapter 21-25 Task #11

//  var language = prompt("Please enter your favourite language");
//  var networkZero = language.toLowerCase();
 
//  document.write("<br/>" + "<br/>" + "User input: " + networK);
//  document.write("<br/>" + "Lower Case: " + networkZero);

// chapter 21-25 Task #12

 var num = 35.36;

 var numTOStrinG = num.toString();

 var num1 = numTOStrinG.slice(0, 2);

 var num2 = numTOStrinG.slice(3, 5);

 var num3 = num1 + num2;
 
 document.write("<br/>" + "<br/>" + "<b> Number: </b>" + num)  
 document.write("<br/>" + "<b> Result: </b>" + num3);

// chapter 21-25 Task #13

 var userName = prompt("Enter username");

 for(var i = 0; i < userName.length; i++){

  if (userName.charCodeAt(i) === 38 || userName.charCodeAt(i) === 35 ||
      userName.charCodeAt(i) === 64 || userName.charCodeAt(i) === 36) {     
   
          //  ASCII CODE 35(#) 38(%) 64(@) 36($) ASCII CODE
   
            alert("Enter a valid  username.");
      }
 }
