// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// variabili

let parola;
let parolaSplit;
let parolaInvertita;

// chiedo all'utente di inserire una parola
parola = prompt('Inserisci una parola');

// inversione della parola inserita per verificare se la stessa è 
// una parola Plidroma

parolaSplit = parola.split('');
parolaContrario = parolaSplit.reverse();
parolaInvertita = parolaContrario.join('');
console.log(parolaSplit);

// controllo parola invertita con parola inserita dall'utente

if (parolaInvertita == parola ){
    document.getElementById("word").innerHTML = "La parola" + ' ' + parola + ' ' + "è una parola Palindroma"
} else {
    document.getElementById("word").innerHTML = "La parola" + ' ' + parola + ' ' + "non è una parola Palindroma"
}
