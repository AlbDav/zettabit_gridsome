<template>
  <div class="w-10/12 sm:p-5 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
	<base-card v-for="post in posts" :key="post.id" :path="post.path"
			   :title="post.title" :date="post.date"
			   :image="post.image" :description="post.summary"
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