<template>
  <Hero>
    <article>
      <h1 class="text-3xl font-extrabold text-wf-purple tracking-tight mb-6">
        {{ post.title }}
      </h1>
      <nuxt-content :document="post" />
    </article>

    <div
      class="
        inline-flex
        flex-col
        sm:flex-row
        w-max
        items-start
        sm:items-center
        justify-center
      "
    >
      <p class="text-gray-500">Reageer je nog steeds niet automatisch?</p>
      <NuxtLink
        class="
          mt-2
          sm:mt-0 sm:ml-4
          w-auto
          py-2
          btn
          bg-wf-purple
          hover:bg-wf-purple-dark hover:ring-wf-purple
          focus:ring-wf-purple
        "
        to="/start"
      >
        Begin nu
      </NuxtLink>
    </div>

    <div class="w-max items-center mt-5 space-x-4">
      <BackButton />
    </div>
  </Hero>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
}
</script>

<style>
.nuxt-content h2 {
  @apply text-xl text-wf-purple py-2;
}
.nuxt-content h3 {
  @apply text-lg;
}
.nuxt-content p {
  @apply text-gray-500 mt-2 mb-2;
}
.nuxt-content a {
  @apply underline text-wf-purple hover:text-wf-orange;
}
.nuxt-content img {
  @apply py-2;
}
.nuxt-content ul {
  @apply list-inside text-gray-500 mb-2;
}
.nuxt-content li {
  @apply list-disc;
}
.nuxt-content strong {
  @apply text-wf-purple;
}
</style>