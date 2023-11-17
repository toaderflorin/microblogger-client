<script setup lang="ts">
import { watch, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

let show = ref(false)

watch (router.currentRoute, () => {
  console.log('Route changed', router.currentRoute.value.path)
  show.value = router.currentRoute.value.path !== '/login' && router.currentRoute.value.path !== '/signup'
})

function logout(e: any) {
  e.preventDefault()
  localStorage.removeItem('auth')
  router.push({ path: '/login' })
}

</script>

<template>
  <header v-show="show" class="bg-slate-700 h-[70px] text-white flex flex-col justify-center shadow-md">
    <div class="w-[800px] mx-auto flex gap-1">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/follow">Follow</RouterLink>
      <div class="flex-1" />
      <a @click="logout" href="">Log out</a>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
