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
        <a href="https://julien.rbrt.fr" class="underline">Julien Robert</a>,
        een softwareontwikkelaar die heeft lang geprobeerd om een huis te vinden
        via de normale manieren. Ik vond irritant om elke dag naar websites van
        meerdere woningcorporaties en verhuurders te gaan om een huis te zoeken.
        Elke dag duizenden e-mails met het nieuwe woningaanbod... Dat is de
        reden dat ik WoningFinder eerst gemaakt voor mij voor het automatiseren
        van woningreacties.
      </p>

      <p class="mt-6 text-lg text-gray-500">
        Omdat kwam ik achter dat meerdere mensen hebben ook deze probleem, heb
        ik besloten om WoningFinder gratis en eenvoudig voor iedereen te laten
        gebruiken 😊.
      </p>

      <p class="mt-6 text-lg text-gray-500">
        Gebruik maken van WoningFinder is gratis, maar als je toch wilt helpen
        om de kosten van WoningFinder te betalen kun je dat doen via de
        onderstaande knop.
      </p>
    </div>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
      <a href="https://www.buymeacoffee.com/woningfinder"
        ><img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=woningfinder&button_colour=de4921&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00"
      /></a>
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