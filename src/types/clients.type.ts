export interface Client {
    id: string,
    company: string,
    contact: string,
    address: string,
    zipCode: string,
    city: string,
    error?: string | null
}
