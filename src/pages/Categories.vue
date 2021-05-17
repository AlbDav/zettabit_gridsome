<template>
  <Layout>
    <div class="grid grid-cols-auto-fit gap-3">
      <div v-for="category in $page.categories.edges" :key="category.node.id" class="border h-20 w-20 mx-auto">
        {{ category.node.title }}
      </div>
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
      }
    }
  }
}
</page-query>