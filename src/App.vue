<template>
  <div class="container">
    <router-view />
  </div>
  
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'

export default {
    name: 'App',
    setup() {
        const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
        return {
            t
        }
    }
}
</script>

<style lang="scss">
@import 'assets/scss/_var';

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $bg;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.container {
  width: 250px;
  margin: 0 auto;
}

@media (min-width: 350px) {.container {width: 350px;}}
@media (min-width: 400px) {.container {width: 350px;}}
@media (min-width: 600px) {.container {width: 450px;}}
@media (min-width: 768px) {.container {width: 600px;}}
@media (min-width: 1024px) {.container {width: 950px;}}
@media (min-width: 1440px) {.container {width: 1050px;}}
@media (min-width: 2560px) {.container {width: 2000px;}}
</style>
