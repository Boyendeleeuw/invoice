<template>
    <h2>Settings</h2>
    <form>
        <div>
            <label for="user-company">Company name</label>
            <input type="text" id="user-company" v-model="userCompany">
        </div>

        <div>
            <label for="user-address">Company address</label>
            <input type="text" id="user-address" v-model="userAddress">
        </div>

        <div>
            <label for="user-postal">Company postal code</label>
            <input type="text" id="user-postal" v-model="userPostal">
        </div>

        <div>
            <label for="user-city">Company city</label>
            <input type="text" id="user-city" v-model="userCity">
        </div>

        <div>
            <label for="user-phone">Company phone number</label>
            <input type="tel" id="user-phone" v-model="userPhone">
        </div>

        <div>
            <label for="user-email">Company email</label>
            <input type="email" id="user-email" v-model="userEmail">
        </div>

        <div>
            <label for="user-kvk">Company KvK</label>
            <input type="text" id="user-kvk" v-model="userKvk">
        </div>

        <div>
            <label for="user-btw">Company BTW</label>
            <input type="text" id="user-btw" v-model="userBtw">
        </div>

        <div>
            <label for="user-iban">Company IBAN</label>
            <input type="text" id="user-iban" v-model="userIban">
        </div>

        <div>
            <label for="user-terms">Terms (amount of days)</label>
            <input type="number" id="user-terms" v-model="userTerms">
        </div>

        <div>
            <button @click.prevent="createSettings">Save settings</button>
        </div>

        <div v-if="error">
            {{ error }}
        </div>
    </form>
</template>

<script lang="ts">
import useSettings from '@/composables/useSettings'

export default {
    name: 'SettingsView',
    components: {

    },
    setup() {
        let settings = useSettings()

        settings.getSettings()

        return {
            ...settings
        }
    },
}
</script>

<style>
</style>
