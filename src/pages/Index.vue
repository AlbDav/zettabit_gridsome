<template>
  <Layout>
    <article v-for="post in $page.posts.edges" :key="post.id" class="flex h-80 rounded-xl border border-gray-200 p-2 mt-2">
	  <div class="w-2/3 h-full mr-1 rounded-xl overflow-hidden shadow">
	    <g-image :src="post.node.image" class="object-cover h-full w-full" />
	  </div>
	  <div class="w-1/3 h-full ml-1 flex flex-col">
	    <div class="h-3/4">
          <h2><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
          <time :datetime="post.node.date">{{ post.node.date }}</time>
          <p class="h-1/2 mt-3 overflow-ellipsis overflow-hidden">{{ post.node.summary }}</p>
		</div>
	    <div class="h-1/4 flex items-end justify-end">
		  <button class="px-6 py-2 rounded-xl shadow bg-gradient-to-tl from-red-start to-red-end text-gray-100 hover:text-white">Leggi</button>
	    </div>
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