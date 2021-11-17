import { User } from '@firebase/auth'

export interface State {
    user: User | null,
    loading: boolean,
    error: string | null
}
