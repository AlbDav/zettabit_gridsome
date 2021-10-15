<template>
  <g-link :to="path">
    <div class="rounded-xl shadow-md bg-white w-full h-full overflow-hidden base-card">
        <g-image
          :src="image"
          class="h-48 w-full object-cover"
        />
		<div class="p-5">
		  <h2>{{ title }}</h2>
		  <time :datetime="date">{{ date }}</time>
		  <p>{{ description }}</p>
		</div>
    </div>
  </g-link>
</template>

<script>
export default {
	props: ['path', 'title', 'date', 'image', 'description'],
}
</script>

<style scoped>
.base-card:hover h2 {
	text-decoration: underline;
	text-decoration-color: theme('colors.red.700');
	text-decoration-thickness: 9%;
}
</style>