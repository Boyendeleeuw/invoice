import { Client } from "./clients.type";

export interface Invoice {
    id: string,
    invoiceNumber: string,
    date: Date,
    dueDate: Date,
    client: Client,
    amount: number,
    tax: Tax,
    totalAmount: number,
    payment: string
}

enum Tax {
    Low = 0,
    High = 1,
}
