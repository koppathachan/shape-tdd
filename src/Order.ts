import {User} from "./User";
import {Product} from "./Product";

export class Order {

    private products: Product[] = [];

    constructor(
        private readonly user: User
    ) {}

    public AddProduct(product: Product): void {
        this.products.push(product);
        this.user.updateLastBoughtProduct(product);
    }

    get TotalAmount(): number {
        return this.products.reduce((prev, cur) => prev + cur.Price, 0)
    }
}