<template>
  <section>
    <div>
      <div>
        Log in
      </div>

      <form @submit.prevent>
        <div>
          <div>
            <input type="text" id="email" v-model="username" placeholder="Enter your email">
          </div>
          <div>
            <input type="password" id="password" v-model="password" placeholder="Enter your password">
          </div>
          <div>
            <button class="btn-primary" @click="login">Login</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import useLogin from '@/composables/useLogin'

export default {
    setup() {
        let state = useLogin()
        return {
            ...state
        }
    },
}
</script>
