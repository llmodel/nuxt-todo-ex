<template>
  <div class="min-h-screen dark:text-gray-300 dark:bg-zinc-600">
    <h2>Home</h2>
    <p>This is a Nuxt 3 app with Tailwind CSS and PrimeVue</p>
    <p>Here is a PrimeVue button component</p>
    <Button label="Click" />
  </div>
</template>

<script setup>

</script>

<style scoped>
  @import url("~/assets/css/base.css");
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>