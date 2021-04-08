<template>
  <div class="bg-white">
    <Hero>
      <div class="mt-6 sm:max-w-xl">
        <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight">
          Er is iets misgegaan met je betaling
        </h1>
        <p class="mt-6 text-lg text-gray-500">
          Je zoekopdracht is niet helemaal voltooid omdat we jouw betaling niet
          hebben ontvangen. Je zoekopdracht word automatisch verwijderd over 24
          uur. Wil je nog steeds gebruik maken van WoningFinder? Neem dan
          contact met ons op.
        </p>
      </div>

      <div class="items-center inline-flex mt-5 space-x-4">
        <NuxtLink
          to="/"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
          >Terug
        </NuxtLink>
        <div class="rounded-md shadow">
          <NuxtLink
            to="/contact"
            @click.native="cancelled"
            class="btn bg-wf-purple hover:bg-wf-purple-dark"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </Hero>
  </div>
</template>

<script>
export default {
  methods: {
    cancelled() {
      this.saEvent('cancelled_payment_button_clicked')
    },
  },
}
</script>