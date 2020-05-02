import {Product} from "./Product";

export abstract class User {
    public abstract updateLastBoughtProduct(product: Product): void;
}