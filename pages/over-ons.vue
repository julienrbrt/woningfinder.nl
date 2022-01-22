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
        Hoi 👋 ik ben
        <a
          href="https://julien.rbrt.fr"
          target="_blank"
          class="underline hover:text-gray-900"
          >Julien Robert</a
        >, een softwareontwikkelaar die lang heeft geprobeerd om een huis te
        vinden via de normale manieren. Ik vond het irritant om elke dag naar
        websites van meerdere woningcorporaties en verhuurders te gaan om een
        huis te zoeken en elke dag duizenden e-mails met het nieuwe woningaanbod
        te ontvangen... Dat is de reden dat ik WoningFinder heb gemaakt. In
        eerste instantie voor mezelf om het reageren op woningen te
        automatiseren.
      </p>

      <p class="mt-6 text-lg text-gray-500">
        Omdat ik erachter kwam dat meerdere mensen dit probleem ook hebben, heb
        ik besloten om WoningFinder gratis en eenvoudig door iedereen te laten
        gebruiken 😊.
      </p>
    </div>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
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
      title: 'Wie staat achter de scherm?',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>