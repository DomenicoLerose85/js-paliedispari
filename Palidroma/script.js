// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma

// // chiedi all'utente di inserire una parola

let parolaReverse;



let parola = prompt("inserire una parola");


function InvertiParola(parola){
       var parolaReverse = "";
       for( i = parola.lenght - 1; i >= 0; i-- ) {
       parolaReverse += parola[i];
    }
      return parolaReverse;
    }

      if (parola == InvertiParola(parola)) {
        console.log("è palindroma");
    } else if (parola != InvertiParola(parola)) {
     console.log("non è palindroma");  
 } 