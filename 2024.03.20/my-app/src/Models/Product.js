import Entity from "./Entity";

export default class Product extends Entity {
    id;
    pName;
    price;
    quantity;

    constructor(id, pName, price, quantity) {
        super();
        this.id = id;
        this.pName = pName;
        this.price = price;
        this.quantity = quantity;
    }
}

export const PRODUCT = [
    new Product(1, "Produit 1", 100, 5),
    new Product(2, "Produit 2", 200, 4),
    new Product(3, "Produit 3", 300, 6),
    new Product(4, "Produit 4", 400, 8),
    new Product(5, "Produit 5", 500, 9)
];

