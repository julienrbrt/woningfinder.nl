<template>
  <div
    class="
      mt-5
      pt-16
      pb-8
      bg-gray-50
      overflow-hidden
      rounded-l-3xl rounded-r-3xl
    "
  >
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="
          hidden
          lg:block
          absolute
          left-full
          transform
          -translate-x-1/2 -translate-y-1/4
        "
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

      <div class="relative text-center">
        <h2
          class="
            text-lg
            leading-6
            font-semibold
            text-gray-700
            uppercase
            tracking-wider
          "
        >
          Hoe werkt het
        </h2>
        <p
          class="
            tracking-tight
            text-3xl
            font-extrabold
            text-gray-900
            sm:text-4xl
          "
        >
          Nooit meer een woning missen
        </p>
      </div>

      <div
        class="
          relative
          mt-12
          lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center
        "
      >
        <div class="relative">
          <h3
            class="
              text-2xl
              font-extrabold
              text-gray-900
              tracking-tight
              sm:text-3xl
            "
          >
            Persoonlijke zoekopdracht
          </h3>
          <p class="mt-3 text-lg text-gray-500">
            Zoek je een huis met 2+ slaapkamers, wil je een tuin hebben of in
            een specifieke wijk wonen? Met je WoningFinder zoekopdracht reageer
            je automatisch op alle woningen die aan je wensen voldoen.
          </p>

          <dl class="mt-10 space-y-10">
            <!-- using html tag here -->
            <LandingFeatureItem
              title="Altijd eerst"
              description="Sommige verhuurders werken met „Wie het eerst komt, die
                het eerst maalt”. WoningFinder zal precies na dat het aanbod is
                gepubliceerd automatisch reageren. Je hebt zo dus heel veel kans
                 dat je de eerste bent. Handig toch?"
            >
              <FastForwardIcon class="h-6 w-6" />
            </LandingFeatureItem>

            <LandingFeatureItem
              title="Alle woningaanbod websites van jouw stad"
              description='Als je een stad kiest, reageert WoningFinder op het aanbod van <a
                href="/aanbod" target="_blank" class="underline hover:text-gray-900">alle
                woningaanbod websites</a> van deze stad: zodat je nooit een woning zal missen.'
            >
              <GlobeIcon class="h-6 w-6" />
            </LandingFeatureItem>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            class="
              absolute
              left-1/2
              transform
              -translate-x-1/2
              translate-y-16
              lg:hidden
            "
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
        class="
          hidden
          lg:block
          absolute
          right-full
          transform
          translate-x-1/2 translate-y-12
        "
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
          class="
            lg:grid
            lg:grid-flow-row-dense
            lg:grid-cols-2
            lg:gap-8
            lg:items-center
          "
        >
          <div class="lg:col-start-2">
            <h3
              class="
                text-2xl
                font-extrabold
                text-gray-900
                tracking-tight
                sm:text-3xl
              "
            >
              Bespaar tijd met WoningFinder
            </h3>
            <p class="mt-3 text-lg text-gray-500">
              Een woning zoeken duurt erg lang, je moet gemiddeld 5 jaar actief
              zoeken voor het vinden van een sociale huurwoning (bron:
              <a
                href="https://app.nos.nl/op3/socialehuur"
                target="_blank"
                class="underline"
              >
                NOS</a
              >). WoningFinder automatiseert het actief zoeken, zodat je dat
              niet meer hoeft te doen. Je blijft altijd op de hoogte door ons
              wekelijkse update.
            </p>

            <dl class="mt-10 space-y-10">
              <LandingFeatureItem
                title="Wekelijkse update"
                description="Elke vrijdag om 18:00 uur, krijg je van ons een e-mail waarin je kan zien op welke passende woningen WoningFinder heeft gereageerd. 
                Geen dagelijkse spam!"
              >
                <BellIcon class="h-6 w-6" />
              </LandingFeatureItem>
              <LandingFeatureItem
                title="Toegankelijk"
                description="Een WoningFinder zoekopdracht is <span class='font-medium'>gratis</span>: het is al moeilijk om een sociale huurwoning te vinden in Nederland, we willen er niet van profiteren."
              >
                <CurrencyEuroIcon class="h-6 w-6" />
              </LandingFeatureItem>
            </dl>
          </div>

          <div
            class="
              mt-10
              flex
              items-center
              justify-center
              lg:mt-0 lg:col-start-1
            "
          >
            <svg
              class="
                absolute
                left-1/2
                transform
                -translate-x-1/2
                translate-y-16
                lg:hidden
              "
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

            <IllustrationMail class="relative" />
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
