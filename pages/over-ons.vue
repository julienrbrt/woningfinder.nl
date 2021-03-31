<template>
  <div class="bg-white">
    <main>
      <Hero>
        <div class="mt-6 sm:max-w-xl">
          <h1
            class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            Wie zijn wij
          </h1>
          <p class="mt-6 text-lg text-gray-500">
            Het is onze missie mensen te helpen een huis te vinden zonder het
            gedoe en de stress eromheen. We waren het zat om elke dag naar
            websites van meerdere woningcorporaties te gaan om een huis te
            vinden. Elke dag duizenden emails met het nieuwe aanbod. Dus hebben
            we een oplossing gecreëerd door het automatiseren van reacties op
            het aanbod van woningcorporaties.
          </p>

          <div class="mt-6 flex items-center space-x-2">
            <InformationCircleIcon size="2.5x" class="text-gray-500" />
            <p class="text-base text-gray-500">
              Wist je dat ons oprichter, Julien, zelf gebruik heeft gemaakt van
              WoningFinder en zo zijn huis heeft gevonden in zijn gewenste wijk?
            </p>
          </div>
        </div>

        <div class="items-center inline-flex mt-5 space-x-4">
          <NuxtLink
            to="/"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >Terug</NuxtLink
          >
          <NuxtLink
            to="contact"
            class="btn bg-wf-purple hover:bg-wf-purple-dark hover:ring-wf-purple focus:ring-wf-purple"
          >
            Contact
          </NuxtLink>
        </div>
      </Hero>
    </main>

    <Footer />
  </div>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    InformationCircleIcon,
  },
}
</script>