<template>
  <Layout>
    <all-articles :posts="posts" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
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
</page-query>

<script>
import AllArticles from "../components/AllArticles.vue";

export default {
  computed: {
    posts() {
      if (this.$page.posts.edges) {
        return this.$page.posts.edges.map((el) => {
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
  components: {
    AllArticles,
  },
  metaInfo: {
    title: "View my blog posts",
  },
};
</script>