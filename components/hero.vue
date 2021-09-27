<template>
  <div class="bg-white overflow-y-visible pt-8 lg:relative lg:py-24">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        sm:max-w-3xl
        sm:px-6
        lg:px-8
        lg:max-w-7xl
        lg:grid lg:grid-cols-2
        lg:gap-24
      "
    >
      <div>
        <Logo />
        <div class="mt-14 md:mt-20">
          <slot></slot>
        </div>
      </div>
    </div>

    <div
      class="
        hidden
        lg:block
        sm:relative
        sm:mt-12
        sm:py-16
        lg:absolute
        lg:inset-y-0
        lg:right-0
        lg:w-1/2
      "
    >
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
      <div class="relative">
        <img
          class="lg:pt-32 lg:ml-32 w-4/6 h-3/6"
          src="~/assets/img/mascotte.svg"
          alt="mascotte"
        />
      </div>
    </div>
  </div>
</template>