<template>
  <div class="bg-white">
    <Hero>
      <AlertNews
        title="Nieuws"
        :description="post[0].title"
        :to="'nieuws/' + post[0].slug"
      />
      <div class="mt-6 sm:max-w-xl">
        <h1
          class="
            text-4xl
            font-extrabold
            text-wf-purple
            tracking-tight
            sm:text-5xl
          "
        >
          Reageer automatisch op woningen
        </h1>
        <p class="mt-6 text-xl text-gray-500">
          Bij WoningFinder creëer je één keer een zoekopdracht voor je
          droomhuis. Daarna reageert WoningFinder automatisch op alle aanbod van
          woningcorporaties dat matcht met je zoekopdracht. Jij hoeft verder
          niets meer te doen, makkelijk toch?
        </p>
      </div>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <NuxtLink to="/start" @click.native="startEvent" class="btn">
            Nu starten
          </NuxtLink>
        </div>
      </div>
      <div class="sm:flex sm:justify-center lg:justify-start">
        <div class="min-w-0 text-sm text-gray-500 py-2">
          Probeer 14 dagen gratis.
        </div>
      </div>
    </Hero>

    <!-- Features section -->
    <LandingFeature ref="feature" id="feature" />

    <!-- Pricing section -->
    <LandingPricing id="pricing" />

    <!-- FAQ section -->
    <LandingFaq id="faq" />

    <!-- CTA section -->
    <LandingCta id="contact" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // fetch latest news and display it
    const post = await $content('posts')
      .sortBy('date', 'desc')
      .limit(1)
      .only(['title', 'slug'])
      .fetch()

    return { post }
  },
  methods: {
    startEvent() {
      this.$ga.event('landing', 'click', 'button_start', 1)
    },
  },
}
</script>
