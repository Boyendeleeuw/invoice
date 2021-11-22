import { toRefs, reactive, computed } from 'vue'
import { DataSnapshot, getDatabase, onValue, ref, set } from 'firebase/database'
import { useRouter } from 'vue-router'
import { ref as ref2 } from 'vue'

export default function() {
    const settings: any = reactive({
        userCompany: '',
        userAddress: '',
        userPostal: '',
        userCity: '',
        userPhone: '',
        userEmail: '',
        userKvk: '',
        userBtw: '',
        userIban: '',
        userTerms: 0,
        error: ''
    })

    const currentSettings = ref2<any[]>([])

    const db = getDatabase()
    const router = useRouter()

    const isValid = computed(() => {
        return (
            settings.userCompany !== '' &&
            settings.userAddress !== '' &&
            settings.userPostal !== '' &&
            settings.userCity !== '' &&
            settings.userPhone !== '' &&
            settings.userEmail !== '' &&
            settings.userKvk !== '' &&
            settings.userBtw !== '' &&
            settings.userIban !== '' &&
            settings.userTerms > 0
        )
    })

    const createSettings = () => {
        if (isValid.value) {
            set(ref(db, 'settings/'), {
                userCompany: settings.userCompany,
                userAddress: settings.userAddress,
                userPostal: settings.userPostal,
                userCity: settings.userCity,
                userPhone: settings.userPhone,
                userEmail: settings.userEmail,
                userKvk: settings.userKvk,
                userBtw: settings.userBtw,
                userIban: settings.userIban,
                userTerms: settings.userTerms
            }).then(() => {
                router.push({
                    name: 'HomeView'
                })
            }).catch((error) => {
                settings.error = error
            })
        } else {
            settings.error = 'All fields are required'
        }
    }

    const getSettings = async() => {
        const currentSettingsRef = ref(db, 'settings/')

        onValue(currentSettingsRef, (snapshot: DataSnapshot) => {
            snapshot.forEach((childSnapshot: DataSnapshot) => {
                currentSettings.value.push(childSnapshot.val())
            })
            settings.userAddress = currentSettings.value[0]
            settings.userBtw = currentSettings.value[1]
            settings.userCity = currentSettings.value[2]
            settings.userCompany = currentSettings.value[3]
            settings.userEmail = currentSettings.value[4]
            settings.userIban = currentSettings.value[5]
            settings.userKvk = currentSettings.value[6]
            settings.userPhone = currentSettings.value[7]
            settings.userPostal = currentSettings.value[8]
            settings.userTerms = currentSettings.value[9]
        })
    }

    return {
        ...toRefs(settings),
        currentSettings,
        createSettings,
        getSettings
    }
}
