<template>
  <Layout>
    <ClientOnly>
      <carousel :topPosts="topPosts" :carouselNum="carouselNum" />

      <article-preview v-for="post in otherPosts" :key="post.id" :post="post" />
    </ClientOnly>
  </Layout>
</template>

<page-query>
query Category ($path: String!, $page: Int) {
  category: category (path: $path) {
    title
    belongsTo (page: $page, perPage: 30) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
              id
              title
              date (format: "D MMMM YYYY", locale: "it")
              summary
              path
              content
		      image
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Carousel from "../components/Carousel.vue";
import ArticlePreview from "../components/ArticlePreview.vue";

export default {
  computed: {
    posts() {
      if (this.$page.category.belongsTo.edges) {
        return this.$page.category.belongsTo.edges;
      } else {
        return [];
      }
    },
    multiplePosts() {
      let posts = [];
      for (let i = 0; i < 4; i++) {
        posts.push(this.posts);
      }
      return posts.flat();
    },
    carouselNum() {
      return this.$screen.sm ? 5 : 3;
    },
    topPosts() {
      let sliceNum =
        this.multiplePosts.length > this.carouselNum ? this.carouselNum : 1;
      return this.multiplePosts.slice(0, sliceNum);
    },
    otherPosts() {
      let sliceNum =
        this.multiplePosts.length > this.carouselNum ? this.carouselNum : 1;
      return this.multiplePosts.slice(sliceNum);
    },
  },
  components: {
    Carousel,
    ArticlePreview,
  },
  metaInfo: {
    title: "View my blog posts",
  },
  metaInfo() {
    return {
      title: `Categoria: ${this.$page.category.title}`,
    };
  },
};
</script>