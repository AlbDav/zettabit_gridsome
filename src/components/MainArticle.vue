<template>
  <article>
    <div class="main-article-grid">
      <div
        ref="mainTitle"
        class="
          w-11/12
          sm:w-9/12
          mx-auto
		  px-2
          flex
          items-center
          main-article-title 
          z-10
        "
      >
        <g-link :to="post.path" class="w-full sm:w-2/3">
          <div class="bg-white w-full p-5 my-9 rounded-xl shadow-md hover:shadow-2xl transition-shadow main-card">
            <h2>{{ post.title }}</h2>
            <time class="text-sm" :datetime="post.date">{{ post.date }}</time>
            <p>{{ post.subtitle }}</p>
          </div>
        </g-link>
      </div>
      <div class="w-full h-full main-article-image">
        <g-image
          :src="post.image"
		      :alt="post.alt"
          class="object-cover h-full w-full"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.main-article-grid {
	display: grid;
  grid-template-columns: auto;
  grid-auto-rows: minmax(5rem, 12rem);
}
.main-article-title {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.main-article-image {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
</style>