<template>
  <!-- Default wrapper for all routs/pages -->
  <div class="dark:text-gray-300 dark:bg-zinc-600">
    <header class="shadow-sm text-gray-600 bg-zinc-200 dark:text-gray-300 dark:bg-zinc-700">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt App</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/todo">ToDo</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- Output the page content -->
    <div class="container mx-auto p-4 dark:text-gray-300 dark:bg-zinc-600">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  @import url("~/assets/css/base.css");
</style>