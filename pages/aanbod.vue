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
        Hier zijn de woningaanbod websites waarin je automatisch kan reageren
        met WoningFinder.
      </p>

      <AlertInfo
        class="mt-6"
        alert='Zoek je een site die hier nog niet staat? Neem dan
              <a
                to="/contact"
                class="underline text-gray-700 hover:text-gray-900"
                >contact</a>
              met ons op.'
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>

      <h2 class="mt-4 mb-2 text-xl text-gray-900">Heel Nederland</h2>
      <div
        class="
          mt-8
          grid grid-cols-2
          gap-0.5
          md:grid-cols-3
          lg:mt-0 lg:grid-cols-2
        "
      >
        <LandingCorporationLogo
          name="Ikwilhuren"
          image="ikwilhuren.png"
          website="https://ikwilhuren.nu"
        />
        <LandingCorporationLogo
          name="WoningNet"
          image="woningnet.png"
          website="https://www.woningnet.nl"
        />
      </div>

      <h2 class="mt-4 mb-2 text-xl text-gray-900">Regio Overijssel</h2>
      <div
        class="
          mt-8
          grid grid-cols-2
          gap-0.5
          md:grid-cols-3
          lg:mt-0 lg:grid-cols-2
        "
      >
        <LandingCorporationLogo
          name="De Woonplaats"
          image="dewoonplaats.png"
          website="https://www.dewoonplaats.nl"
        />
        <LandingCorporationLogo
          name="Domijn"
          image="domijn.png"
          website="https://www.domijn.nl"
        />
        <LandingCorporationLogo
          name="OnsHuis"
          image="onshuis.png"
          website="https://www.onshuis.com"
        />
        <LandingCorporationLogo
          name="Mijande Wonen"
          image="mijande_wonen.png"
          website="https://www.mijande.nl"
        />
        <LandingCorporationLogo
          name="De WoningZoeker"
          image="dewoningzoeker.png"
          website="https://www.dewoningzoeker.nl"
        />
        <LandingCorporationLogo
          name="Woonburo Almelo"
          image="woonburoalmelo.png"
          website="https://www.woonburoalmelo.nl"
        />
        <LandingCorporationLogo
          name="Roomspot"
          image="roomspot.png"
          website="https://www.roomspot.nl"
        />
      </div>

      <h2 class="mt-4 mb-2 text-xl text-gray-900">Regio Zuid-Holland</h2>
      <div
        class="
          mt-8
          grid grid-cols-2
          gap-0.5
          md:grid-cols-3
          lg:mt-0 lg:grid-cols-2
        "
      >
        <LandingCorporationLogo
          name="Woonnet Haaglanden"
          image="woonnethaaglanden.png"
          website="https://www.woonnet-haaglanden.nl"
        />
      </div>

      <AlertInfo
        class="mt-4"
        alert="Let op: WoningFinder is zelf geen woninganbood website maar een aggregator, alle namen en
        logo's op deze pagina zijn eigendom van de verhuurders zelf."
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>

      <div
        class="
          mt-4
          inline-flex
          flex-col
          sm:flex-row
          w-max
          items-start
          sm:items-center
          justify-center
        "
      >
        <p class="text-gray-500">Reageer je nog steeds niet automatisch?</p>
        <NuxtLink
          class="mt-2 sm:mt-0 sm:ml-4 w-auto py-2 btn btn-secondary"
          to="/start"
        >
          Begin nu
        </NuxtLink>
      </div>

      <div class="items-center mt-5 space-x-4">
        <BackButton />
      </div>
    </div>
  </Hero>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
  data() {
    return {
      title: 'Beschikbare woningcorporaties en verhuurders',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>