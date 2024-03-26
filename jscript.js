// js nested function exercises only
// 1 - Exercise from javascript.info
// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
//     console.log ( "Hello, " + getFullName() );
//     console.log ( "Bye, " + getFullName() );
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );  

//     document.getElementById("Ex 1a").innerText= ( "Hello, " + getFullName() );
// 		document.getElementById("Ex 1b").innerText= ( "Bye, " + getFullName() );
//   }

//   sayHiBye("Damon", "Runyon");

//   //2 - Ex 1a, 1b copied by hand with changes
//   function sayHiGo(firstN, lastN)  {
//     // nested function
//     function getFullN()  {
//       return firstN + " " + lastN;
//     }
//     console.log ("Hello, " + getFullN());
//     console.log ("Go, " + getFullN());

//     alert("Hello, " + getFullN());
//     alert("Go, " + getFullN());

//     document.getElementById("Ex 1x").innerText= ("Hello, " + getFullN());
//     document.getElementById("Ex 1y").innerText= ("Go, " + getFullN());
//   }

//   sayHiGo("Tory", "Party");

//  //3 - Ex from Linkedin doc Counter with Closure 
    function counter(){
      let count = 0;
      function increment(){
        count++;
        console.log(count);
        alert(count);
          
      }
      
      return increment;
      
    }

      const counterFunction = counter();
      counterFunction(); //Output: 1
      counterFunction(); //Output: 2
      counterFunction(); //Output: 3
      



