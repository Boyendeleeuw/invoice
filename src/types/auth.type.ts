import { User } from '@firebase/auth'

export interface State {
    user: User,
    loading: boolean,
    error: string
}
