/**
 * Addition +
 * 
 * Subtractio -
 * 
 * Division /
 * 
 * Multiplication *
 * 
 * Modulous %
 * 
 * Power **
 * 
 * NAN
 * 
 * 
 */



var userInput =  require ('readline-sync');



var userGivenNumber = userInput.question("given number is ");

let answer = userGivenNumber % 2;

console.log(answer)


if( answer == 0 ){


    console.log(" it is an even number and divisible by 2");

    if(userGivenNumber % 4 == 0){

        console.log("it is divisble by 4");

    }else{
        console.log("Not divisible by 4");
    }


}
else  {



    console.log ("It is an odd numberand divisible by 3");


    if(userGivenNumber % 5 == 0){

        console.log("it is divisible by 5");


    }
}








