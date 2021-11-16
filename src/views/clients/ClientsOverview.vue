<template>
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
