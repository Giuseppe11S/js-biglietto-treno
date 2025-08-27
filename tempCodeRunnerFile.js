/* Ciao ragazzi,
esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

Buon lavoro!
.. e buon viaggio 🛤️ */

let inputUserKm = prompt("Quanti km vuoi percorrere?");
let inputUserAge = prompt("Quanti anni hai?");

const basePrice = 0.21;
const discountUnder = 20;
const discountOver = 40;

const totalPrice = inputUserKm * basePrice;

// console.log(totalPrice.toFixed(2)); // Converte i numeri in decimale

if(inputUserAge < 18 ){
  price = inputUserKm * discountUnder / 100;
  console.log("Idoneo allo sconto per minorenni, pagherai:", price.toFixed(2));
};

else if (inputUserAge > 18 && inputUserAge < 65){
  price = inputUserKm * basePrice;
  console.log("Nessun sconto applicabile, pagherai: ", price.toFixed(2) );
};
 
else if (inputUserAge > 65){
  price = inputUserKm * discountOver / 100;
  console.log("Idoneo allo sconto per over 65, pagherai:", price.toFixed(2));
};




