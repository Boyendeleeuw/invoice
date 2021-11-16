import { toRefs, reactive } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '@/services/firebase'
import { State } from '@/types/auth.type'

export default function() {
    const state: State = reactive({
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
