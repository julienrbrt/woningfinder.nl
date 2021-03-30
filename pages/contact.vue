<template>
  <div class="bg-white">
    <main>
      <Hero>
        <div class="mt-6 sm:max-w-xl">
          <h1
            class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            Contact
          </h1>

          <p class="mt-6 text-lg text-gray-500">
            Heb je een vraag of wil je iets aan ons kwijt? We helpen je graag!
          </p>

          <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6">
            <div>
              <label for="full_name" class="sr-only">Naam</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autocomplete="name"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wf-orange focus:border-wf-orange border-gray-300 rounded-md"
                placeholder="Naam"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wf-orange focus:border-wf-orange border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label for="phone" class="sr-only">Telefoon (Optioneel)</label>
              <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wf-orange focus:border-wf-orange border-gray-300 rounded-md"
                placeholder="Telefoon (Optioneel)"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Bericht</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-wf-orange focus:border-wf-orange border-gray-300 rounded-md"
                placeholder="Bericht"
              ></textarea>
            </div>
          </form>

          <div class="items-center inline-flex mt-5 space-x-4">
            <NuxtLink
              to="/"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >Terug</NuxtLink
            >
            <a href="" class="btn">Stuur bericht</a>
          </div>
        </div>
      </Hero>
    </main>

    <Footer />
  </div>
</template>