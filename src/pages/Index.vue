<template>
  <Layout>
    <article v-for="post in $page.posts.edges" :key="post.id" class="flex">
	  <div class="w-2/3 m-1">
	    <g-image :src="post.node.image" class="object-cover h-full w-full" />
	  </div>
	  <div class="w-1/3 m-1">
        <h2><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
        <time :datetime="post.node.date">{{ post.node.date }}</time>
        <p>{{ post.node.summary }}</p>
	  </div>
    </article>

    <h2>Pagination</h2>
    <Pager :info="$page.posts.pageInfo"/>
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
        summary
        path
        content
		image
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'View my blog posts'
  },
}
</script>