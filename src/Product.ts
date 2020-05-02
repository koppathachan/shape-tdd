export class Product {

    get Price(): number {
        return this.price;
    }

    constructor(
        private name: string,
        private price: number,
    ) {}
}