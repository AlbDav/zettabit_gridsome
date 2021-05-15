<template>
  <article class="grid grid-cols-3 gap-x-3 gap-y-1 h-96 sm:h-64 p-1 mt-4">
    <div class="col-span-3 min-h-0 min-w-0 mx-1">
      <hr class="w-4/5 mx-auto" />
      <h2 class="text-red-light">{{ post.node.title }}</h2>
      <time :datetime="post.node.date">{{ post.node.date }}</time>
    </div>
    <div
      class="sm:col-span-1 col-span-3 mr-1 rounded-xl overflow-hidden shadow-md min-h-0 min-w-0"
    >
      <g-image :src="post.node.image" class="object-cover h-full w-full" />
    </div>
    <div class="sm:col-span-2 col-span-3 flex flex-col min-h-0 min-w-0">
      <p class="flex-shrink mb-3 overflow-ellipsis overflow-hidden">
        {{ post.node.summary }}
      </p>
      <div class="flex items-end justify-end">
        <g-link :to="post.node.path" rel="bookmark" class="w-full">
          <button
            class="px-6 py-2 w-full rounded-xl shadow-md active:shadow bg-gradient-to-tl from-red-light to-red-lighter hover:from-red hover:to-red-light text-white"
          >
            Leggi
          </button>
        </g-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
	props: ['post']
}
</script>
