<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1
        class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
      >
        Wie zijn wij
      </h1>
      <p class="mt-6 text-lg text-gray-500">
        Het is onze missie mensen te helpen een huis te vinden zonder het gedoe
        en de stress eromheen. Het is irritant om elke dag naar websites van
        meerdere woningcorporaties te gaan om een huis te zoeken. Elke dag
        duizenden e-mails met het nieuwe aanbod. Daarom hebben we WoningFinder
        gemaakt voor het automatiseren van reacties op het aanbod van
        woningcorporaties.
      </p>

      <AlertInfo
        description=" Wist je dat ons oprichter, Julien, zelf gebruik heeft gemaakt van
            WoningFinder en zo zijn huis heeft gevonden in zijn gewenste wijk?"
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>
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
        >Terug</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="
          btn
          bg-wf-purple
          hover:bg-wf-purple-dark
          hover:ring-wf-purple
          focus:ring-wf-purple
        "
      >
        Contact
      </NuxtLink>
    </div>
  </Hero>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    InformationCircleIcon,
  },
}
</script>