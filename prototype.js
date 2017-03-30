let product = {
    category: "Notebook",
    brand: "Sony",
    getBrand: function () {
        console.log(this.brand);
    }
};

let company = Object.create(product);
let ecommerce = Object.create(company);

ecommerce.brand = "Vaio";

company.getBrand();
ecommerce.getBrand();
console.log(company);
console.log(company.category);
console.log(ecommerce);
console.log(ecommerce.brand);