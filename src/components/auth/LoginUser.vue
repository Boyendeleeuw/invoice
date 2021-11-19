<template>
  <section class="login-overlay">
    <div>
      <form @submit.prevent>
        <div>
          <div>
            <input type="text" id="email" v-model="username" placeholder="Enter your email">
          </div>
          <div>
            <input type="password" id="password" v-model="password" placeholder="Enter your password">
          </div>
          <div>
            <button class="login" @click="login">Login</button>
          </div>
        </div>
        <div v-if="error" class="error">
          {{ error }}
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

<style lang="scss" scoped>
@import '../../assets/scss/_var';

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bg;

  input {
    margin: 5px 0;
    padding: 6px 12px;
    min-width: 250px;
    border: none;
    box-shadow: 0 0 8px 2px #9d9d9d;

    &:focus-visible {
      outline: none;
    }
  }

  button.login {
    @extend %button;
  }

  .error {
    color: red;
    margin-top: 15px;
  }
}
</style>
