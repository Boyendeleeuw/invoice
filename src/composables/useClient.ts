import { toRefs, reactive, computed } from 'vue'
import { Client } from '@/types/clients.type'
import { getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { useRouter } from 'vue-router'
import { ref as ref2 } from 'vue'

export default function() {
    const client: Client = reactive({
        id: '',
        company: '',
        contact: '',
        address: '',
        zipCode: '',
        city: '',
        error: null
    })

    const allClients = ref2<Client[]>([])

    const db = getDatabase()
    const router = useRouter()

    const isValid = computed(() => {
        return (
            client.company !== '' &&
            client.contact !== '' &&
            client.address !== '' &&
            client.zipCode !== '' &&
            client.city !== ''
        )
    })

    const createClient = () => {
        if (isValid.value) {
            const id = Date.now().toString(36) + Math.random().toString(36).substr(2)
            set(ref(db, 'clients/' + id), {
                // create unique id
                id: id,
                company: client.company,
                contact: client.contact,
                address: client.address,
                zipCode: client.zipCode,
                city: client.city
            }).then(() => {
                router.push({
                    name: 'ClientsOverview'
                })
            }).catch((error) => {
                client.error = error
            })
        } else {
            client.error = 'All fields are required'
        }
    }

    const getClients = async() => {
        const allClientsRef = ref(db, 'clients/')

        onValue(allClientsRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                allClients.value.push(childSnapshot.val())
            })
        })
    }

    const deleteClient = (clientId: number) => {
        const clientRef = ref(db, 'clients/' + clientId)
        remove(clientRef).then(() => {
            router.push({
                name: 'ClientsOverview'
            })
        }).catch((error) => {
            client.error = error
        })
    }

    return {
        ...toRefs(client),
        allClients,
        createClient,
        deleteClient,
        getClients
    }
}
