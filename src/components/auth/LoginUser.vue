<template>
  <section>
    <div>
      <div>
        Log in
      </div>

      <form @submit.prevent>
        <div>
          <div>
            <input type="text" id="email" v-model="user.email" placeholder="Enter your email">
          </div>
          <div>
            <input type="password" id="password" v-model="user.password" placeholder="Enter your password">
          </div>
          <div>
            <button class="btn-primary" @click="onLogin">Login</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import useLogin from '@/composables/useLogin'
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        let state = useLogin()
        return {
            ...state
        }
    },
})
</script>
