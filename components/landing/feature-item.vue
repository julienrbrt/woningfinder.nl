<template>
  <div class="relative">
    <dt>
      <div
        class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-wf-orange text-white"
      >
        <slot />
      </div>
      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
        {{ title }}
      </p>
    </dt>
    <dd class="mt-2 ml-16 text-base text-gray-500">
      <p v-html="description" />
    </dd>
  </div>
</template>

<script>
export default {
  props: ['title', 'description'],
}
</script>
