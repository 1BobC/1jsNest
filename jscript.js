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