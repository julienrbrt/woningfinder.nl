<template>
  <div class="bg-white">
    <main>
      <div class="pt-8 overflow-hidden lg:relative lg:py-44">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
        >
          <div>
            <WidgetsLogo />
            <div class="mt-14 md:mt-20">
              <div class="mt-6 sm:max-w-xl">
                <h1
                  class="text-3xl font-extrabold text-gray-900 tracking-tight"
                >
                  Welkom bij WoningFinder
                </h1>
                <p class="mt-6 text-xl text-gray-500">
                  Welke plan wil je?
                </p>
              </div>

              <!-- <form action="#" method="POST" class="mt-10 space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-wf-orange focus:border-wf-orange sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-wf-orange focus:border-wf-orange sm:text-sm"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      class="h-4 w-4 text-wf-orange-dark focus:ring-wf-orange border-gray-300 rounded"
                    />
                    <label
                      for="remember_me"
                      class="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-wf-orange-dark hover:text-wf-orange"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-wf-orange-dark hover:bg-wf-orange-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wf-orange"
                  >
                    Sign in
                  </button>
                </div>
              </form> -->

              <!-- This example requires Tailwind CSS v2.0+ -->
              <fieldset>
                <legend class="sr-only">
                  Plan
                </legend>
                <div class="mt-10 space-y-4">
                  <label
                    class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
                  >
                    <input
                      type="radio"
                      name="plan"
                      value="Basis"
                      class="sr-only"
                      aria-labelledby="server-size-0-label"
                      aria-describedby="server-size-0-description-0 server-size-0-description-1"
                    />
                    <div class="flex items-center">
                      <div class="text-sm">
                        <p
                          id="server-size-0-label"
                          class="font-medium text-gray-900"
                        >
                          Basis
                        </p>
                      </div>
                    </div>
                    <div
                      id="server-size-0-description-1"
                      class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                    >
                      <div class="font-medium text-gray-900">€25</div>
                      <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
                    </div>
                    <!-- Checked: "border-wf-orange", Not Checked: "border-transparent" -->
                    <div
                      class="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </label>

                  <label
                    class="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-wf-orange"
                  >
                    <input
                      type="radio"
                      name="plan"
                      value="Pro"
                      class="sr-only"
                      aria-labelledby="server-size-1-label"
                      aria-describedby="server-size-1-description-0 server-size-1-description-1"
                    />
                    <div class="flex items-center">
                      <div class="text-sm">
                        <p
                          id="server-size-1-label"
                          class="font-medium text-gray-900"
                        >
                          Pro
                        </p>
                        <div
                          id="server-size-1-description-0"
                          class="text-gray-500"
                        >
                          <p class="sm:inline">Basis</p>
                          <span
                            class="hidden sm:inline sm:mx-1"
                            aria-hidden="true"
                            >+</span
                          >
                          <p class="sm:inline">Sneller garantie</p>
                        </div>
                      </div>
                    </div>
                    <div
                      id="server-size-1-description-1"
                      class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
                    >
                      <div class="font-medium text-gray-900">€75</div>
                      <div class="ml-1 text-gray-500 sm:ml-0">eenmalig</div>
                    </div>
                    <!-- Checked: "border-wf-orange", Not Checked: "border-transparent" -->
                    <div
                      class="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </label>
                </div>
              </fieldset>
            </div>

            <!-- buttons --->
            <div class="items-center inline-flex mt-5">
              <NuxtLink to="/" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Terug</NuxtLink>
              <NuxtLink to="/" class="ml-5 btn">Volgende</NuxtLink>
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
            <div class="relative sm:px-0 sm:pl-0 lg:h-full lg:pl-32">
              <img
                class="w-full lg:h-full lg:w-auto lg:max-w-none"
                src="~/assets/img/mascotte.svg"
                alt="mascotte"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
