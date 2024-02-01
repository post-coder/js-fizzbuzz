/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/

/*
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) 
un elemento html con il numero o la stringa corretta da mostrare.


*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
a seconda che il valore inserito sia un numero, un fizz, 
un buzz o un fizzbuzz.

*/


// mi conservo in una variabile l'elemento html della griglia
const gridElement = document.querySelector("#grid");



// ripetere un determinato set di istruzioni per un determinato numero di volte
for (let i = 1; i <= 100; i++) {

    // inizializzo una variabile stringa vuota
    let output = "";

    // creo un nuovo elemento html
    const newElement = document.createElement("div");



    // se multiplo di 3, ci scrivo dentro Fizz
    if(i % 3 == 0) {

        output = "Fizz";

        // modifico la classe
        newElement.className = "fizz ";

    }
    
    // se multiplo di 5, AGGIUNGO alla stringa la parola "Buzz"
    // se la stringa era vuota, ci sarà scritto solo "Buzz", se non lo era
    // la parola "Buzz" sarà aggiunta alla fine (FizzBuzz)
    if (i % 5 == 0) {   

        output += "Buzz";

        // modifico la classe
        newElement.className += "buzz ";
    } 
    
    // se l'output è vuoto (quindi non era nè multiplo di 3 nè di 5)
    // allora ci scrivo dentro la variabile i, ovvero il numero attuale
    if(output == "") {

        output = i;

    }

    // qualsiasi sia il suo contenuto, lo stampo in console
    console.log(output);

    
    

    // ci scrivo all'interno la stringa che abbiamo appena generato
    newElement.innerText = output;

    // aggiungiamo la classe "square" all'elemento
    newElement.className += "square";



    // modifico la classe, lo stile lo decido dal css


    // "appendo" l'elemento html alla griglia
    gridElement.append(newElement);

}
