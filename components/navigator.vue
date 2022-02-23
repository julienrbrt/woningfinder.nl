<template>
  <div class="items-center w-full inline-flex mt-5">
    <div v-show="currentStep < totalStep" class="mr-4">
      <div v-if="currentStep == 1">
        <BackButton />
      </div>
      <div v-else>
        <a @click="$emit('previous')" class="btn btn-ghost text-gray-500">
          Terug
        </a>
      </div>
    </div>

    <a
      @click="$emit('validate')"
      class="btn btn-primary"
      v-bind:class="currentStep == totalStep ? 'flex-1' : 'max-w-min'"
    >
      {{ buttonStr }}
    </a>
    <p
      class="
        flex-1
        whitespace-nowrap
        text-sm
        font-medium
        text-gray-500 text-right
      "
    >
      {{ currentStep }} / {{ totalStep }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['buttonStr', 'currentStep', 'totalStep'],
}
</script>