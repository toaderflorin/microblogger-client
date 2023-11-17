<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { getPosts, post, deletePost } from '@/api'
import { type Post } from '@/types'

// const postsLoaded = ref(false)
// const postsLoading = ref(false)
const posts: Ref<Post[]> = ref([])

const title = ref('')
const body = ref('')

onMounted(async () => {
  await loadPosts()
})

async function loadPosts() {
  // postsLoading.value = true
  posts.value = await getPosts()
  // postsLoaded.value = true
  // postsLoading.value = false
}

async function doPost() {
  if (!(title.value.length && body.value.length)) {
    alert('invalid')
  } else {
    const user = JSON.parse(localStorage.getItem('auth') as any)
    await post(title.value, body.value, user.id)
    await loadPosts()
  }
}

async function delPost(postId: string) {
  if (confirm('are you sure')) {
    await deletePost(postId)
    await loadPosts()
  }
}
</script>

<template>
  <div class="w-[800px] mx-auto">
    <div>
      <h1>New post</h1>
      Title
      <input type="text" v-model="title" />
      Body
      <textarea v-model="body" />
      <button @click="doPost">Post</button>
    </div>
    
    <br />

    <h1>Posts</h1>

    <div v-if="posts.length === 0">There are no posts.</div>

    <div class="flex flex-col gap-2">
      <div v-for="post in posts" :key="post.id" class="bg-slate-100 p-2 flex rounded">
        <div class="flex-1">
          <b>{{ post.title }}</b>
          <p>{{ post.body }}</p>
        </div>
        <div @click="delPost(post.id)" class="clickable">
          &times;
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>
