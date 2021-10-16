<template>
  <Layout>
	  <main-article :post="topPosts[0]"
	  />
<!--     <ClientOnly>
      <carousel :topPosts="topPosts" :carouselNum="carouselNum" />

      <article-preview v-for="post in otherPosts" :key="post.id" :post="post" />
    </ClientOnly> -->
     <article-grid class="w-10/12 sm:px-5 mx-auto my-5" :posts="posts"
	 />
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
import Carousel from "../components/Carousel.vue";
import ArticlePreview from "../components/ArticlePreview.vue";
import MainArticle from "../components/MainArticle.vue";
import ArticleGrid from "../components/ArticleGrid.vue";

export default {
  computed: {
    posts() {
      if (this.$page.posts.edges) {
        return this.$page.posts.edges.map(el => {
			return {
				id: el.node.id,
				title: el.node.title,
				date: el.node.date,
				subtitle: el.node.subtitle,
				path: el.node.path,
				content: el.node.content,
				image: el.node.image,
			}
		});
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
	MainArticle,
	ArticleGrid
  },
  metaInfo: {
    title: "View my blog posts",
  },
};
</script>