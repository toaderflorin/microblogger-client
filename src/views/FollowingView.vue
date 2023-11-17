<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { getUsers } from '@/api'

const users = ref<any>([])

onMounted(async () => {
  users.value = await getUsers()
})
</script>

<template>
  <div clas="w-[800px] mx-auto bg-slate-300">
    This is where you see your news feed

    <div v-for="user in users">
      {{ JSON.stringify(user) }}
    </div>
  </div>
</template>
