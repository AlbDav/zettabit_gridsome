<template>
  <g-link :to="path">
    <div
      class="
        rounded-xl
        shadow-md
        bg-white
        w-full
        h-full
        overflow-hidden
        base-card
      "
    >
      <g-image :src="image" :alt="alt" class="h-48 w-full object-cover" />
      <div class="p-4">
        <h3>{{ title }}</h3>
        <time class="text-sm" :datetime="date">{{ date }}</time>
        <p class="pt-2">{{ subtitle }}</p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["path", "title", "date", "image", "alt", "subtitle"],
};
</script>

<style scoped>
.base-card:hover h3 {
  text-decoration: underline;
  text-decoration-color: theme("colors.red.700");
  text-decoration-thickness: 9%;
}
</style>