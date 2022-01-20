<template>
  <div>
    <main-article :post="posts[0]" />
    <article-grid class="w-10/12 sm:px-5 mx-auto my-5" :posts="otherPosts" />
  </div>
</template>

<script>
import MainArticle from "../components/MainArticle.vue";
import ArticleGrid from "../components/ArticleGrid.vue";

export default {
  props: ['posts'],
  computed: {
    otherPosts() {
      return this.posts.slice(1);
    },
  },
  components: {
    MainArticle,
    ArticleGrid,
  },
  metaInfo: {
    title: "View my blog posts",
  },
};
</script>