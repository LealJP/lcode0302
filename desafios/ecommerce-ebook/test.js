const Product = require("./product"); //importando a classe Product
const Ecommerce = require("./ecommerce"); //importando a classe Ecommerce
const User = require("./user");

/* Adicionando novos ebooks a classe Produto */
const contosDoAmanha = new Product({
    name: "Contos do amanha",
    valor: 4,
    author: "Dracula",
    categories: [
        "acao",
        "suspense"
    ],
    description: "um astronauta vai para a lua e encontra um portal que o leva para o futuro",
});

const historiaDoDracula = new Product({
    name: "historiaDoDracula",
    valor: 10,
    author: "Dracula, O Proprio",
    categories: [
        "autobiografia",
        "superacao"
    ],
    description: "Bla blabla!",
});

//adicionando ebooks a compra ou ao sistema ??? (é user cliente ou admin do sistema)
const gamaStore = new Ecommerce([contosDoAmanha, historiaDoDracula]);

gamaStore.addProduct(new Product({
    name: "Mil queijos para comer antes de morrer",
    valor: 1,
    author: "Desconhecido",
    categorias: [
        "suspense",
        "viagens"
    ],
    description: "Uma historia tragica"
}))

console.log("Ebooks adicionados ao sistema: ", gamaStore.products)

//Cadastrando Novo Usuário na classe User
const Leia = new User({
    name: "Leia",
    email:  "leia@gmail.com",
    password: "1234"
})

//Logando novo usuário no Ecommerce
gamaStore.addLoggedUsers(Leia)

/* Cadastrando Novo usuário e Logando no sistema da GamaStore ao mesmo tempo*/
gamaStore.addLoggedUsers(new User({
    name: "Juci Leal",
    email:  "juportoleal@gmail.com",
    password: "1234"
}));

console.log("\n\nUsuários logados no sistema: ", gamaStore.loggedUsers)

//removendo Ebook do sistema
gamaStore.removeProduct("Contos do amanha");

console.log("\n\nLivros atualizados do sistema: ", gamaStore.products)


