<template>
  <Layout>
    <article>
      <h1>Posts tagged {{ $page.tag.title }}</h1>

      <ul>
        <li v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
          <h3>
            <g-link :to="post.node.path">{{ post.node.title }}</g-link>
          </h3>
          {{ post.node.date }}
        </li>
      </ul>
    </article>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 30) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            subtitle
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`,
    };
  },
};
</script>