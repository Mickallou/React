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

    validate = () => {
        const errors = {};

        if (!this.id) {
            errors['id'] = 'Product Id is required';
        }

        if (!this.pName) {
            errors['pName'] = 'Product Name is required';
        }

        if (!this.price) {
            errors['price'] = 'Product Price is required';
        } else if (isNaN(this.price) || this.price < 0 || this.price > 1000) {
            errors['price'] = 'Product Price must be a number between 0 and 1000';
        }

        if (!this.quantity) {
            errors['quantity'] = 'Product Quantity is required';
        } else if (isNaN(this.quantity) || this.quantity < 0) {
            errors['quantity'] = 'Product Quantity must be a non-negative number';
        }

        return errors;
    }
}

export let PRODUCT = [
    new Product(1, "Produit 1", 100, 5),
    new Product(2, "Produit 2", 200, 4),
    new Product(3, "Produit 3", 300, 6),
    new Product(4, "Produit 4", 400, 8),
    new Product(5, "Produit 5", 500, 9)
];
