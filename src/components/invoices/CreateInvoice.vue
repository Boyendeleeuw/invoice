<template>
  <table>
    <thead>
      <th>Invoice</th>
      <th>Client</th>
      <th>Date</th>
      <th>Due date</th>
      <th>Total amount</th>
    </thead>
    <tbody>
      <tr v-for="invoice in invoices" :key="invoice">
        <td>{{ invoice.invoiceNumber }}</td>
        <td>{{ invoice.client.company }}</td>
        <td>{{ invoice.date.toLocaleString("nl-NL", dateOptions) }}</td>
        <td>{{ invoice.dueDate.toLocaleString("nl-NL", dateOptions) }}</td>
        <td>&euro;{{ invoice.totalAmount.toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Invoice } from '@/types/invoices.type'

export default {
    name: 'InvoicesList',
    setup() {
        const invoices: Invoice[] = [
            {
                id: '1',
                invoiceNumber: '20210001',
                date: new Date('01-01-2021'),
                dueDate: new Date('01-14-2021'),
                client: {
                    id: '1',
                    contact: 'Boyen',
                    company: 'de Leeuw BV',
                    address: 'Nieuwstraat 71',
                    zipCode: '9724KH Groningen',
                    city: 'Groningen'
                },
                amount: 100,
                tax: 1,
                totalAmount: 121,
                payment: 'Complete',
            },
        ]
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }

        return {
            invoices,
            dateOptions,
        }
    },
}
</script>

<style>
</style>
