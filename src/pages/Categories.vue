<template>
  <Layout>
    <article-grid class="w-10/12 sm:px-5 mx-auto my-5 article-grid" :posts="categories" />
  </Layout>
</template>

<page-query>
query Categories ($page: Int) {
  categories: allCategory(perPage: 30, page: $page) {
    edges {
      node {
		id
        title
		subtitle
        image
		path
      }
    }
  }
}
</page-query>

<script>
import ArticleGrid from "../components/ArticleGrid.vue";

export default {
  computed: {
    categories() {
      if (this.$page.categories.edges) {
        return this.$page.categories.edges.map((el) => {
          return {
            id: el.node.id,
            title: el.node.title,
            subtitle: el.node.subtitle,
            image: el.node.image,
            path: el.node.path,
          };
        });
      } else {
        return [];
      }
    },
  },
  components: {
    ArticleGrid,
  },
  created() {
	  console.log(this.categories);
  }
};
</script>

<style scoped>
.article-grid >>> h2 {
	text-align: center;
}
</style>