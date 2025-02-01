<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">🏅 Medagliere Giochi</h1>

    <!-- Contenitore della classifica -->
    <div class="grid grid-cols-5 border rounded-lg shadow-md overflow-hidden">
      
      <!-- Intestazione -->
      <div class="col-span-2 p-3 font-semibold text-2xl bg-gray-200 flex items-center">Gioco</div>
      <div class="p-3 font-semibold text-2xl text-center bg-gray-200 flex items-center justify-center">🥇</div>
      <div class="p-3 font-semibold text-2xl text-center bg-gray-200 flex items-center justify-center">🥈</div>
      <div class="p-3 font-semibold text-2xl text-center bg-gray-200 flex items-center justify-center">🥉</div>

      <!-- Lista dei giochi con il podio -->
      <div v-for="gioco in giochi" :key="gioco.nome" class="contents">
        <div class="col-span-2 p-3 font-medium text-lg border-t flex flex-col justify-center">
          {{ gioco.nome }}
        </div>
        
        <div class="p-3 flex flex-col items-center justify-center border-t text-center">
          <img v-if="gioco.primo.img" :src="gioco.primo.img" alt="Primo" class="w-12 h-12 rounded-full">
          <span class="mt-2">{{ gioco.primo.nome }}</span>
        </div>

        <div class="p-3 flex flex-col items-center justify-center border-t text-center">
          <img v-if="gioco.secondo.img" :src="gioco.secondo.img" alt="Secondo" class="w-12 h-12 rounded-full">
          <span class="mt-2">{{ gioco.secondo.nome }}</span>
        </div>

        <div class="p-3 flex flex-col items-center justify-center border-t text-center">
          <img v-if="gioco.terzo.img" :src="gioco.terzo.img" alt="Terzo" class="w-12 h-12 rounded-full">
          <span class="mt-2">{{ gioco.terzo.nome }}</span>
        </div>
      </div>

    </div>
  </div>
</template>
  
  <script>
  import axios from "axios";
  
  export default {
	data() {
	  return {
		giochi: []
	  };
	},
	methods: {
	  async caricaDati() {
		try {
		  const response = await axios.get(
			"https://docs.google.com/spreadsheets/d/e/2PACX-1vTUxK916rIyFgupFClQyWklojWwgj-MC7_mEagknA9MjDXBBC_P7IbjL6F5tTuCq8mvUf5xYDIdTOzI/pub?gid=734453506&single=true&output=csv"
		  );
		  const csvText = response.data;
		  const rows = csvText.split("\n").map((row) => row.split(","));
  
		  let squadre = {};
		  let giochi = [];
  
		  let i = 1; // Inizia a leggere i giochi dalla riga 1
		  while (i < rows.length && rows[i][0].trim() !== "") {
			if (rows[i].length >= 4) {
			  let nome = rows[i][0].trim();
			  let primoId = rows[i][1].trim();
			  let secondoId = rows[i][2].trim();
			  let terzoId = rows[i][3].trim();
			  giochi.push({ nome, primoId, secondoId, terzoId });
			}
			i++;
		  }
  
		  let j = 20; // Passa alla sezione delle squadre
		  while (j < rows.length && rows[j][0].trim() !== "") {
			if (rows[j].length >= 3) {
			  let id = rows[j][0].trim();
			  let nome = rows[j][1].trim();
			  let img = rows[j][2] ? rows[j][2].trim() : "";
			  squadre[id] = { nome, img };
			}
			j++;
		  }
  
		  console.log(giochi);
		  console.log(squadre);
		  console.log(rows);
		  // Associa i podi alle squadre
		  this.giochi = giochi.map(gioco => ({
			nome: gioco.nome,
			primo: squadre[gioco.primoId] || { nome: "Sconosciuto", img: "" },
			secondo: squadre[gioco.secondoId] || { nome: "Sconosciuto", img: "" },
			terzo: squadre[gioco.terzoId] || { nome: "Sconosciuto", img: "" }
		  }));
  
		} catch (error) {
		  console.error("Errore nel caricamento dei dati:", error);
		}
	  }
	},
	mounted() {
	  this.caricaDati();
	  setInterval(this.caricaDati, 120000); // Aggiorna ogni minuto
	}
  };
  </script>
  
  <style>
  /* Tailwind gestisce il design, quindi lo lasciamo pulito */
  </style>
  