<template>
  <article>
    <div>
      <div
        ref="mainTitle"
        class="
          z-10
          w-10/12
          sm:w-9/12
          mx-auto
          flex
          content-center
          absolute
          right-0
          left-0
        "
      >
        <g-link :to="post.path">
          <div
            class="
              bg-white
              w-full
              sm:w-1/2
              p-5
              my-9
              rounded-xl
              shadow-md
              main-card
            "
          >
            <h1>{{ post.title }}</h1>
            <time :datetime="post.date">{{ post.date }}</time>
            <p>{{ post.sbtitle }}</p>
          </div>
        </g-link>
      </div>
      <g-image
        :src="post.image"
        class="object-cover w-full"
        :style="{ height: mainTitleHeight + 'px' }"
      />
    </div>
  </article>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      mainTitleHeight: 0,
    };
  },
  methods: {
    setImageHeight() {
      this.mainTitleHeight = this.$refs.mainTitle.clientHeight;
    },
  },
  watch: {
    "$screen.width"() {
      this.setImageHeight();
    },
  },
  mounted() {
    this.setImageHeight();
  },
};
</script>

<style scoped>
.main-card:hover h1 {
  text-decoration: underline;
  text-decoration-color: theme("colors.red.700");
  text-decoration-thickness: 9%;
}
</style>