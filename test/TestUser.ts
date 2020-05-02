import {User} from "../src/User";
import {Product} from "../src/Product";

export class TestUser extends User {
    private name: string;
    private lastProduct: Product;

    get LastProduct() {
        return this.lastProduct;
    }
    get Name() {
        return this.name;
    }
    set Name(name: string) {
        this.name = this.normalizeName(name);
    }

    private normalizeName(name: string) {
        let result = (name || "").trim();
        if (result.length > 50) {
            return result.substr(0, 50);
        }

        return result;
    }
    updateLastBoughtProduct(product: Product): void {
        this.lastProduct = product
    }
}


export class UserController {
    changeName(userId: number, newName: string): void {
        let user: TestUser = new TestUser()//this will be from database.

        user.Name = newName;
    }
}