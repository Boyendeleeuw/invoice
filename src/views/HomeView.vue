<template>
    <div v-if="loading">{{ t("global.loading") }} ...</div>
    <div v-else-if="error">
        Error: {{ error }}
    </div>
    <div v-else-if="user">
        <div class="group">
            <h2>{{ t("HomeView.clientsTitle") }}</h2>
            <router-link to="/clients">{{ t("HomeView.clientsLink") }}</router-link>
        </div>

        <div>
            <h2>{{ t("HomeView.invoicesTitle") }}</h2>
            <router-link to="/invoices">{{ t("HomeView.invoicesLink") }}</router-link>
        </div>

        <div>
            <h2>{{ t("HomeView.settingsTitle") }}</h2>
            <router-link to="/settings">{{ t("HomeView.settingsLink") }}</router-link>
        </div>
        <br>
        <button class="logout" @click.prevent="logout">{{ t("global.logout") }}</button>
    </div>
    <LoginUser v-else />
</template>

<script>
import { computed } from 'vue'
import LoginUser from '@/components/auth/LoginUser.vue'
import useAuth from '@/composables/useAuth'
import useLogin from '@/composables/useLogin'
import { useI18n } from 'vue-i18n'

export default {
    name: 'HomeView',
    components: {
        LoginUser,
    },
    setup() {
        let { user, loading, error } = useAuth()
        let loginState = useLogin()
        const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning

        return {
            t,
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
