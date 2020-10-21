// Assegnazione valore input

var nome = document.getElementById('nome');

console.log(nome.value);

var chilometri = document.getElementById('chilometri');

console.log(chilometri.value);

var fascia = document.getElementById('fascia');

console.log(fascia.value);


// Output prodotto dal bottone Genera

var bottone = document.getElementById('mybutton');

bottone.addEventListener('click',
 function() {
   document.getElementById('passeggero').innerHTML = nome.value;
   console.log(chilometri.value);
   console.log(fascia.value);
} );

// Prezzo biglietto intero
var prezzoTreno = (chilometri.value * 0.21).toFixed(2);

bottone.addEventListener('click',
 function() {
   console.log("Costo del treno è", prezzoTreno + " euro");
} );
