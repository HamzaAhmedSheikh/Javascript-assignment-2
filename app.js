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

 var language = prompt('What is your favourite programming language')
 var select = language.charAt(0).toUpperCase()
 var slices = language.slice(1, 10) 
 
//  console.log(select + slices);
 
 document.write("<br/>" + "<br/>" + "<b> User input: </b>" + language);
 document.write("<br/>" + "<b> Title Case: </b>" + select + slices);

// chapter 21-25 Task #12

 var num = 35.36;

 var numTOStrinG = num.toString();

 var num1 = numTOStrinG.slice(0, 2);

 var num2 = numTOStrinG.slice(3, 5);

 var num3 = num1 + num2;
 
 document.write("<br/>" + "<br/>" + "<b> Number: </b>" + num)  
 document.write("<br/>" + "<b> Result: </b>" + num3 + "<br />");

// chapter 21-25 Task #13

 var userName = prompt("Enter username");

 for(var i = 0; i < userName.length; i++){

  if (userName.charCodeAt(i) === 38 || userName.charCodeAt(i) === 35 ||
      userName.charCodeAt(i) === 64 || userName.charCodeAt(i) === 36) {     
   
          //  ASCII CODE 35(#) 38(%) 64(@) 36($) ASCII CODE
   
            alert("Enter a valid  username.");
      }
 }

 // chapter 21-25 Task #14

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


 // chapter 21-25 Task #15

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

 

 //chapter 21-25 Task #16

 var str = "University of Karachi";    
 
           document.write("<br/>")
     
      for(var a = 0; a < 1; a++) {                 
        document.write(str.toString().split(''));                 
      }

  //chapter 21-25 Task #17

  var userInput = "Pakistan";

  var lastChar = userInput.charAt(7)

    //  console.log(lastChar);

  document.write("<br /> <br />" + "<b>User input: </b>" + userInput + "<br />")  
  document.write("<b>Last character of input: </b>" + lastChar + "<br />")  

 // chapter 21-25 Task #18

 var sentence = "The quick brown fox jumps over the lazy dog.";
 var lowerCase =  sentence.toLowerCase()
  var searchGlobal = lowerCase.match(/the/g).length  
   
   console.log(searchGlobal);   
  
  document.write("<br /> " + "<b> Text: </b>" + sentence)
  document.write("<br />" + "<b> There are </b> " + searchGlobal + ' occurrence(s) of word the')
                     