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
        {{ title }}
      </h1>
      <p class="mt-6 text-lg text-gray-500">
        Het is onze missie mensen te helpen een huis te vinden zonder het gedoe
        en de stress eromheen. Het is irritant om elke dag naar websites van
        meerdere woningcorporaties en verhuurders te gaan om een huis te zoeken.
        Elke dag duizenden e-mails met het nieuwe aanbod. Daarom hebben we
        WoningFinder gemaakt voor het automatiseren van woningreacties.
      </p>
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
  data() {
    return {
      title: 'Wie zijn wij?',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>