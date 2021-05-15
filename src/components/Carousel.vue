<template>
  <div>
    <article class="grid grid-cols-3 gap-3 h-96 p-1 mt-2">
      <div class="col-span-3 min-h-0 min-w-0 mx-1">
        <h2 class="text-red-light">{{ currentPost.title }}</h2>
        <time :datetime="currentPost.date">{{ currentPost.date }}</time>
      </div>
      <div
        class="sm:col-span-2 col-span-3 mr-1 rounded-xl overflow-hidden shadow-md min-h-0 min-w-0"
      >
        <g-image :src="currentPost.image" class="object-cover h-full w-full" />
      </div>
      <div class="sm:col-span-1 col-span-3 flex flex-col min-h-0 min-w-0">
        <p class="flex-shrink mb-3 overflow-ellipsis overflow-hidden">
          {{ currentPost.summary }}
        </p>
        <div class="flex items-end justify-end">
          <g-link :to="currentPost.path" rel="bookmark" class="w-full">
            <button
              class="px-6 py-2 w-full rounded-xl shadow-md active:shadow bg-gradient-to-tl from-red-light to-red-lighter hover:from-red hover:to-red-light text-white"
            >
              Leggi
            </button>
          </g-link>
        </div>
      </div>
    </article>

    <div
      v-if="topPosts.length !== 1"
      class="rounded-xl shadow-md bg-gradient-to-tl from-gray-light to-gray-lighter mt-5 flex overflow-hidden"
    >
      <button
        v-for="(post, i) in topPosts"
        :key="post.id"
        class="h-24 flex-grow p-2 bg-gradient-to-t"
        :class="highlighted(i)"
        @click="selectPost(i)"
      >
        <g-image
          :src="post.node.image"
          class="object-cover h-full w-full rounded-xl"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topPosts", "carouselNum"],
  data() {
    return {
      counter: 0,
      timer: null,
    };
  },
  computed: {
    currentPost() {
      return this.topPosts[this.counter].node;
    },
  },
  methods: {
    highlighted(i) {
      if (i === this.counter) {
        return {
          "from-red-lighter": true,
          "to-red-light": true,
          "shadow-inner": true,
        };
      } else {
        return {
          "hover:from-gray": true,
          "hover:to-gray-light": true,
        };
      }
    },
    selectPost(i) {
      this.stopTimer();
      this.counter = i;
      this.startTimer();
    },
    startTimer() {
      if (this.topPosts.length !== 1) {
        this.timer = setInterval(() => {
          this.counter = (this.counter + 1) % this.carouselNum;
        }, 3000);
      }
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
  },
  watch: {
    carouselNum() {
      this.selectPost(0);
    },
  },
  created() {
    this.startTimer();
  },
};
</script>
