import { toRefs, reactive } from '@vue/composition-api'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '@/services/firebase'

export default function() {
    const state = reactive({
        user: null,
        loading: true,
        error: null
    })

    onAuthStateChanged(auth, _user => {
        if (_user) {
            state.user = _user
        } else {
            state.user = null
        }
        state.loading = false
    })

    return {
        ...toRefs(state)
    }
}
