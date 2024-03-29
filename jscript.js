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
          
      }
      
      return increment;
      
    }
      const counterFunctionA = counter();
      counterFunctionA(); //Output: 1
      counterFunctionA(); //Output: 2
      counterFunctionA(); //Output: 3

//Explanetory example Scope 
    // function outerScopeExample() {

    //   let outerVar = "I am from outer scope";

    //   function innerScopeExampe() {

    //     let innerVar = "But I am from inner scope";
    //     console.log(innerVar);

    //     console.log(outerVar);  //accesses outer variable

    //   }

    //   innerScopeExampe();
      
    // }

    // outerScopeExample(); //Output: I am from outer scope
    //document.getElementById("LEe").innerText= (???????);

//and Encapsulation
    function counter() {
      let count = 0;

      function increment() {
        count++;
        console.log(count);

      }
      return increment;

    }    
      const counterFunctionb = counter();
      counterFunctionb(); //Output 1
      counterFunctionb(); //Output 2

//Example Closure
    // function outerClosure() {
    //   let outerVar = "I am from outer closure";

    //   function innerClosure() {
    //     console.log(outerVar); //Accessing outer variable even after function called

    //   }
    //   return innerClosure;

    // }
    //   const closureFunction = outerClosure();
    //   closureFunction() ; //Output: I am from outer closure

    //Example from JS learning outcomes2 file
    // function outerF(){
    //   console.log("I'm the outer function");

    //   function innerF(){
    //     console.log("I'm the inner function");
    //   }
    //   innerF();
    // }
    //   outerF();

    // //Example similar (simple) as above
    // function parent(){
    //   console.log("I'm the parent");

    //   function child(){
    //     console.log("I'm the child");
    //   }
    //     child();
    // }     
    //     parent(); 

    // //Example again similar (simple) as above
    // function bo(){
    //   console.log("Say BO");

    //   function peep(){
    //     console.log("Now say PEEP!");
    //   }
    //   peep();
    // }
    //   bo();

    // //Example do I remember (simple) as above? Hand in glove
    // function hand(){
    //   console.log("Hand ");

    //   function glove(){
    //     console.log("in Glove");

    //   }
    //   glove();
    // }
    //   hand();

    // //Example do I still remember?
    // function still(){
    //   console.log("Do I still ");

    //   function remember(){
    //     console.log("remember?");
    //   }
    //   remember();
    // }
    //   still();

      //Redo example of Scope defining the visibility and accessibility of variables.
      function outerScopeEG(){
        let outerVar = "I am from outer scope / container function.";

        function innerScopeEG(){

          console.log(outerVar) ; //Accesses outer variable 
        }

        innerScopeEG() ;

      }

        outerScopeEG(); //Output :I am from outer scope / container function. 

      //Redo example of Encapsulation
      function counter(){
        let count = 0;

        function increment(){
          console.log(count);
          count++
        }
          return increment;
      }
        const counterFunctionC = counter();

        counterFunctionC();    //Output 1
        counterFunctionC();    //Output 2
        counterFunctionC();    //Output 3
        counterFunctionC();    //Output 4



  




