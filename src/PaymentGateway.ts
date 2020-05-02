//this would be an adapter
export abstract class PaymentGateway {
    abstract chargePayment(amount: number): void
}