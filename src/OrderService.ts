import {PaymentGateway} from "./PaymentGateway";
import {Order} from "./Order";

export class OrderService {

    public submit(order: Order) {
        //other operations
        this.gateway.chargePayment(order.TotalAmount)
    }

    constructor(
        private gateway: PaymentGateway
    ) {}
}