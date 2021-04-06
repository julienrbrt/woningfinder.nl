<template>
  <div class="bg-white">
    <main>
      <Hero>
        <div class="mt-6 sm:max-w-xl">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">
            Gefeliciteerd, je zoekopdracht is ingesteld!
          </h1>
          <p class="mt-6 text-lg text-gray-500">
            Welkom bij WoningFinder. Je zoekopdracht is zojuist ingesteld, je
            ontvangt van ons binnenkort een email met instructies om ons te
            laten reageren voor jou.
          </p>
        </div>

        <div class="items-center inline-flex mt-5 space-x-4">
          <NuxtLink to="/" @click.native="success" class="btn">
            Begrijp ik
          </NuxtLink>
        </div>
      </Hero>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    success() {
      this.saEvent('successful_payment_button_clicked')
    },
  },
}
</script>