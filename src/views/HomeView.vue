<template>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="error">
        Error: {{ error }}
    </div>
    <div v-else-if="user">
        <router-link to="/clients">Client overview</router-link>
        <router-link to="/invoices">Invoice overview</router-link>
        <button @click.prevent="logout">Logout</button>
    </div>
    <LoginUser v-else />
</template>

<script>
import { computed } from 'vue'
import LoginUser from '@/components/auth/LoginUser.vue'
import useAuth from '@/composables/useAuth'
import useLogin from '@/composables/useLogin'

export default {
    name: 'HomeView',
    components: {
        LoginUser,
    },
    setup() {
        let { user, loading, error } = useAuth()
        let loginState = useLogin()

        return {
            user,
            loading,
            error: computed(() => (loginState.error || error).value),
            logout: loginState.logout
        }
    }
}
</script>

<style>

</style>
