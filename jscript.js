    // js nested function exercises only
// 1 - Exercise from javascript.info
    function sayHiBye(firstName, lastName) {

    //helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
    console.log ( "Hello, " + getFullName() );
    console.log ( "Bye, " + getFullName() );
  
    // alert( "Hello, " + getFullName() );
    // alert( "Bye, " + getFullName() );  

    document.getElementById("Ex 1a").innerText= ( "Hello, " + getFullName() );
	document.getElementById("Ex 1b").innerText= ( "Bye, " + getFullName() );
  }

      sayHiBye("Damon", "Runyon");

//2 - Ex 1a, 1b copied by hand with changes
  function sayHiGo(firstN, lastN)  {
    // nested function
    function getFullN()  {
      return firstN + " " + lastN;
    }
    console.log ("Hello, " + getFullN());
    console.log ("Be kind to people " + getFullN());

    // alert("Hello, " + getFullN());
    // alert("Go, " + getFullN());

    document.getElementById("Ex 1x").innerText= ("Hello, " + getFullN());
    document.getElementById("Ex 1y").innerText= ("Be kind to people " + getFullN());
  }

  sayHiGo("Tory", "Party");

//3 - Ex from Linkedin doc Counter with Closure 
    function counterA(){
      let countA = 0;
      function increment(){

        console.log("Before increment: " + countA);

        document.getElementById("Count before").innerText= ("Final count before increments: " + countA);

        countA++;

        console.log("After increment: " + countA);

        document.getElementById("Count after").innerText= ("Final count after increments: " + countA);
            
      }
      
      return increment;
      
    }
      const counterFunctionA = counterA();
      counterFunctionA(); //Output: Before increment: 0 , After increment: 1
      counterFunctionA(); //Output: Before increment: 1 , After increment: 2
      counterFunctionA(); //Output: Before increment: 2 , After increment: 3
      
//Explanetory example Scope 
    function outerScopeExample() {

      let outerVar = "I am from outer scope";

      function innerScopeExampe() {

        let innerVar = "But I am from inner scope";
        
        console.log(outerVar);  //accesses outer variable
        console.log(innerVar);

        document.getElementById("outerScope").innerText= (outerVar);
        document.getElementById("innerScope").innerText= (innerVar);
      }

      innerScopeExampe();
      
    }

    outerScopeExample(); //Output: I am from outer scope
    

//and Encapsulation
    function counterB() {
      let countB = 0;

      function increment() {

        console.log("Before increment: " + countB);
        document.getElementById("CountB before").innerText= ("Final count before increments: " + countB);

        countB++;

        console.log("After increment: " + countB);
        document.getElementById("CountB after").innerText= ("Final count after increments: " + countB);
      }
      return increment;

    }    
      const counterFunctionB = counterB();
      counterFunctionB(); //Output 1
      counterFunctionB(); //Output 2

//Example Closure
    function outerClosure() {
      let outerVar = "I am the outer variable accessed after the function has been called";

      function innerClosure() {
        console.log(outerVar); //Accessing outer variable even after function called
        document.getElementById("outerClosure").innerText= outerVar;

      }
      return innerClosure;

    }
      const closureFunction = outerClosure();
      closureFunction() ; //Output: I am the outer variable accessed after the function has been called

//Example from JS learning outcomes2 file
    function outerF(){
      console.log("I'm the outer function");
      document.getElementById("outerFunction").innerText= "I'm the outer function";

      function innerF(){
        console.log("I'm the inner function");
        document.getElementById("innerFunction").innerText= "I'm the inner function";
      }
      innerF();
    }
      outerF();

    //Example similar (simple) as above
    function parent(){
      console.log("I'm the parent");
      document.getElementById("parent").innerText= "I'm the parent";

      function child(){
        console.log("I'm the child");
        document.getElementById("child").innerText= "I'm the child";
      }
        child();
    }     
        parent(); 

//Example again similar (simple) as above
    function bo(){
      console.log("Say BO");
      document.getElementById("bo").innerText= "Say BO";

      function peep(){
        console.log("Now say PEEP!");
        document.getElementById("peep").innerText= "Now say PEEP";
      }
      peep();
    }
      bo();

//Example do I remember (simple) as above? Hand in glove
    function hand(){
      console.log("Hand... ");
      document.getElementById("hand").innerText= "Hand... ";

      function glove(){
        console.log("...in Glove");
        document.getElementById("glove").innerText= "...in Glove ";
      }
      glove();
    }
      hand();

//Example do I still remember?
    function still(){
      console.log("Do I still... ");
      document.getElementById("still").innerText= "Do I still... ";
      function remember(){
        console.log("...remember?");
        document.getElementById("remeber").innerText= "...remember? ";
      }
      remember();
    }
      still();

//Redo example of Scope defining the visibility and accessibility of variables.
      // function outerScopeEG(){
      //   let outerVar = "I am from outer scope / container function.";

      //   function innerScopeEG(){

      //     console.log(outerVar) ; //Accesses outer variable 
      //   }

      //   innerScopeEG() ;

      // }

      //   outerScopeEG(); //Output :I am from outer scope / container function. 

//Redo example of Encapsulation
      // function counter(){
      //   let count = 0;

      //   function increment(){
      //     console.log(count);
      //     count++
      //   }
      //     return increment;
      // }
      //   const counterFunctionC = counter();

      //   counterFunctionC();    //Output 1
      //   counterFunctionC();    //Output 2
      //   counterFunctionC();    //Output 3
      //   counterFunctionC();    //Output 4
        
//Exercise Closure
    //    function outerClosure(){
    //     let outerVar = "I am from outer closure.";

    //     function innerClosure(){
    //       console.log(outerVar); //Accessing outer variable even after function finishes

    //     }
    //     return innerClosure();
    //    }

        // const closureFunction = outerClosure();
        // closureFunction(); //Output: I am from outer closure
        // outerClosure();
        // console.log("End of function, first time");
        // outerClosure();
        // console.log("End of function, second time");
  
//Exercise 1: Basic Nested Function LinkedIn JSNested Functions 
        // function outer() {
        //     console.log("Outer Function");

        //     function inner() {
        //         console.log("Inner Function");
        //     }
        //     inner();

        // }
        //     outer();
        //Output:
        //Outer Function
        //Inner Function

//Exercise 2: Access Outer Scope Variable LinkedIn JSNested Functions
        // function outerEx2(){
        //     let outerVar = "I am the outer variable logged from the inner variable";

        //     function innerEx2(){
        //         console.log(outerVar);

        //     }
        //     innerEx2(); //calls the inner function 

        // }
        //     outerEx2(); //calls the outer (parent) function and starts the function off

//flexiple.com expression returns undefined (part of closure explanation)
        // const getName = (name) => {

        //     if (name == 'Flexiple') {
        
        //         console.log(name);
        //     }
        // }   
        //     getName('Flexiple');
            //getName('Arthur');  //No result in console
            //getName(name); //No result in console
            //getName();    /No result in console
            //flexiple comment - This function actually returns undefined
            //However with 'getName('Flexiple');' called, console.log shows Flexiple

//Exercise 3: Counter with Closure
        // function counter() {
        //     let count = 0;

        //     function increment(){
        //         count++;

        //         console.log(count);
        //     }
        //         return increment;
        // }

        //     const counterFunction = counter();
        //     counterFunction();  //Output 1
        //     counterFunction();  //Output 2
        //     counterFunction();  //Output 3

//Further explanation and exercise  of closure from M mdn web docs on Linkdin JS odt
        // function addSquares(a, b){

        //     function square(x) {

        //         return x * x;
        //     }

        //     return square(a) + square(b);

        // }

        //     console.log(addSquares(2, 3));
        //     console.log(addSquares(20, 30));
        //     console.log(addSquares(200, 300));


//Even more explanation and exercise of closure from M mdn web docs on Linkdin JS odt
        // function outside(x) {

        //     function inside(y) {

        //         return x + y;
        //     }

        //     return inside;

        // }
        //     const funInside = outside(3); //specifies outside variable x
        //     //so adding and inside variable y:
        //     console.log(funInside(5)); //console displays 8
        //     //or specify both variables with outside function
        //     console.log(outside(3) (5)); //console again displays 8

//Exercise 4: Counter with closure and an inititalizing parameter
        // function count(initialCount) {
        //     let count = initialCount;

        //     console.log(count);         //my code addition

        //     function increment() {
        //         count++;

        //         console.log(count);
        //     }
        //         return increment;
                

        // }
        //     const counterFunc = count(1944);
        //     counterFunc();      //Output 1945
        //     counterFunc();      //Output 1946 

//Exercise 5: Nested function with array callback loop 
        // function processData(array, callback){
         
        //     for (let element of array){
        //         callback(element);
        //     }
        // }

        // function logElement(element) {
        //     console.log(element);

        // }

        //     processData([1, 2, 3], logElement);   //Output 1, 2, 3

//Exercise 6: Nested Functions with Different Scopes
//         function nestedScopes() {
//             let outerVar = "I am from the outer scope.\n";

//             function innerScope(){
//                 let innerVar = "And I am from the inner scope";
//                 console.log(outerVar, innerVar);
//             }

//             innerScope();
//         }

//             nestedScopes(); 
            
// //Exercise 7: Function Factory 
//         function createMultiplier(factor){
//             return function(number){

//                 return number * factor;
//             }
//         }
//         const multiplyByTwo = createMultiplier(2); 
//         console.log(multiplyByTwo(5));              // Output: 10 

//Exercise 8: Recursive Nested Function
        // function calculateFactorial(number) {
        //     function factorial(n){

        //         return n <= 1 ? 1 : n * factorial(n-1);
        //     }

        //         return factorial(number);
        // }

        //         console.log(calculateFactorial(5));    //Output 120

//Exercise 9: Password Generator
        // function passwordGenerator(length) {
        //     function generateRandomChar(){

        //         const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        //         const randomIndex = Math.floor(Math.random() * chars.length);
                
        //         return chars[randomIndex] ;

        //     }
        //         let password = "" ;
        //         for (let i = 0; i < length; i++) {
        //             password += generateRandomChar();

        //         }
        //             return password;

        // }
        //         console.log(passwordGenerator(8)); 
        //         console.log(passwordGenerator(13));
        //         console.log(passwordGenerator(22));

//Exercise 10: Function Composition 
        // function compose(func1, func2) {
        //     return function(value) {
                
        //         return func2(func1(value)) ;

        //     } ;
        // }
            //const addTwo = x => x + 2 ;

            //const multiplyByThree = x => x * 3 ;

            //const composedFunction = compose(multiplyByThree, addTwo) ;

            //console.log(composedFunction(5)) ; 
            
            //Output format: (5 * 3) + 2 = 17

            // const multiplyByThree = x => x * 3 ;

            // const addTwo = x => x + 2 ;

            // const composedFunction = compose(multiplyByThree, addTwo) ;

            // console.log(composedFunction(-5)) ;

       
             



