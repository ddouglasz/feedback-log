export interface ICustomerData {
    customer: ICustomerDetails
}

interface ICustomerDetails {
    id: number
    name: string
    feedback: string[]
}