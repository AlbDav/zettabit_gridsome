<template>
  <Layout>
	<article>
		<div class="w-10/12 sm:w-9/12 mx-auto pb-3">
			<h1>{{ post.title }}</h1>
        	<time :datetime="post.date">{{ post.date }}</time>
		</div>
    	<g-image :src="post.image" class="object-cover w-full h-96"
		/>
		<div class="w-10/12 sm:w-9/12 mx-auto py-3">
			<div class="italic">{{ post.summary }}</div>
			<div class="py-2" v-html="post.content" />
		</div>
	</article>

     <article-grid class="w-10/12 sm:w-9/12 mx-auto my-3" :posts="relatedPosts"
	 />
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
      id
      title
      date (format: "D MMMM YYYY", locale: "it")
      subtitle
      content
	  image
	  related {
		  id
		  title
		  date (format: "D MMMM YYYY", locale: "it")
		  subtitle
		  path
		  image
	  }
  }
}
</page-query>

<script>
  import ArticleGrid from "../components/ArticleGrid.vue";
  export default {
    computed: {
		post() {
			return this.$page.post;
		},
		relatedPosts() {
			return this.post.related.filter(el => el.id !== this.post.id)
		},
	},
	components: {
		ArticleGrid
	},
    metaInfo() {
      return {
        title: this.$page.post.title
      }
    }
}
</script>