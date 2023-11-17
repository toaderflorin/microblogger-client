<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { login } from '@/api'
import { useRouter } from 'vue-router'

const email = ref('')
// const password = ref('')
const router = useRouter()

async function onSubmit() {
  const l = await login(email.value)  
  localStorage.setItem("auth", l)  
  router.push({ path: '/' })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-[100vh]">
    <div class="p-8 bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] w-[600px]">
      <div class="h-[100%] mt-12 flex flex-col gap-1">
        <div>
          Email
        </div>
        <div>
          <input type="text" placeholder="Enter email..." v-model="email" />
        </div>
        <div>
          Password
        </div>       
        <div class="flex flex-col items-end gap-2 mt-2">          
          <button @click="onSubmit">Log In</button>
          <span>Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></span>
        </div>        
      </div>
    </div>
  </div>
</template>

