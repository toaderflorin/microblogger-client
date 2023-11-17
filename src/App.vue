<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <main>    
    <RouterView />
  </main>
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
