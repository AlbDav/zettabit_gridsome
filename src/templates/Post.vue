<template>
  <Layout>
	<article>
		<div class="w-10/12 sm:w-9/12 mx-auto pb-3">
			<h1>{{ $page.post.title }}</h1>
        	<time :datetime="$page.post.date">{{ $page.post.date }}</time>
		</div>
    	<g-image :src="$page.post.image" class="object-cover w-full h-96"
		/>
		<div class="w-10/12 sm:w-9/12 mx-auto py-3">
			<div class="italic">{{ $page.post.summary }}</div>
			<div class="py-2" v-html="$page.post.content" />
		</div>
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