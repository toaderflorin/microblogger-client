<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { getPosts } from '@/api'
const router = useRouter()
console.log('current', router.currentRoute.value.params.id)
const posts = ref([])

onMounted(async () => {
  const userId = router.currentRoute.value.params.id
  posts.value = await getPosts()
})
</script>

<template>
  <div class="w-[800px] mx-auto">
    <br />    <br />

    This is a user view

    <h1>Posts</h1>
    {{ JSON.stringify(posts) }}
  </div>
</template>
