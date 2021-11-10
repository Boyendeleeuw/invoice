<template>
  <Clients />

  <Invoices />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clients from "@/views/clients/Clients.vue";
import Invoices from "@/views/invoices/Invoices.vue";

export default defineComponent({
  name: "App",
  components: {
    Clients,
    Invoices,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
