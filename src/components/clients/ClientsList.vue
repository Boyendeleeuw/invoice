<template>
  <table>
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Company</th>
      <th>Address</th>
      <th>Zip Code</th>
    </thead>
    <tbody>
      <tr v-for="client in clients" :key="client">
        <td>{{ client.id }}</td>
        <td>{{ client.name }}</td>
        <td>{{ client.company }}</td>
        <td>{{ client.address }}</td>
        <td>{{ client.zipCode }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Client } from "@/types/clients.type";

export default {
  name: "ClientsList",
  setup() {
    const clients: Client[] = [
      {
        id: "1",
        name: "Boyen",
        company: "de Leeuw BV",
        address: "Nieuwstraat 71",
        zipCode: "9724KH Groningen",
      },
    ];

    return {
      clients,
    };
  },
};
</script>

<style>
</style>
