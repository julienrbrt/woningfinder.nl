<template>
  <div class="bg-white">
    <AlertBanner
      v-if="news"
      @click="hideNews"
      :description="post[0].title"
      :to="'nieuws/' + post[0].slug"
    />

    <Hero>
      <!-- map -->
      <template v-slot:illustration>
        <Maps
          class="my-12"
          v-if="offering"
          :cities="offering.supported_cities"
        />
      </template>

      <!-- payment validation alert -->
      <AlertOk
        class="mb-6"
        v-if="alert && $route.query.thanks"
        @click="hideAlert"
        alert="Gefeliciteerd, je zoekopdracht is ingesteld 🎉 je ontvangt een e-mail om je zoekopdracht te activeren met instructies over hoe je kunt beginnen met automatisch reageren. Krijg je geen mail binnen? Kijk dan ook even bij jouw ongewenste mail."
      >
      </AlertOk>

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
          Reageer <span class="text-green-700">automatisch</span> op
          huurwoningen
        </h1>
        <p class="mt-6 text-xl text-gray-500">
          Mis nooit meer een woning. Vind je perfecte huurwoning zonder elke dag
          alle woningaanbod websites zelf te bezoeken om te reageren. Je
          reageert automatisch via WoningFinder op alle woningen die matchen met
          je zoekopdracht.
        </p>
      </div>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <NuxtLink to="/start" class="btn btn-primary btn-block">
          Nu starten
        </NuxtLink>
      </div>
      <div class="sm:flex sm:justify-center lg:justify-start">
        <div class="min-w-0 text-sm text-gray-500 sm:py-3">
          En dat helemaal gratis!
        </div>
      </div>
    </Hero>

    <!-- Features section -->
    <LandingFeature ref="feature" id="feature" />

    <!-- FAQ section -->
    <LandingFaq id="faq" />

    <!-- CTA section -->
    <LandingCta id="contact" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, $content, $sentry }) {
    // fetch latest news and display it
    const post = await $content('posts')
      .sortBy('date', 'desc')
      .limit(1)
      .only(['date', 'title', 'slug'])
      .fetch()

    // get offering
    const offering = await $axios
      .$get('offering', { progress: false })
      .catch((error) => {
        $sentry.captureException(error) // map won't show
      })

    return { post, offering }
  },
  data() {
    return {
      alert: true,
      news: false,
    }
  },
  methods: {
    hideAlert() {
      this.alert = false
    },
    hideNews() {
      this.news = false
    },
    displayNews() {
      var today = new Date()
      var d = new Date(this.post[0].date)

      // do not show about news if it is older than 7 days
      this.news = Math.abs(today.getTime() - d.getTime()) < 604800000
    },
  },
  mounted() {
    this.displayNews()
  },
}
</script>
