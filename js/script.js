// Assegnazione valore input

  // Nome

  var nome = document.getElementById('nome');

  console.log(nome.value);


// Bottoni

  var genera = document.getElementById('genera');
  var reset = document.getElementById('reset');

// Funzionalità Genera

genera.addEventListener('click',
 function() {
   var km = document.getElementById('km');

   var eta = document.getElementById('eta');

   // Prezzo BIGLIETTO

   var prezzoTreno = (km.value * 0.21).toFixed(2);
   console.log(prezzoTreno);

   var offerta;

   // Prezzi scontati e offerte

   if ( eta == "minorenne" ) {
           prezzoTreno = (prezzoTreno - (prezzoTreno * 0.20)).toFixed(2);
           var offerta = "Offerta Young";
         }

         else if ( eta == "over65" ) {
           prezzoTreno = (prezzoTreno - (prezzoTreno * 0.20)).toFixed(2);
           var offerta = "Offerta Silver";
         }
  } );


// Output finali da stampare in pagina

document.getElementById('passeggero').innerHTML = nome.value;
document.getElementById('offer').innerHTML = offerta;
document.getElementById('price').innerHTML = prezzoTreno;
