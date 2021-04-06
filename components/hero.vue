<template>
  <div class="bg-white">
    <!-- Hero section -->
    <div class="min-h-screen pt-8 overflow-hidden lg:relative lg:py-44">
      <div
        class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
      >
        <div>
          <Logo />
          <div class="mt-14 md:mt-20">
            <slot></slot>
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
          <div class="relative sm:px-0 sm:pl-0 lg:h-full lg:pl-36">
            <img
              class="w-full lg:pb-28 lg:h-screen lg:w-auto lg:max-w-screen-2xl"
              src="~/assets/img/mascotte.svg"
              alt="mascotte"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>