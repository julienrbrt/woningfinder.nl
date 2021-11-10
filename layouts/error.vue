<template>
  <Hero>
    <div class="mt-6 sm:max-w-xl">
      <div v-if="error.statusCode === 404">
        <h1
          class="
            text-3xl
            font-extrabold
            text-wf-purple
            tracking-tight
            sm:text-4xl
          "
        >
          Pagina niet gevonden
        </h1>
        <p class="mt-6 text-lg text-gray-500">
          We zijn beter in het vinden van woningen
        </p>
      </div>

      <div v-else>
        <h1
          class="
            text-3xl
            font-extrabold
            text-wf-purple
            tracking-tight
            sm:text-4xl
          "
        >
          Er is iets misgegaan
        </h1>
        <p class="mt-6 text-lg text-gray-500">Probeer het later opnieuw</p>
      </div>

      <div class="items-center inline-flex mt-5 space-x-4">
        <BackButton />
      </div>
    </div>
  </Hero>
</template>

<script>
export default {
  props: ['error'],
}
</script>