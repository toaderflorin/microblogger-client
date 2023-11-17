<script setup lang="ts">
import { ref } from 'vue'
import { register } from '@/api'
import { ActionState } from '@/types'

const email = ref('')
const fullName = ref('')
const password = ref('')
const signupState = ref(ActionState.NotStarted)

async function signup() {  
  try {
    signupState.value = ActionState.Started
    const x = await register(email.value, password.value, fullName.value)  
  } catch (ex ){
    alert('Error')
    console.error('error', ex)
    signupState.value = ActionState.Failed
  }
}
</script>

<template>
  <div class="h-[100%] flex flex-col items-center">
    <div class="flex flex-col w-[800px] gap-2 mt-16">
    <h1>Register account</h1>
    <div>
      Email
      <input type="text" placeholder="Enter email..." v-model="email" />
    </div>
    <div>
      FullName
      <input type="text" placeholder="Enter your full name..." v-model="fullName" />
    </div>
    <div>
      Password
      <input type="password" placeholder="Enter account password..." v-model="password" />
    </div>
    <div>
      <button @click="signup">Signup</button>
    </div>
</div>
  </div>
</template>

