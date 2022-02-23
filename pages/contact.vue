<template>
  <Hero>
    <AlertOk v-if="submitted" @click="hideAlert" alert="Bericht verstuurd!" />

    <AlertError
      v-if="error"
      @click="hideAlert"
      alert="Jouw bericht kan niet verstuurd worden. Controleer het formulier en probeer het nogmaals."
    />

    <h1
      class="
        mt-6
        text-3xl
        font-extrabold
        text-wf-purple
        tracking-tight
        sm:text-4xl
      "
    >
      {{ title }}
    </h1>

    <p class="mt-6 text-lg text-gray-500">
      Heb je een vraag of wil je iets aan ons kwijt? We helpen je graag!
    </p>

    <form class="mt-6 grid grid-cols-1 gap-y-4">
      <div>
        <label for="name" class="sr-only">Naam</label>
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          autocomplete="given-name"
          class="
            block
            w-full
            shadow-sm
            py-3
            px-4
            placeholder-gray-500
            focus:ring-wf-orange focus:border-wf-orange
            border-gray-300
            rounded-md
          "
          placeholder="Naam"
          required
        />
      </div>
      <div>
        <label for="email" class="sr-only">Email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          class="
            block
            w-full
            shadow-sm
            py-3
            px-4
            placeholder-gray-500
            focus:ring-wf-orange focus:border-wf-orange
            border-gray-300
            rounded-md
          "
          placeholder="E-mailadres"
          required
        />
      </div>
      <div>
        <label for="message" class="sr-only">Bericht</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          rows="4"
          class="
            block
            w-full
            shadow-sm
            py-3
            px-4
            placeholder-gray-500
            focus:ring-wf-orange focus:border-wf-orange
            border-gray-300
            rounded-md
          "
          placeholder="Bericht"
          required
        ></textarea>
      </div>
    </form>

    <div class="items-center inline-flex mt-5 space-x-4">
      <BackButton />
      <button
        v-bind:disabled="error"
        class="btn btn-primary disabled:bg-ghost"
        type="submit"
        @click="send"
      >
        Stuur bericht
      </button>
    </div>
  </Hero>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact',
      name: '',
      email: '',
      message: '',
      error: false,
      submitted: false,
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  methods: {
    async send() {
      if (!this.validForm) {
        this.error = true
        return
      }

      await this.$axios
        .$post('contact', {
          name: this.name,
          email: this.email,
          message: this.message,
          // antispam
          phone: this.antiSpam,
        })
        .then(() => {
          this.name = ''
          this.email = ''
          this.message = ''
          this.submitted = true
        })
        .catch(() => {
          this.error = true
        })
    },
    hideAlert() {
      this.error = false
      this.submitted = false
    },
  },
  computed: {
    antiSpam() {
      function getStringBytes(s) {
        var i,
          a = new Array(s.length)
        for (i = 0; i < s.length; i++) {
          a[i] = s.charCodeAt(i)
        }
        return a
      }

      function add(total, num) {
        return total + num
      }

      return (
        374 +
        getStringBytes(this.email).reduce(add) +
        getStringBytes(this.message).reduce(add)
      )
    },
    validForm() {
      return this.name && this.email && this.message
    },
  },
}
</script>
