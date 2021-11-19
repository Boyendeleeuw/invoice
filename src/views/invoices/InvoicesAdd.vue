<template>
    <h1>Create new invoice</h1>
    <InvoiceForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InvoiceForm from '@/components/invoices/InvoiceForm.vue'

export default defineComponent({
    name: 'InvoicesAdd',
    components: {
        InvoiceForm
    },
    // setup() {},
})
</script>

<style>
</style>
