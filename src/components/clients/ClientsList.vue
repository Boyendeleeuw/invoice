<template>
  <table>
    <thead>
      <th>Name</th>
      <th>Company</th>
      <th>Address</th>
      <th>Zip Code</th>
      <th>City</th>
      <th>Actions</th>
    </thead>
    <tbody>
      <tr v-for="client in allClients" :key="client">
        <td>{{ client.company }}</td>
        <td>{{ client.contact }}</td>
        <td>{{ client.address }}</td>
        <td>{{ client.zipCode }}</td>
        <td>{{ client.city }}</td>
      </tr>
    </tbody>
  </table>
  <div v-if="error">
    {{ error }}
  </div>
  <font-awesome-icon icon="spinner" />
</template>

<script lang="ts">
import useClient from '@/composables/useClient'

export default {
    name: 'ClientsList',
    setup() {
        let clients = useClient()

        clients.getClients()

        return {
            ...clients,
        }
    },
}
</script>

<style>
</style>
