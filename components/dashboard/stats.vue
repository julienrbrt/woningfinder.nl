<template>
  <div class="bg-white shadow stats">
    <div class="stat">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'text'],
}
</script>