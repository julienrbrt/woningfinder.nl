<template>
  <div class="bg-white">
    <main>
      <!-- Hero section -->
      <div class="pt-8 overflow-hidden lg:relative lg:py-44">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
        >
          <div>
              <WidgetsLogo />
            <div class="mt-14 md:mt-20">
                <WidgetsInfo title="What's new" info="We zijn nu beschikbaar in Enschede" to="start" />
              <div class="mt-6 sm:max-w-xl">
                <h1
                  class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
                >
                  Zoekopdracht voor je droomhuis
                </h1>
                <p class="mt-6 text-xl text-gray-500">
                  Bij WoningFinder creëer je één keer een zoekopdracht voor je
                  droomhuis. Daarna reageert WoningFinder voor jou op alle
                  aanbod van woningcorporaties dat matcht met je zoekopdracht.
                  Jij hoeft verder niets meer te doen, makkelijk toch?
                </p>
              </div>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <NuxtLink
                    to="start"
                    class="btn"
                  >
                    Nu starten
                  </NuxtLink>
                </div>
              </div>
              <div class="sm:flex sm:justify-center lg:justify-start">
                <div class="min-w-0 text-sm text-gray-400 sm:py-3">
                  Geen maandelijkse kosten.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div
            class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          >
            <div class="hidden sm:block">
              <div
                class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
              ></div>
              <svg
                class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div
              class="relative sm:px-0 sm:pl-0 lg:h-full lg:pl-32"
            >
              <img
                class="w-full lg:h-full lg:w-auto lg:max-w-none"
                src="~/assets/img/mascotte.svg"
                alt="mascotte"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Features section -->
      <div
        class="mt-5 py-16 bg-gray-50 overflow-hidden lg:py-24 rounded-l-3xl rounded-r-3xl"
      >
        <div
          class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"
        >
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
              Jij kunt nu al snel en eenvoudig je zoekopdracht creëren voor je
              droomhuis, we regelen de rest. Je hoeft dus niet om zelf te zoeken en reageren.
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
                zoekopdracht creëren, zodat wij kunnen reageren op elke woning
                die jij wilt.
              </p>

              <dl class="mt-10 space-y-10">
                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-wf-orange text-white"
                    >
                      <GlobeIcon class="h-6 w-6" />
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      Alle beschikbare woningcorporaties van jouw stad
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Als je een stad kiest, we reageren op het aanbod van alle
                    woningcorporaties van dit stad. Dit vergroot jouw kansen. We
                    zijn ook altijd bezig meer woningcorporaties van andere
                    steden toe te voegen in WoningFinder.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-wf-orange text-white"
                    >
                      <FastForwardIcon class="h-6 w-6" />
                    </div>
                    <p
                      class="ml-16 text-lg leading-6 font-medium text-gray-900"
                    >
                      Altijd eerst
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Sommige woningcorporaties werken met „Wie het eerst komt,
                    die het eerst maalt”. WoningFinder zal precies na dat het aanbod
                    is gepubliceerd reageren voor jou. Je hebt zo dus heel veel
                    kans dat jij de eerste bent. Handig toch?
                  </dd>
                </div>
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
                class="relative mx-auto"
                width="490"
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
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
                  Je blijft op hoogte
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                  Met WoningFinder wekelijkse update en sneller garantie, je kan
                  relaxeren, we doen ons best om een huis voor jou te vinden. We
                  houd jou op hoogte.
                </p>

                <dl class="mt-10 space-y-10">
                  <div class="relative">
                    <dt>
                      <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-wf-orange text-white"
                      >
                        <BellIcon class="h-6 w-6" />
                      </div>
                      <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900"
                      >
                        Wekelijkse update
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                      Je krijgt van ons een wekelijkse email update waarin je
                      kan zien op welke passende woningen WoningFinder heeft
                      gereageerd. Geen dagelijkse spam.
                    </dd>
                  </div>

                  <div class="relative">
                    <dt>
                      <div
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-wf-orange text-white"
                      >
                        <ThumbUpIcon class="h-6 w-6" />
                      </div>
                      <p
                        class="ml-16 text-lg leading-6 font-medium text-gray-900"
                      >
                        Sneller garantie
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                      Met ons Sneller garantie, als jij niet de eerste bent
                      geworden op een woning met „Wie het eerst
                      komt, die het eerst maalt” (dus iemand was sneller dan
                      WoningFinder) dan krijg je je geld terug (zie meer in onze
                      voorwaarden).
                    </dd>
                  </div>
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
                  class="relative mx-auto"
                  width="490"
                  src="https://tailwindui.com/img/features/feature-example-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing section -->
      <Pricing />

      <!-- FAQ section -->
      <Faq />

      <!-- CTA section -->
      <Cta />
    </main>

    <Footer />
  </div>
</template>

<script>
import { ChevronRightIcon, GlobeIcon } from "@vue-hero-icons/solid"
import { BellIcon, FastForwardIcon, ThumbUpIcon } from "@vue-hero-icons/outline"

export default {
    components: {
    ChevronRightIcon,
    GlobeIcon,
    BellIcon,
    FastForwardIcon,
    ThumbUpIcon
  }
}
</script>
