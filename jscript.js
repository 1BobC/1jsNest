// js nested function exercises only
// Exercise from javascript.info
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );  
  }

  sayHiBye("Damon", "Runyon");