<template>
  <div ref="ratingsContainer" class="mt-10">
    <div class="w-full flex justify-center mb-3">
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
        <div class="w-full text-center font-bold text-lg">Voto complessivo</div>
      </div>
    </div>
    <div class="flex flex-wrap justify-evenly">
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
        <div class="w-full text-center font-bold text-sm">{{ rating.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  props: ["ratings"],
  data() {
    return {
      ratingsData: []
    }
  },
  computed: {
    finalRating() {
      return {
        progress: this.ratingsData.map(el => el.progress).reduce((prev, curr) => prev + curr, 0) / this.ratingsData.length,
        legendValue: this.fromatLegendValue(this.ratingsData.map(el => el.legendValue).reduce((prev, curr) => prev + curr, 0) / this.ratingsData.length)
      }
    }
  },
  methods: {
	  fromatLegendValue(value) {
      return Math.round(value * 10) / 10;
    }
  },
  created() {
    this.ratingsData = this.ratings.map(el => {
      return {
        ...el,
        progress: 0,
        legendValue: 0
      }
    })
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const ratingsContainer = this.$refs.ratingsContainer;
    console.log(ratingsContainer);

    const ratingsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ratingsContainer,
        start: 'center bottom',
        onEnter: () => {
          this.ratingsData.forEach(el => {
            el.legendValue = Number(el.rating);
            el.progress = Number(el.rating) * 100 / 10
          })
        }
      },
    })

    const refreshTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ratingsContainer,
        onEnter: () => {
            ScrollTrigger.refresh();
        }
      },
    })
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