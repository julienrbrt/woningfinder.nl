<template>
  <div class="bg-white">
    <Hero>
      <template v-slot:illustration>
        <IllustrationCitiesList />
      </template>

      <!-- registration alert -->
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
  data() {
    return {
      alert: true,
    }
  },
  methods: {
    hideAlert() {
      this.alert = false
    },
  },
}
</script>
