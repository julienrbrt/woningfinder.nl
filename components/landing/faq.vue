<template>
  <div
    class="
      max-w-7xl
      mx-auto
      py-12
      px-4
      divide-y-2 divide-gray-200
      sm:px-6
      lg:py-16
      lg:px-8
    "
  >
    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
      Veelgestelde vragen
    </h2>
    <div class="mt-6">
      <dl
        v-for="faq in qa"
        :key="faq.question"
        class="space-y-8 divide-y divide-gray-200"
      >
        <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
          <dt class="text-base font-medium text-gray-900 md:col-span-5">
            {{ faq.question }}
          </dt>
          <dd class="mt-2 md:mt-0 md:col-span-7">
            <p v-html="faq.answer" class="text-base text-gray-500" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qa: [
        {
          question: 'Hoe werkt het eigenlijk?',
          answer:
            'WoningFinder zoekt elke dag in elke woningcorporaties websites hun nieuwe aanbod. Daarnaast matcht WoningFinder het aanbod met jouw zoekopdracht en reageert op passende woningen.',
        },
        {
          question: 'Hoe kan WoningFinder voor mij reageren?',
          answer:
            'Na dat je jouw zoekopdracht hebt gemaakt, sturen we een email met de passende woningcorporaties. Je kunt via deze email inloggen op elke woningcorporatie waarin je wilt reageren. Daarna gebruikt WoningFinder je inlog gegevens om voor jou te reageren.',
        },
        {
          question: 'Is dat veilig?',
          answer:
            'Zeker! We gebruiken versleuteling om je gegevens veilig te houden. Dat betekent dat we je inlog gegevens zelf ook niet kunnen zien.',
        },
        {
          question:
            'Ik heb mijn (droom)huis gevonden hoe stop ik WoningFinder?',
          answer:
            'Allereerst, gefeliciteerd! Je betaalt WoningFinder alleen één keer voor één zoekopdracht, dus je hoeft niets te annuleren. Je kunt zelf je account verwijderen via je account pagina.',
        },
        {
          question: 'Mijn stad staat er niet tussen.',
          answer: `Dat is jammer. We zijn hard bezig alle steden van Nederland toe te voegen. Schrijf je in op onze
              <a href="/wachtlijst" class="underline hover:text-gray-900">wachtlijst</a>
              en we laten je weten wanneer we jouw stad toegevoegd hebben.`,
        },
        {
          question: 'Waarom hebben jullie eenmalige kosten en geen abonnement?',
          answer:
            'De kosten zijn eenmalig bij WoningFinder omdat we abonnementen niet prettig vinden. Een huis vinden is al moeilijk in Nederland, dus we willen er niet van profiteren. Met eenmalige kosten weet je dat we ons best gaan doen om een woning voor jou te vinden: je weet dan dat hoe langer je zoekt hoe minder interessant het is voor jou en voor ons. Dat is niet het geval met een abonnement: hoe langer je zoekt, des te meer we eraan zouden verdienen — dat vinden we niet fijn.',
        },
        {
          question: 'Ik wil meerdere zoekopdrachten hebben. Hoe werkt dat?',
          answer:
            'Bij WoningFinder kun je één zoekopdracht hebben per e-mailadres, als jij meer dan één zoekopdracht wilt, moet je een nieuw account aanmaken met een ander e-mailadres.',
        },
      ],
    }
  },
}
</script>
