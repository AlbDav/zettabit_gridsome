<template>
  <div class="w-10/12 sm:p-5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
	<base-card v-for="post in posts" :key="post.node.id" :path="post.node.path"
			   :title="post.node.title" :date="post.node.date"
			   :image="post.node.image" :description="post.node.summary"
	/>
  </div>
</template>

<script>
import BaseCard from "./BaseCard.vue";

export default {
	props: ['posts'],
	components: {
		BaseCard
	},
	created() {
		console.log(JSON.parse(JSON.stringify(this.posts)));
	}
}
</script>