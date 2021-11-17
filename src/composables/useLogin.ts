import { signInWithEmailAndPassword, signOut } from '@firebase/auth'
import { toRefs, reactive, computed } from 'vue'
import 'firebase/firestore'
import auth from '@/services/firebase'

export default function() {
    const state = reactive({
        error: null,
        username: null,
        password: null,
        user: null
    })

    const isValid = computed(() => {
        const { username, password } = state
        return (
            username !== null &&
            password !== null
        )
    })

    const login = () => {
        signInWithEmailAndPassword(auth.auth, String(state.username), String(state.password))
            .then((userCredential) => {
                console.log(userCredential)
            }, error => (state.error = error))
            .catch((error) => {
                state.error = error
            })
    }

    const logout = () => {
        signOut(auth.auth)
            .then(() => {
                //
            }, error => (state.error = error))
            .catch(error => {
                state.error = error
            })
    }

    return {
        ...toRefs(state),
        isValid,
        login,
        logout
    }
}
