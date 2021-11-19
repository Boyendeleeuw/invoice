<template>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="error">
        Error: {{ error }}
    </div>
    <div v-else-if="user">
        <div class="group">
            <h2>Clients</h2>
            <router-link to="/clients">Client overview</router-link>
        </div>

        <div>
            <h2>Invoices</h2>
            <router-link to="/invoices">Invoice overview</router-link>
        </div>

        <div>
            <h2>Settings</h2>
            <router-link to="/settings">Settings</router-link>
        </div>
        <br>
        <button class="logout" @click.prevent="logout">Logout</button>
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

<style lang="scss">
@import '../assets/scss/_var';
    button,
    a {
        @extend %button;
        text-decoration: none;
    }

    button.logout,
    button.action {
        background-color: #cecece;
    }

    button.action-repeat {
        background-color: $red;
    }
</style>
