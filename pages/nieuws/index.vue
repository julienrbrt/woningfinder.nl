<template>
  <Hero>
    <h1
      class="
        mt-4
        text-3xl
        font-extrabold
        text-wf-purple
        tracking-tight
        sm:text-4xl
      "
    >
      Nieuws
    </h1>

    <p class="mt-4 text-lg text-gray-500">
      Hier vind je al het nieuws over WoningFinder.
    </p>

    <div class="grid gap-2 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-4">
      <div
        v-for="post in posts"
        :key="post.title"
        class="mt-4 bg-white overflow-hidden shadow rounded-lg p-4"
      >
        <NuxtLink :to="'/nieuws/' + post.slug" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ post.title }}
          </p>

          <div class="mt-2 inline-block">
            <span class="badge px-2 text-xs bg-gray-200 text-gray-900">
              {{ new Date(post.date).toISOString().slice(0, 10) }}
            </span>
            <span class="badge px-2 text-xs"> {{ post.topic }} </span>
          </div>

          <p class="mt-3 text-base text-gray-500">
            {{ post.description }}
          </p>
          <p
            class="
              py-2
              mt-3
              text-sm
              btn
              bg-wf-purple
              hover:bg-wf-purple-dark hover:ring-wf-purple
              focus:ring-wf-purple
            "
          >
            Lees meer
          </p>
        </NuxtLink>
      </div>
    </div>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
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