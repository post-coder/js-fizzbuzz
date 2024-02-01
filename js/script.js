/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/

/*
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) 
un elemento html con il numero o la stringa corretta da mostrare.
*/


// ripetere un determinato set di istruzioni per un determinato numero di volte
for (let i = 1; i <= 100; i++) {

    // inizializzo una variabile stringa vuota
    let output = "";

    // se multiplo di 3, ci scrivo dentro Fizz
    if(i % 3 == 0) {
        output = "Fizz";
    }
    
    // se multiplo di 5, AGGIUNGO alla stringa la parola "Buzz"
    // se la stringa era vuota, ci sarà scritto solo "Buzz", se non lo era
    // la parola "Buzz" sarà aggiunta alla fine (FizzBuzz)
    if (i % 5 == 0) {    
        output += "Buzz";
    } 
    
    // se l'output è vuoto (quindi non era nè multiplo di 3 nè di 5)
    // allora ci scrivo dentro la variabile i, ovvero il numero attuale
    if(output == "") {
        output = i;
    }

    // qualsiasi sia il suo contenuto, lo stampo in console
    console.log(output);

    

}
