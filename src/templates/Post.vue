<template>
  <Layout>
    <article>
      <div class="w-10/12 sm:w-7/12 mx-auto pb-3">
        <h1>{{ post.title }}</h1>
        <time :datetime="post.date" class="text-sm">{{ post.date }}</time>
        <p class="italic mt-1 text-lg">{{ post.subtitle }}</p>
      </div>
      <g-image :src="post.image" class="object-cover w-full h-96" />
      <div class="w-10/12 sm:w-7/12 mx-auto">
        <div ref="articleContent" class="article-content text-lg" v-html="post.content" />
      </div>
    </article>

    <article-grid
      class="w-10/12 sm:w-9/12 mx-auto my-3"
      :posts="relatedPosts"
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
      return this.post.related.filter((el) => el.id !== this.post.id);
    },
  },
  mounted() {
    let images = this.$refs.articleContent.querySelectorAll('img');
    images.forEach(img => {
      if (img.width < img.height) {
        img.classList.add('portrait');
      }
    });
  },
  components: {
    ArticleGrid,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style scoped>
.article-content >>> img, .article-content >>> .youtube-embed {
  @apply mx-auto;
  @apply mt-3;
  @apply rounded-md;
  @apply shadow;
  @apply w-full;
}
.article-content >>> img.portrait {
  @apply sm:w-1/2;
}
.article-content >>> img ~ em {
  @apply text-sm;
  @apply block;
  @apply pl-1;
  @apply mt-1;
  @apply ml-1;
  @apply border-l-2;
  @apply border-gray-600;
}
.article-content >>> p {
  @apply mt-3;
}
.article-content >>> .twitter-tweet {
	@apply mx-auto;
}
.article-content >>> .youtube-embed {
  overflow: hidden;
}
</style>