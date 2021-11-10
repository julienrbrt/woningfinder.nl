<template>
  <div>
    <Header />
    <div class="bg-white overflow-hidden lg:relative">
      <div
        class="
          hidden
          lg:block
          sm:relative sm:mt-12 sm:py-16
          lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
        "
      >
        <div
          class="
            absolute
            inset-y-0
            left-1/2
            w-screen
            bg-gray-50
            rounded-l-3xl
            lg:left-80 lg:right-0 lg:w-full
          "
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
        </svg>
      </div>

      <div class="mx-auto max-w-md px-6 sm:max-w-3xl relative">
        <slot></slot>
      </div>
    </div>
  </div>
</template>