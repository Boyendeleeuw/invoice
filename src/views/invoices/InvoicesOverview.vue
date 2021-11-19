<template>
  <h2>Invoices</h2>
  <router-link :to="{ name: 'InvoicesAdd' }">Create new invoice</router-link>
  <InvoicesList />
</template>

<script lang="ts">
import InvoicesList from '@/components/invoices/InvoicesList.vue'

export default {
    name: 'InvoicesOverview',
    components: {

        InvoicesList,
    },
    // setup() {},
}
</script>

<style>
</style>
