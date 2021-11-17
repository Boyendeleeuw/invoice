<template>
    <h1>Add a new client</h1>
    <ClientForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClientForm from '@/components/clients/ClientForm.vue'

export default defineComponent({
    name: 'ClientsAdd',
    components: {
        ClientForm
    },
    // setup() {},
})
</script>

<style>
</style>
