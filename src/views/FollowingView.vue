<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { getUsers } from '@/api'

const users = ref<any>([])
const router = useRouter()

onMounted(async () => {
  users.value = await getUsers()
})

function onUserClick(userId: string) {
  router.push('/user/' + userId)
}
</script>

<template>
  <div class="w-[800px] mx-auto">
    This is where you see your news feed
    <div class="flex flex-col gap-2">
      <div v-for="user in users" class="p-3 bg-slate-200" @click="onUserClick(user.id)">
      {{user.fullName}} ({{ user.email }})
      </div>
    </div>
  </div>
</template>
