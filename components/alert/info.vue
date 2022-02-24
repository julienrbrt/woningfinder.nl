<template>
  <div class="alert mt-2 p-4">
    <div>
      <div class="w-max">
        <!-- img -->
        <slot />
      </div>
      <span v-html="alert" class="text-sm font-medium text-gray-900"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['alert'],
}
</script>