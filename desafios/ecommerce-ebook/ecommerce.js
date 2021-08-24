const Product = require("./product")

class Ecommerce {
    products //array q não foi instanciado e portanto o programa não sabe que é um array e não posso dar push
    loggedUsers = []

    constructor(products) {
        this.products = products //aqui o array esta sendo instanciado pq recebeu objetos do tipo array 
    }

    addProduct(product) {
        this.products.push(product)
    }

    addLoggedUsers(user) {
        this.loggedUsers.push(user)
    }
    /*
        removeProduct(nameEbook){
            let index = this.products.indexOf(nameEbook)
        }*/

    
    removeProduct(name) {
        for (var i = 0; i < this.products.length; i++)
            if (this.products[i].name === name) {
                this.products.splice(i, 1);
                break;
            }
    }
    
}


module.exports = Ecommerce //exportando a classe Ecommerce para que consiga usar em outros arquivos