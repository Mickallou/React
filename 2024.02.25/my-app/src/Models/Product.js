class Product {
    id;
    name;
    price;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const PRODUCT = [
    new Product(1, "Produit 1", 100),
    new Product(2, "Produit 2", 200),
    new Product(3, "Produit 3", 300),
    new Product(4, "Produit 4", 400),
    new Product(5, "Produit 5", 500)
];

export { Product, PRODUCT };