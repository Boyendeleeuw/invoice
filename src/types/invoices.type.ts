import { Client } from './clients.type'

export interface Invoice {
    id: string,
    invoiceNumber: string,
    date: Date,
    dueDate: Date,
    client: Client,
    jobs: Array<Job>,
    amount: number,
    totalAmount: number,
    payment: string
}

export interface Job {
    description: string,
    hours?: number,
    hourRate?: number,
    amount: number
}
