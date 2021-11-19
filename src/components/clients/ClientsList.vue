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
      <tr v-for="(client, index) in allClients" :key="client">
        <td>{{ client.company }}</td>
        <td>{{ client.contact }}</td>
        <td>{{ client.address }}</td>
        <td>{{ client.zipCode }}</td>
        <td>{{ client.city }}</td>
        <td>
          <button @click="itemToDelete = index" class="action">
            <font-awesome-icon icon="times" />
          </button>
          <button v-show="itemToDelete == index" class="action-repeat" @click="deleteClient(client.id)">Are you sure?</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script lang="ts">
import useClient from '@/composables/useClient'

export default {
    name: 'ClientsList',
    setup() {
        let clients = useClient()

        clients.getClients()

        return {
            ...clients
        }
    },
    data() {
        return {
            itemToDelete: null
        }
    }
}
</script>

<style>
</style>
