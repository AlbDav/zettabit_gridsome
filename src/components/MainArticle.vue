<template>
  <article>
	  <div>
		  <div ref="mainTitle"
		  	   class="z-10 w-9/12 mx-auto
		  			flex content-center
					absolute right-0 left-0">
			<div class="bg-white w-1/2 p-5 my-9 rounded shadow-md">
      			<h1>{{ post.node.title }}</h1>
      			<time :datetime="post.node.date">{{ post.node.date }}</time>
				<p>{{ post.node.summary}}</p>
			</div>
		  </div>
    	  <g-image :src="post.node.image" class="object-cover w-full"
		  		   :style="{height: mainTitleHeight + 'px'}"
		  />
	  </div>
  </article>
</template>

<script>
export default {
	props: ['post'],
	data() {
		return {
			mainTitleHeight: 0
		}
	},
	mounted() {
		this.mainTitleHeight = this.$refs.mainTitle.clientHeight;
	}
}
</script>
