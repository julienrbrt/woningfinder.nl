<template>
  <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
    <div
      class="
        relative
        rounded-2xl
        px-6
        py-10
        bg-wf-orange-light
        overflow-hidden
        shadow-xl
        sm:px-12 sm:py-20
      "
    >
      <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
        <svg
          class="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            class="text-wf-orange text-opacity-40"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            class="text-wf-purple text-opacity-40"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>
      <div class="relative">
        <div class="sm:text-center">
          <h2 class="font-extrabold text-2xl text-white tracking-tight">
            Reageer automatisch in
          </h2>
          <h1
            class="
              mt-4
              mx-auto
              max-w-2xl
              text-3xl
              sm:text-4xl
              text-wf-purple
              font-extrabold
            "
          >
            {{ selected }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      selected: '400+ steden',
      cities: [
        'Amsterdam',
        'Amsterdam',
        'Enschede',
        'Utrecht',
        'Rotterdam',
        'Den Haag',
        'Groningen',
        'Zwolle',
        '400+ steden',
      ],
    }
  },
  methods: {
    getCity() {
      this.i = (this.i + 1) % this.cities.length
      this.selected = this.cities[this.i]
    },
  },
  mounted() {
    setInterval(this.getCity, 2500)
  },
}
</script>
