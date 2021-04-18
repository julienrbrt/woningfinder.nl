<template>
  <div class="bg-white">
    <Hero>
      <AlertNews title="Nieuws" description="We zijn nu live" to="/start" />
      <div class="mt-6 sm:max-w-xl">
        <h1
          class="text-4xl font-extrabold text-wf-purple tracking-tight sm:text-5xl"
        >
          Zoekopdracht voor je droomhuis
        </h1>
        <p class="mt-6 text-xl text-gray-500">
          Bij WoningFinder creëer je één keer een zoekopdracht voor je
          droomhuis. Daarna reageert WoningFinder voor jou op alle aanbod van
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
        <div class="min-w-0 text-sm text-gray-400 sm:py-3">
          Geen maandelijkse kosten.
        </div>
      </div>
    </Hero>

    <NuxtLink to="#feature" class="hidden md:flex -mt-10 place-content-center">
      <ChevronDownIcon size="2x" class="animate-bounce self-center" />
    </NuxtLink>

    <!-- Features section -->
    <LandingFeature id="feature" />

    <!-- Pricing section -->
    <LandingPricing id="pricing" />

    <!-- FAQ section -->
    <LandingFaq id="faq" />

    <!-- CTA section -->
    <LandingCta id="contact" />
  </div>
</template>

<script>
import { ChevronDownIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    ChevronDownIcon,
  },
  methods: {
    startEvent() {
      this.saEvent('hero_button_clicked_start')
    },
  },
}
</script>
