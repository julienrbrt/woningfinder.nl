<template>
  <div class="sm:max-w-xl">
    <p class="mt-6 text-lg text-gray-500">
      Je zoekopdracht is bijna ingesteld, hier is wat jij moet weten
    </p>

    <AlertInfo class="mt-6" :description="descriptionPrice()">
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>

    <AlertInfo
      description="WoningFinder kan alleen op beschikbare woningen reageren. Zijn er geen woningen
        beschikbaar die matchen met jouw zoekopdracht dan kan WoningFinder ook nergens op
        reageren. Je ontvangt wel altijd een wekelijkse update van ons."
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>

    <AlertInfo
      description="WoningFinder reageert op de woningen die je zou willen (je
        zoekopdracht). Maar uiteraard kunnen we niet garanderen dat jij sneller een huis
        krijgt, je reageert wel automatisch, maar het zijn altijd de
        woningcorporaties die de selecties doen (loting, wie eerst komt wie
        eerst maalt of inschrijfperiode)."
    >
      <InformationCircleIcon class="h-5 w-5 text-gray-400" />
    </AlertInfo>

    <p class="mt-4 text-sm text-gray-900">
      Door op Aanmelden te klikken, ga je akkoord met onze
      <a class="underline" href="/voorwaarden" target="_blank">Voorwaarden</a>
      en
      <a class="underline" href="/voorwaarden/gebruiks" target="_blank"
        >Gebruiksvoorwaarden</a
      >. Meer informatie over hoe we je gegevens gebruiken (en nooit delen),
      vind je in ons
      <a class="underline" href="/voorwaarden/privacy" target="_blank"
        >Privacybeleid</a
      >.
    </p>
  </div>
</template>

<script>
import { InformationCircleIcon } from '@vue-hero-icons/solid'

export default {
  components: {
    InformationCircleIcon,
  },
  props: ['plan'],
  methods: {
    descriptionPrice() {
      for (var i = 0; i < this.plan.length; i++) {
        if (
          this.plan[i].name == 'pro' &&
          this.plan[i].name == this.$store.getters['register/getPlan'].name
        ) {
          return (
            'Je betaal slecht €' +
            this.plan[i].price +
            ' per maand. Je kunt opzeggen wanneer je wilt. Niet tevedren in je eerste maand? Krijg je je geld terug!'
          )
        }

        if (
          this.plan[i].name == 'basis' &&
          this.plan[i].name == this.$store.getters['register/getPlan'].name
        ) {
          return 'Je reageert met WoningFinder op alle sociale huurwoningen die aan jouw zoekopdracht voldoen.'
        }
      }
    },
  },
}
</script>
