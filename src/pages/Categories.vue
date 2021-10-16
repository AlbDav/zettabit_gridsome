<template>
  <Layout>
    <div class="grid grid-cols-auto-fit gap-3">
      <g-link
        v-for="category in $page.categories.edges"
        :key="category.node.id"
        :to="category.node.path"
        rel="bookmark"
        class="mx-auto w-11/12 sm:w-10/12"
      >
        <button
          class="h-60 p-2 rounded-xl shadow-md bg-gradient-to-tl from-gray-light to-gray-lighter hover:from-gray hover:to-gray-light active:from-red-lighter active:to-red-light active:shadow-inner flex flex-col justify-around active:text-white"
        >
          <g-image
            :src="category.node.image"
            class="h-3/4 object-cover rounded-xl"
          />
          <span class="font-bold">
            {{ category.node.title }}
          </span>
        </button>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Categories ($page: Int) {
  categories: allCategory(perPage: 30, page: $page) {
    edges {
      node {
		id
        title
        image
		path
      }
    }
  }
}
</page-query>

<script>
export default {
};
</script>
