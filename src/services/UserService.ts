import auth from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
    async loginUser(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
                // const user = userCredential.user
                console.log(userCredential)
            // ...
            })
            .catch((error) => {
                // const errorCode = error.code
                // const errorMessage = error.message
                console.log(error)
            })
    }
}
