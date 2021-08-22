export interface ICustomerData {
    customer: ICustomerDetails
}

interface ICustomerDetails {
     name: string
     feedback: string[]
}