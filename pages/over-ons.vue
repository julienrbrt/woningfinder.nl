<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1
        class="
          text-3xl
          font-extrabold
          text-wf-purple
          tracking-tight
          sm:text-4xl
        "
      >
        Wie zijn wij
      </h1>
      <p class="mt-6 text-lg text-gray-500">
        Het is onze missie mensen te helpen een huis te vinden zonder het gedoe
        en de stress eromheen. Het is irritant om elke dag naar websites van
        meerdere woningcorporaties en verhuurders te gaan om een huis te zoeken.
        Elke dag duizenden e-mails met het nieuwe aanbod. Daarom hebben we
        WoningFinder gemaakt voor het automatiseren van woningreacties.
      </p>

      <AlertInfo
        class="mt-4"
        description=" Wist je dat ons oprichter, Julien, zelf gebruik heeft gemaakt van
            WoningFinder en zo zijn huis heeft gevonden in zijn gewenste wijk?"
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>
    </div>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
      <NuxtLink
        to="/contact"
        class="
          btn
          bg-wf-purple
          hover:bg-wf-purple-dark hover:ring-wf-purple
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
  head() {
    return {
      title: 'Wie zijn wij',
    }
  },
}
</script>