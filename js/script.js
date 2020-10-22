// Nascondere dettagli biglietto prima che venga premuto il bottone
document.getElementById("biglietto").style.display = "none";

// Assegnazione valore input

  // Nome

  var nome = document.getElementById('nome');

  console.log('prima del click', nome.value);


// Bottoni

  var genera = document.getElementById('genera');
  var reset = document.getElementById('reset');

// Funzionalità Genera

genera.addEventListener('click',
 function() {
   console.log('dopo il click', nome.value);
   var km = document.getElementById('km');

   var eta = document.getElementById('eta').value;

   // Prezzo BIGLIETTO
   document.getElementById("biglietto").style.display = "block";

   var prezzoTreno = (km.value * 0.21).toFixed(2);
   console.log(prezzoTreno);

   var offerta;
   var carrozza;
   var codice;

   // Prezzi scontati e offerte
   if ( eta == "minorenne" ) {
     prezzoTreno = (prezzoTreno - (prezzoTreno * 0.20)).toFixed(2);
     offerta = "Offerta Young";
   }

   else if ( eta == "over65" ) {
     prezzoTreno = (prezzoTreno - (prezzoTreno * 0.40)).toFixed(2);
     offerta = "Offerta Silver";
   }

   else { prezzoTreno
     offerta = "Tariffa Standard";

   }

   var carrozza = Math.floor(Math.random() * 6) + 1;
   console.log("Carrozza ", carrozza);

    var codice = Math.floor(Math.random() * 100.000) + 90.000;
    console.log("Codice ", codice);

   // Output finali da stampare in pagina
   document.getElementById('passeggero').innerHTML = nome.value;
   document.getElementById('offer').innerHTML = offerta;
   document.getElementById('carrozza').innerHTML = carrozza;
   document.getElementById('codice').innerHTML = codice;
   document.getElementById('price').innerHTML = prezzoTreno;
  });

  // Annullare il biglietto
  reset.addEventListener('click',
      function() {
      document.getElementById('nome').value = '';
      document.getElementById('km').value = '';
      document.getElementById('eta').value = ('');
      document.getElementById('passeggero').innerHTML = '';
      document.getElementById('offer').innerHTML = '';
      document.getElementById('carrozza').innerHTML = '';
      document.getElementById('codice').innerHTML = '';
      document.getElementById('price').innerHTML = '';
      document.getElementById("biglietto").style.display = "none";

      }
    );
