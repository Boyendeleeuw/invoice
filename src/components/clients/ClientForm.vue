<template>
    <form>
        <div>
            <label for="client-company">Client company name</label>
            <input type="text" id="client-company" v-model="company">
        </div>

        <div>
            <label for="client-contact">Contact person</label>
            <input type="text" id="client-contact" v-model="contact">
        </div>

        <div>
            <label for="client-address">Company address</label>
            <input type="text" id="client-address" v-model="address">
        </div>

        <div>
            <label for="client-zipcode">Zipcode</label>
            <input type="text" id="client-zipcode" v-model="zipCode">
        </div>

        <div>
            <label for="client-city">City</label>
            <input type="text" id="client-city" v-model="city">
        </div>

        <div>
            <button @click.prevent="createClient">Create client</button>
        </div>

        <div v-if="error">
            {{ error }}
        </div>
    </form>
</template>

<script lang="ts">
import useClient from '@/composables/useClient'

export default {
    name: 'ClientForm',
    setup() {
        let client = useClient()

        return {
            ...client
        }
    }
}
</script>

<style>
</style>
