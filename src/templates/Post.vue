<template>
  <Layout>
    <article class="grid grid-cols-1 gap-3 rounded-xl mx-4 mt-1">
      <div class="min-h-0 min-w-0 mx-1">
        <h2 class="text-red-light">{{ $page.post.title }}</h2>
        <time :datetime="$page.post.date">{{ $page.post.date }}</time>
      </div>
      <div
        class="mr-1 rounded-xl overflow-hidden shadow-md min-h-0 min-w-0 h-48 sm:h-96"
      >
        <g-image :src="$page.post.image" class="object-cover h-full w-full" />
      </div>

      <div class="mb-8 mx-1" id="article-area" v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
      id
      title
      date (format: "D MMMM YYYY", locale: "it")
      summary
      path
      content
	  image
  }
}
</page-query>

<script>
  export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>