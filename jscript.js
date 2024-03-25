// js nested function exercises only
// Exercise from javascript.info
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
    console.log ( "Hello, " + getFullName() );
    console.log ( "Bye, " + getFullName() );
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );  

    document.getElementById("Ex 1a").innerText= ( "Hello, " + getFullName() );
		document.getElementById("Ex 1b").innerText= ( "Bye, " + getFullName() );
  }

  sayHiBye("Damon", "Runyon");

  //Ex 1a, 1b copied by hand with changes
  function sayHiGo(firstN, lastN)  {
    // nested function
    function getFullN()  {
      return firstN + " " + lastN;
    }
    console.log ("Hello, " + getFullN());
    console.log ("Go, " + getFullN());

    alert("Hello, " + getFullN());
    alert("Go, " + getFullN());

    document.getElementById("Ex 1x").innerText= ("Hello, " + getFullN());
    document.getElementById("Ex 1y").innerText= ("Go, " + getFullN());
  }

  sayHiGo("Tory", "Party");