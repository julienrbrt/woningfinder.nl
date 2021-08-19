<template>
  <Hero>
    <h1 class="text-3xl font-extrabold text-wf-purple tracking-tight">
      Nieuws
    </h1>

    <p class="mt-4 text-lg text-gray-500">
      Hier vind je al het nieuws over WoningFinder en de huurwoningmarkt.
    </p>

    <div v-for="post in posts" :key="post.title" class="mt-6">
      <div class="inline-block">
        <span class="badge px-2 text-xs"> {{ post.topic }} </span>
        <span class="badge px-2 text-xs bg-gray-200 text-gray-900">
          {{ new Date(post.date).toISOString().slice(0, 10) }}
        </span>
      </div>
      <NuxtLink :to="'nieuws/' + post.slug" class="block mt-2">
        <p
          class="
            text-xl
            font-semibold
            text-gray-900
            hover:text-gray-700
            hover:underline
          "
        >
          {{ post.title }}
        </p>
        <p class="mt-3 text-base text-gray-500">
          {{ post.description }}
        </p>
      </NuxtLink>
    </div>

    <div class="items-center inline-flex mt-5 space-x-4">
      <NuxtLink
        to="/"
        class="
          whitespace-nowrap
          text-base
          font-medium
          text-gray-500
          hover:text-gray-900
        "
        >Terug
      </NuxtLink>
    </div>
  </Hero>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content({ deep: true }).sortBy('date', 'desc').fetch()
    return { posts }
  },
}
</script>