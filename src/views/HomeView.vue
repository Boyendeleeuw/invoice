<template>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="error">
        Error
    </div>
    <div v-else-if="user">
        <ClientsOverview />
        <InvoicesOverview />
        <button @click.prevent="logout">Logout</button>
    </div>
    <LoginUser v-else />
</template>

<script>
import { computed } from 'vue'
import ClientsOverview from '@/views/clients/ClientsOverview.vue'
import InvoicesOverview from '@/views/invoices/InvoicesOverview.vue'
import LoginUser from '@/components/auth/LoginUser.vue'
import useAuth from '@/composables/useAuth'
import useLogin from '@/composables/useLogin'

export default {
    name: 'HomeView',
    components: {
        ClientsOverview,
        InvoicesOverview,
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
