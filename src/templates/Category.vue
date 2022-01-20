<template>
  <Layout>
    <all-articles :posts="posts" />
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
              subtitle
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
import AllArticles from "../components/AllArticles.vue";

export default {
  computed: {
    posts() {
      if (this.$page.category.belongsTo.edges) {
        return this.$page.category.belongsTo.edges.map((el) => {
          return {
            id: el.node.id,
            title: el.node.title,
            date: el.node.date,
            subtitle: el.node.subtitle,
            path: el.node.path,
            content: el.node.content,
            image: el.node.image,
          };
        });
      } else {
        return [];
      }
    },
  },
  mounted() {
    console.log(this.posts);
  },
  components: {
    AllArticles,
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