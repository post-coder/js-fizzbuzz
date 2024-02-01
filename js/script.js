/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/


// ripetere un determinato set di istruzioni per un determinato numero di volte
for (let i = 1; i <= 100; i++) {


    let output = "";

    if(i % 3 == 0) {
        output = "Fizz";
    }

    
    if (i % 5 == 0) {    
        output += "Buzz";
    } 
    

    if(output == "") {
        output = i;
    }

    console.log(output);

}
