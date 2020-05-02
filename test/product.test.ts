import {Order} from "../src/Order";
import {TestUser} from "./TestUser";
import {Product} from "../src/Product";
import {expect} from "chai";
import {OrderService} from "../src/OrderService";
import {MockPaymentGateway} from "./MockPaymentGateway";
import * as sinon from "sinon";

describe("Order", () => {
    it("should add products to the order", () => {
        let user = new TestUser();
        let order = new Order(user);
        let product = new Product("sample product", 100);

        order.AddProduct(product);

        expect(order.TotalAmount).to.eq(100);
        expect(user.LastProduct).to.be.deep.equals(product);
    });
});



describe("OrderService", () => {
    it("should submit order and make payment", () => {
        let user = new TestUser();
        let paymentgateway = new MockPaymentGateway();
        let order = new Order(user);

        //test this if you must.
        let product = new Product("sample product", 100);
        order.AddProduct(product);

        let mock = sinon.mock(paymentgateway).expects("chargePayment").once()



        let orderService = new OrderService(paymentgateway);
        orderService.submit(order);

        expect(mock.verify()).to.be.true;
    });
});