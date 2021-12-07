<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <!-- Background overlay, show/hide based on modal state. -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          px-4
          pt-5
          pb-4
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
        "
      >
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button
            @click="$emit('close')"
            type="button"
            class="
              bg-white
              rounded-md
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-bg-wf-orange
            "
          >
            <span class="sr-only">Sluiten</span>
            <XIcon class="h-6 w-6" />
          </button>
        </div>
        <div class="sm:flex items-start">
          <div class="text-gray-700">
            <h3
              class="text-xl py-2 leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Volmacht
            </h3>
            <p class="text-gray-700">
              <span class="text-gray-900 font-bold">Ondergetekenden:</span>
              <br />
              1. De ontwikkelaar van WoningFinder, Julien Robert, hierna te
              noemen
              <strong>"Gevolmachtigde"</strong>;
              <br />
              en
              <br />
              2. <strong>{{ customer.name }}</strong
              >, WoningFinder gebruiker, met e-mailadres
              <strong>{{ customer.email }}</strong
              >, hierna te noemen <strong>"Volmachtgever"</strong>;
            </p>
            <p>
              Volmachtgever en Gevolmachtigde hierna gezamenlijk ook te noemen:
              "Partijen"
            </p>

            <p>Overwegende dat:</p>
            <ul class="list-disc">
              <li>
                Deze volmacht omvat het inloggen op de website van
                Gevolgmachtigde namens Volmachtgever en het reageren op
                huurwoningen van woningcorporaties of andere verhuurders namens
                Volmachtgever;
              </li>
              <li>
                De Gevolmachtigde zal bevoegd zijn om als wederpartij van
                Volmachtgever op te treden;
              </li>
              <li>Op deze volmacht is Nederlands recht van toepassing.</li>
            </ul>
            <p>om voor en namens de volmachtgever:</p>

            <h2>Artikel 1 - Duur van overeenkomst</h2>
            <p>
              Voor de periode van de duur van de door Volmachtgever aangegeven
              zoekopdrachtperiode, behoudens opzegging door Volmachtgever en
              onder de verplichting om op eerste verzoek van Volmachtgever of
              diens rechtverkrijgenden rekening en verantwoording af te leggen
              omtrent het gebruik van deze volmacht, zijn belangen waar te
              nemen, voor zijn rechten op te komen en hem daarbij te
              vertegenwoordigen, en voorts al hetgeen te doen wat de
              Gevolmachtigde nodig mocht oordelen.
            </p>

            <h2>Artikel 2 - Reikwijdte van de overeenkomst</h2>
            <p>
              Het voorgaande laat onverlet dat schriftelijke en voorafgaande
              toestemming van Volmachtgever noodzakelijk is ten aanzien van:
            </p>
            <ul>
              <li>
                het verkrijgen, bezwaren, huren en op andere wijze in gebruik of
                genot verkrijgen van onroerende zaken;
              </li>
              <li>
                het aangaan van overeenkomsten waarbij aan Volmachtgever een
                bankkrediet wordt verleend, alsmede het overschrijden van
                bedoeld krediet;
              </li>
              <li>
                het verbinden van Volmachtgever of zijn bezittingen voor
                schulden voor derden hetzij door borgtocht, hetzij op andere
                wijze.
              </li>
            </ul>

            <h2>Artikel 3 - Einde volmacht</h2>
            <p>De volmacht eindigt in geval van:</p>
            <ul>
              <li>
                faillissement, insolventie, surseance van betaling,
                ondercuratelestelling of overlijden van (een van) de
                Volmachtgever(s), rechterlijke onder bewindstelling (van het
                vermogen) van (een van) de Volmachtgevers, het van toepassing
                verklaren van een wettelijke schuldsaneringsregeling op (een
                van) de Volmachtgever(s)
              </li>
              <li>
                het verlies door (een van) de Volmachtgever(s) van zijn
                (zelfstandige)bevoegdheid tot het verrichten van de
                (rechts)handeling(en) waarvoor hij de volmacht heeft verleend
              </li>
              <li>
                ontbinding van en/of verlies van rechtspersoonlijkheid door (een
                van) de Volmachtgever(s) als de volmacht (mede) is verleend door
                een of meer rechtspersonen
              </li>
              <li>
                faillissement, insolventie, ondercuratelestelling of overlijden
                van de Gevolmachtigde, het van toepassing verklaren van een
                wettelijke schuldsaneringsregeling op de Gevolmachtigde
              </li>
              <li>
                ontbinding van en/of verlies van rechtspersoonlijkheid door de
                Gevolmachtigde als de Gevolmachtigde een rechtspersoon is
              </li>
              <li>
                herroeping door (een van) de Volmachtgever(s), die per direct
                kan worden ingetrokken
              </li>
              <li>
                opzegging door de Gevolmachtigde (bijvoorbeeld wanneer er een
                huurwoning is gevonden of wanneer een WoningFinder zoekopdracht
                is beëindigd).
              </li>
            </ul>

            <h2>Artikel 4 - Slotbepalingen</h2>
            <p>
              De Volmachtgever verklaart hierbij tevens volmacht te geven aan de
              Gevolmachtigde om namens de Volmachtgever van wijzigingen in de
              toepasselijke (algemene) voorwaarden en/of de kosten die
              voortvloeien uit (het gebruik van) deze volmacht kennis te nemen
              en deze te aanvaarden. In een dergelijk geval is de Gevolmachtigde
              verplicht de Volmachtgever onmiddellijk van deze wijziging(en) in
              kennis te stellen.
            </p>

            <h2>Artikel 5 - Geschillen</h2>
            <ul>
              <li>Op deze Overeenkomst is Nederlands Recht van toepassing.</li>
              <li>
                Indien Partijen na het ontstaan van een geschil niet gezamenlijk
                tot een oplossing kunnen komen, wordt het geschil beslecht door
                de bevoegde Nederlandse rechter van rechtbank Overijssel,
                locatie Enschede, tenzij bepalingen van dwingend recht een
                andere bevoegde rechter aanwijzen.
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            @click="$emit('close')"
            type="button"
            class="
              btn
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-gray-300
              shadow-sm
              px-4
              py-2
              bg-white
              hover:bg-white
              text-base
              font-medium
              text-gray-700
              hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-bg-wf-orange
              sm:mt-0 sm:w-auto sm:text-sm
            "
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon, KeyIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    XIcon,
    KeyIcon,
  },
  props: ['customer'],
}
</script>

<style scoped>
h2 {
  @apply mt-6 text-xl text-gray-900;
}

ul {
  @apply list-decimal;
}

li {
  @apply list-inside;
}
</style>