function Product(category, brand, marketplace) {
    this.category = category,
        this.brand = brand,
        this.marketplace = marketplace || "Informak";
}

Product.prototype.status = true;
Product.prototype.getBrand = function () {
    return this.brand;
}

let ecommerce = new Product(["Notebook", "Monitor", "Celular"],["Sony", "LG", "ASUS"],["Informak", "São Luis", "Infotech"]);

console.log(ecommerce.marketplace);
console.log(ecommerce.getBrand());