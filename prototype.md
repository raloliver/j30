# PROTOTYPE

- Como os objetos são formados e gerenciados?
- Todo objeto que criados, herda do pai (algo parecido com o document) de todos os objetos, o `object`.
- Com o `proto` é possível trabalhar heranças e utilizar métodos nativos.

> Exemplo usando Object
´
let product = {
    category: "Notebook",
    brand: "Sony",
    getBrand : function() {
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
´

- Lembre-se que a busca é feita sempre a partir do primeiro nível
- o `this` utilizado no exemplo acima, diz respeito ao objeto que está sendo acessado no momento e não ao objeto herdado.

> Exemplo usando Prototype