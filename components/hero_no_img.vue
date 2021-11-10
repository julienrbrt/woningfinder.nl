<template>
  <div class="bg-white pt-8 overflow-hidden lg:relative lg:py-24">
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
        <rect
          width="404"
          height="392"
          fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
        />
      </svg>
    </div>

    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 relative">
      <div>
        <Logo />
        <div class="mt-14">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>