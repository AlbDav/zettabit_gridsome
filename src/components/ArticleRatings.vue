<template>
  <div ref="ratingsContainer" class="mt-10">
    <h3 class="text-center">
      LA NOSTRA VALUTAZIONE
    </h3>
    <ClientOnly>
      <div class="w-full flex justify-center my-4">
        <div class="flex flex-col items-center">
          <vue-ellipse-progress
            :progress="finalRating.progress"
            :legendValue="finalRating.legendValue"
            :size="150"
            color="#DC2626"
            thickness="7%
           "
            legendClass="final-rating-legend"
          />
          <div class="w-full text-center font-bold text-lg mt-1">
            Voto complessivo
          </div>
        </div>
      </div>
      <div v-if="ratingsData.length > 1" class="flex flex-wrap justify-evenly">
        <div
          v-for="rating in ratingsData"
          :key="rating.name"
          class="flex flex-col items-center mx-2 my-2"
        >
          <vue-ellipse-progress
            :progress="rating.progress"
            :legendValue="rating.legendValue"
            :size="100"
            color="#DC2626"
            thickness="7%
           "
            legendClass="rating-legend"
          />
          <div class="w-full text-center font-bold text-sm mt-1">
            {{ rating.name }}
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  props: ["ratings"],
  data() {
    return {
      scrolled: false
    };
  },
  computed: {
    ratingsData() {
      if (this.scrolled) {
        return this.ratings.map((el) => {
          return {
            ...el,
            progress: (Number(el.rating) * 100) / 10,
            legendValue: Number(el.rating),
          };
        });
      }
      return this.ratings.map((el) => {
        return {
          ...el,
          progress: 0,
          legendValue: 0,
        };
      });
    },
    finalRating() {
      return {
        progress:
          this.ratingsData
            .map((el) => el.progress)
            .reduce((prev, curr) => prev + curr, 0) / this.ratingsData.length,
        legendValue: this.fromatLegendValue(
          this.ratingsData
            .map((el) => el.legendValue)
            .reduce((prev, curr) => prev + curr, 0) / this.ratingsData.length
        ),
      };
    },
  },
  methods: {
    fromatLegendValue(value) {
      return Math.round(value * 10) / 10;
    },
  },
  mounted() {
    this.scrolled = false;

    gsap.registerPlugin(ScrollTrigger);
    const ratingsContainer = this.$refs.ratingsContainer;

    const ratingsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ratingsContainer,
        start: "center bottom",
        onEnter: () => this.scrolled = true,
      },
    });

    const refreshTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ratingsContainer,
        onEnter: () => {
          ScrollTrigger.refresh();
        },
      },
    });
  },
  watch: {
    ratings: {
		  handler() {
        this.scrolled = false;
		  },
      deep: true,
      immediate: true
	  }
  }
};
</script>

<style>
.final-rating-legend {
  @apply text-3xl;
  @apply font-bold;
}
.rating-legend {
  @apply text-2xl;
  @apply font-bold;
}
</style>