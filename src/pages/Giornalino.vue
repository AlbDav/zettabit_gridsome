<template>
  <div>
    <div class="flex justify-center items-center h-screen">
      <div class="logo-blink">
        <img src="/giornalino_logo.png" alt="Loading Logo" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    axios.get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUxK916rIyFgupFClQyWklojWwgj-MC7_mEagknA9MjDXBBC_P7IbjL6F5tTuCq8mvUf5xYDIdTOzI/pub?gid=0&single=true&output=csv"
    )
      .then((response) => {
		const csvText = response.data;
        const rows = csvText.split("\n").map((row) => row.split(","));
        let url = rows[0][0];
		console.log(rows);
		window.location.href = url;
      })
      .catch((error) =>
        console.error("Errore nel caricamento dei dati:", error)
      );
  },
};
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.logo-blink img {
  animation: blink 3s linear infinite;
}
</style>