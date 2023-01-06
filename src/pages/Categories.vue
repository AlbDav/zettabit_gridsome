<template>
  <Layout>
    <article-grid
      class="w-10/12 sm:px-5 mx-auto my-5 article-grid"
      :posts="categories"
    />
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
		alt
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
			alt: el.node.alt,
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
  metaInfo() {
	  return {
		  title: 'Categorie'
	  }
  }
};
</script>

<style scoped>
.article-grid >>> h2, .article-grid >>> h3, .article-grid >>> p {
  text-align: center;
}
</style>