<template>
  <div
    class="mt-5 py-16 bg-gray-50 overflow-hidden lg:py-24 rounded-l-3xl rounded-r-3xl"
  >
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Bespaar tijd met WoningFinder
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Je kunt nu al snel en eenvoudig je zoekopdracht creëren voor je
          droomhuis, wij regelen de rest. Je hoeft dus niet zelf te zoeken en
          reageren.
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <div class="relative">
          <h3
            class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
          >
            Persoonlijke zoekopdracht
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Wil je een tuin hebben, of in een appartement wonen? Zoek je een
            huis met 6 slaapkamers? Met WoningFinder kun je een persoonlijke
            zoekopdracht creëren, zodat wij kunnen reageren op elke woning die
            jij wilt.
          </p>

          <dl class="mt-10 space-y-10">
            <!-- using html tag here -->
            <LandingFeatureItem
              title="Alle beschikbare woningcorporaties van jouw stad"
              description='Als je een stad kiest, reageren we op het aanbod van <a
                href="/woningcorporaties" target="_blank" class="underline">alle
                woningcorporaties</a> van deze stad. Dit vergroot jouw kansen.'
            >
              <GlobeIcon class="h-6 w-6" />
            </LandingFeatureItem>

            <LandingFeatureItem
              title=" Altijd eerst"
              description="Sommige woningcorporaties werken met „Wie het eerst komt, die
                het eerst maalt”. WoningFinder zal precies na dat het aanbod is
                gepubliceerd reageren voor jou. Je wordt dus sowieso eerste. Handig toch?"
            >
              <FastForwardIcon class="h-6 w-6" />
            </LandingFeatureItem>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <img
            class="relative mx-auto lg:ml-20"
            width="700"
            src="~/assets/img/adjustement.svg"
            alt="adjustement illustration"
          />
        </div>
      </div>

      <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="lg:col-start-2">
            <h3
              class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"
            >
              Meer dan een automatiseringsdienst
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Met WoningFinder kun je relaxen. We doen ons best om een huis voor
              jou te vinden en we houden jou op de hoogte.
            </p>

            <dl class="mt-10 space-y-10">
              <LandingFeatureItem
                title="Wekelijkse update"
                description="Je krijgt van ons een wekelijkse email update waarin je kan
                  zien op welke passende woningen WoningFinder heeft gereageerd.
                  Geen dagelijkse spam."
              >
                <BellIcon class="h-6 w-6" />
              </LandingFeatureItem>
              <LandingFeatureItem
                title="Toegankelijk"
                description="Een WoningFinder zoekopdracht is slechts eenmalig €10,- als je een sociale huurwoning zoekt. Ons missie is het eenvoudiger maken voor iedereen, we weten al dat het moeilijk is om een sociale huurwoning te vinden in Nederland."
              >
                <CurrencyEuroIcon class="h-6 w-6" />
              </LandingFeatureItem>
            </dl>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <img
              class="relative mx-auto lg:mr-20"
              src="~/assets/img/subscriber.svg"
              alt="subscriber illustration"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronRightIcon,
  GlobeIcon,
  CurrencyEuroIcon,
} from '@vue-hero-icons/solid'
import { BellIcon, FastForwardIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    ChevronRightIcon,
    GlobeIcon,
    CurrencyEuroIcon,
    BellIcon,
    FastForwardIcon,
  },
}
</script>
