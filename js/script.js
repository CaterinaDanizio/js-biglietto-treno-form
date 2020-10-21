
// Assegnazione valore input

var nome = document.getElementById('nome');

console.log(nome.value);

var km = document.getElementById('chilometri');

console.log(chilometri.value);

var fascia = document.getElementById('fascia');

console.log(fascia.value);


// Output prodotto dal bottone Genera

var bottone = document.getElementById('mybutton');

bottone.addEventListener('click',
 function() {
   console.log(nome.value);
   console.log(chilometri.value);
   console.log(fascia.value);
} );
