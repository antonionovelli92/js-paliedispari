/*

ESERCIZIO 1
------------------------------------------------------------------------
Palidroma
Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma

*/


const nameInput = document.getElementById('name');
const button = document.getElementById('button');
const result = document.getElementById('result');

// creo una funzione
function reverseName(word) {
    let final = '';

    for (let i = word.length - 1; i >= 0; i--) {
        final += word[i];
    }
    return final;
}


button.addEventListener('click', function () {
    const nameUser = nameInput.value.trim();

    // Validazione:

    if (!nameUser) {
        result.classList.add('text-danger');
        result.innerText = 'Non hai inserito nessun nome';
        return;
    }
    // creo una costante con la funzione di reverse:
    const reverse = reverseName(nameUser);

    // verifico se il nome in questione è palindromo

    if (nameUser === reverse) {
        result.innerText = 'Il tuo nome è palindromo';
    } else {
        result.innerText = 'Mi spiace, ma il tuo nome non è palindromo, stacce.';
    }

})

/*

ESERCIZIO 2
------------------------------------------------------------------------

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon divertimento!
*/

const number = document.getElementById('number')
const pari = document.getElementById('par')
const dispari = document.getElementById('dis')
//  aggiunto l'1 davanti a button e result per non confonderli con il primo esercizio
const button1 = document.getElementById('button1')
const result1 = document.getElementById('result1')




