import {PaymentGateway} from "../src/PaymentGateway";

//this will be the implementation of the adapter
export class MockPaymentGateway extends PaymentGateway {
    chargePayment(amount: number): void {

    }
}