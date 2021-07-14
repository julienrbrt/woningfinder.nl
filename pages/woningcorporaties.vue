<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <h1
        class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
      >
        Woningcorporaties
      </h1>

      <p class="mt-6 text-lg text-gray-500">
        Hier zijn de woningcorporaties waarin WoningFinder voor jou kan zoeken
        en reageren.
      </p>

      <p class="mt-6 text-lg text-gray-500">
        Dat betekent dat WoningFinder kan automatisch reageren op alle
        huurwoningen in Aalten, Almelo, Apeldoorn, Borne, Bredevoort, Bussum, De
        Lutte, Dinxperlo, Enschede, Groenlo, Haaksbergen, Hengelo (OV), Hertme,
        Losser, Neede, Overdinkel, Ulft, Wehl, Winterswijk, en Zwolle 🙂.
      </p>

      <h2 class="mt-4 mb-2 text-xl text-gray-900">Overijssel</h2>
      <div
        class="
          mt-8
          grid grid-cols-2
          gap-0.5
          md:grid-cols-3
          lg:mt-0
          lg:grid-cols-2
        "
      >
        <LandingHousingCorporationLogo
          name="De Woonplaats"
          image="dewoonplaats.png"
          website="https://www.dewoonplaats.nl"
        />
        <LandingHousingCorporationLogo
          name="De Veste"
          image="deveste.png"
          website="https://www.veste.nl"
        />
        <LandingHousingCorporationLogo
          name="Domijn"
          image="domijn.png"
          website="https://www.domijn.nl"
        />
        <LandingHousingCorporationLogo
          name="OnsHuis"
          image="onshuis.png"
          website="https://www.onshuis.com"
        />
        <LandingHousingCorporationLogo
          name="SJHT"
          image="sjht.png"
          website="https://www.sjht.nl"
        />
        <LandingHousingCorporationLogo
          name="Twinta"
          image="twinta.png"
          website="https://www.twinta.nl"
        />
        <LandingHousingCorporationLogo
          name="Welbions"
          image="welbions.png"
          website="https://www.welbions.nl"
        />
      </div>

      <!-- info alert -->
      <div class="mt-6 rounded-md bg-gray-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <InformationCircleIcon class="h-5 w-5 text-gray-400" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-800">
              Zoek je een woningcorporatie die hier (nog) niet staat? Neem dan
              <NuxtLink to="/contact" class="underline">contact</NuxtLink> met
              ons op.
            </p>
          </div>
        </div>
      </div>

      <AlertInfo
        description="Let op: WoningFinder is zelf geen woningcorporatie, alle namen en
        logo's op deze pagina zijn eigendom van de woningcorporaties
        zelf."
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>

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
          >Terug
        </NuxtLink>
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
}
</script>