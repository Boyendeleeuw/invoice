<template>
  <h2>Clients</h2>
  <router-link :to="{ name: 'ClientsAdd' }">Add new client</router-link>
  <ClientsList />
</template>

<script lang="ts">
import ClientsList from '@/components/clients/ClientsList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ClientsOverview',
    components: {
        ClientsList,
    },
    // setup() {},
})
</script>

<style>
</style>
