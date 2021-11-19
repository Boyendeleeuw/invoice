<template>
    <form>
        <div>
            <label for="client-company">Client</label>
            <select id="client-company" v-model="company">
              <optgroup label="Select a client">
                <template v-for="(client) in allClients" :key="client">
                  <option :value="client.id">{{ client.company }}</option>
                </template>
              </optgroup>
            </select>
        </div>

        <table>
          <thead>
            <th>Description</th>
            <th>Hours</th>
            <th>Hour rate</th>
            <th>Amount in &euro;</th>
          </thead>
          <tbody>
            <tr v-for="job in jobs" :key="job">
              <td><input type="text" v-model="job.description"></td>
              <td><input type="number" v-model="job.hours"></td>
              <td><input type="number" v-model="job.hourRate"></td>
              <td><input type="number" v-model="job.amount"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal: &euro;{{ sumTotal(jobs).toFixed(2) }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Tax: &euro;{{ (sumTotal(jobs) * 0.21).toFixed(2) }}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><b>Total: &euro; {{ (sumTotal(jobs) * 1.21).toFixed(2) }}</b></td>
            </tr>
          </tbody>
        </table>
        <button @click.prevent="addNewJob">Add Job</button>

        <div>
            <button @click.prevent="createInvoice">Create invoice</button>
        </div>

        <div v-if="error">
            {{ error }}
        </div>
    </form>
</template>

<script lang="ts">
import { Invoice, Job } from '@/types/invoices.type'
import useClient from '@/composables/useClient'
import { ref } from 'vue'

export default {
    name: 'InvoiceForm',
    setup() {
        let clients = useClient()
        let jobs = ref<Job[]>([])

        clients.getClients()

        function addNewJob() {
            jobs.value.push({
                description: '',
                hours: 0,
                hourRate: 0,
                amount: 0
            })
        }

        const sumTotal = (arr: Job[]) =>
            arr.reduce((sum, { amount }) => sum + amount, 0)

        addNewJob()

        return {
            ...clients,
            jobs,
            addNewJob,
            sumTotal
        }
    }
}
</script>

<style>
</style>
