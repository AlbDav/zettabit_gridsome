<template>
  <Layout>
    <article class="grid grid-cols-3 gap-3 h-96 rounded-xl p-2 mt-2">
      <div class="col-span-3 min-h-0 min-w-0">
        <h2 class="text-red-light">{{ currentPost.title }}</h2>
        <time :datetime="currentPost.date">{{ currentPost.date }}</time>
	  </div>
	  <div class="col-span-2 mr-1 rounded-xl overflow-hidden shadow-md min-h-0 min-w-0">
	    <g-image :src="currentPost.image" class="object-cover h-full w-full" />
	  </div>
	  <div class="flex flex-col min-h-0 min-w-0">
        <p class="flex-shrink mb-3 overflow-ellipsis overflow-hidden">{{ currentPost.summary }}</p>
	    <div class="flex items-end justify-end">
		  <g-link :to="currentPost.path" rel="bookmark" class="w-full">
			  <button class="px-6
		  				 py-2
						 w-full
						 rounded-xl
						 shadow-md
						 active:shadow
						 bg-gradient-to-tl
						 from-red-light
						 to-red-lighter
						 hover:from-red
						 hover:to-red-light
						 text-white">Leggi</button>
		  </g-link>
	    </div>
	  </div>
    </article>

	<div class="rounded-xl shadow-md bg-gradient-to-tl from-gray-light to-gray-lighter mt-3 flex overflow-hidden">
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
	  currentPost() {
		  return this.topFive[this.counter].node;
	  }
  },
  methods: {
	  highlighted(i) {
		  if (i === this.counter) {
			  return {
				  'from-red-lighter': true,
				  'to-red-light': true,
				  'shadow-inner': true
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