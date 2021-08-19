<template>
  <Hero>
    <article>
      <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
        {{ post.title }}
      </h1>
      <nuxt-content :document="post" />
    </article>

    <div class="items-center inline-flex mt-5 space-x-4">
      <NuxtLink
        to="/nieuws"
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
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
}
</script>

<style>
.nuxt-content h2 {
  @apply text-2xl font-bold;
}
.nuxt-content h3 {
  @apply text-xl font-bold;
}
.nuxt-content p {
  @apply text-gray-700 mt-2 mb-2;
}
.nuxt-content a {
  @apply underline hover:text-gray-900;
}
.nuxt-content img {
  @apply py-2;
}
</style>