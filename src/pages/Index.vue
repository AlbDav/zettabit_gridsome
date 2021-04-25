<template>
  <Layout>
    <article v-for="post in topFive" :key="post.id" class="flex h-80 rounded-xl border border-gray p-2 mt-2">
	  <div class="w-2/3 h-full mr-1 rounded-xl overflow-hidden shadow">
	    <g-image :src="post.node.image" class="object-cover h-full w-full" />
	  </div>
	  <div class="w-1/3 h-full ml-1 flex flex-col">
	    <div class="h-3/4">
          <h2 class="text-red-light"><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
          <time :datetime="post.node.date">{{ post.node.date }}</time>
          <p class="h-1/2 mt-3 overflow-ellipsis overflow-hidden">{{ post.node.summary }}</p>
		</div>
	    <div class="h-1/4 flex items-end justify-end">
		  <button class="px-6
		  				 py-2
						 rounded-xl
						 shadow-lg
						 active:shadow
						 bg-gradient-to-tl
						 from-red-light
						 to-red-lighter
						 hover:from-red
						 hover:to-red-light
						 text-white">Leggi</button>
	    </div>
	  </div>
    </article>

	<div class="rounded-xl shadow-md bg-gradient-to-tl from-gray-light to-gray-lighter mt-2 flex overflow-hidden">
		<button v-for="(post, i) in topFive"
			 :key="post.id"
			 class="h-24 flex-grow p-2 bg-gradient-to-t"
			 :class="highlighted(i)"
			 @click="selectPost(i)">
	    	<g-image :src="post.node.image" class="object-cover h-full w-full rounded-xl" />
		</button>
    </div>
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
  data() {
	  return {
		  counter: 0,
		  timer: null
	  }
  },
  computed: {
	  posts() {
		  console.log('ciao');
		  if (this.$page.posts.edges) {
			  return this.$page.posts.edges;
		  } else {
			  return [];
		  }
	  },
	  multiplePosts() {
		  console.log('hello');
		  let posts = [];
		  console.log(JSON.parse(JSON.stringify(this.posts)));
		  for (let i = 0; i < 4; i++) {
			  posts.push(this.posts);
		  }
		  return posts.flat();
	  },
	  topFive() {
		  return this.multiplePosts.slice(0, 5);
	  },
  },
  methods: {
	  highlighted(i) {
		  if (i === this.counter) {
			  return {
				  'from-gray-dark': true,
				  'to-gray-dark': true,
				  'via-gray': true
			  }
		  } else {
			  return {
				  'hover:from-gray': true,
				  'hover:to-gray-light': true
			  }
		  }
	  },
	  selectPost(i) {
		  this.stopTimer();
		  this.counter = i;
		  this.startTimer();
	  },
	  startTimer() {
	    this.timer = setInterval(() => {
		    this.counter = (this.counter + 1) % 5;
	    }, 3000);
	  },
	  stopTimer() {
		  clearInterval(this.timer);
	  }
  },
  created() {
	  this.startTimer();
  },
  components: {
    Pager
  },
  metaInfo: {
    title: 'View my blog posts'
  },
}
</script>