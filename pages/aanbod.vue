<template>
  <HeroNoImg>
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
        Beschikbare woningcorporaties en verhuurders
      </h1>

      <p class="mt-6 text-lg text-gray-500">
        Hier zijn de woningaanbod websites waarin je automatisch kan reageren
        met WoningFinder.
      </p>

      <!-- info alert with link -->
      <div class="mt-6 rounded-md bg-gray-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <InformationCircleIcon class="h-5 w-5 text-gray-400" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              Zoek je een woningaanbod websites die hier nog niet staat? Neem
              dan
              <NuxtLink
                to="/contact"
                class="underline text-gray-700 hover:text-gray-900"
                >contact</NuxtLink
              >
              met ons op.
            </p>
          </div>
        </div>
      </div>

      <h2 class="mt-4 mb-2 text-xl text-gray-900">Regio Noord-Holland</h2>
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
          name="De Alliantie"
          image="dealliantie.png"
          website="https://www.de-alliantie.nl"
        />
        <LandingCorporationLogo
          name="WoningNet Stadsregio Amsterdam"
          image="woningnet.png"
          website="https://www.woningnetregioamsterdam.nl"
        />
        <LandingCorporationLogo
          name="IkWilHuren"
          image="ikwilhuren.png"
          website="https://ikwilhuren.nu"
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
          name="WoningNet Hengelo-Borne"
          image="woningnet.png"
          website="https://www.woningnethengeloborne.nl"
        />
        <LandingCorporationLogo
          name="De WoningZoeker"
          image="dewoningzoeker.png"
          website="https://www.dewoningzoeker.nl"
        />
        <LandingCorporationLogo
          name="IkWilHuren"
          image="ikwilhuren.png"
          website="https://ikwilhuren.nu"
        />
        <LandingCorporationLogo
          name="Roomspot"
          image="roomspot.png"
          website="https://www.roomspot.nl"
        />
      </div>

      <h2 class="mt-4 mb-2 text-xl text-gray-900">Regio Utrecht</h2>
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
          name="WoningNet Regio Utrecht"
          image="woningnet.png"
          website="https://www.woningnetregioutrecht.nl"
        />
        <LandingCorporationLogo
          name="IkWilHuren"
          image="ikwilhuren.png"
          website="https://ikwilhuren.nu"
        />
      </div>

      <AlertInfo
        description="Let op: WoningFinder is zelf geen woninganbood websites maar een aggregator, alle namen en
        logo's op deze pagina zijn eigendom van de verhuurders zelf."
      >
        <InformationCircleIcon class="h-5 w-5 text-gray-400" />
      </AlertInfo>

      <div class="items-center inline-flex mt-5 space-x-4">
        <BackButton />
      </div>
    </div>
  </HeroNoImg>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
}
</script>