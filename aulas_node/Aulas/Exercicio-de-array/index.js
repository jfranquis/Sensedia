console.log("test run,ok")
//require("./enunciado");
/*
Nível I:
1 - Iniciar um novo projeto com o nome exercicios-de-array; OK
2 - Instalar o pacote nodemon; OK
3 - Criar o script "dev" para executar a rotina "nodemon index.js"; OK
4 - Em index.js: OK
*/


// 5 - Criar uma função chamada "preencherArray()" que retorne a criação de um array com n de posições passadas no array;
function preencherArray(n) {
    const array = [];

    for (let i = 0; i < n; i++) {
        array.push(i);
    }

    return array;
}
console.log(preencherArray(10));

//6 - Listar a quantidade de posições do array;

console.log(preencherArray(10).length);

//7 - Criar uma função chamada "parOuImpar()" que passe a variável "tipo" e permita filtrar valores de um array entre par ou impar;
    const arrayDeNumeros = preencherArray(30);
    const parOuImpar = (tipo) => {
        if (tipo == "par") {
            return arrayDeNumeros.filter(numero => numero % 2 == 0)
        } else if (tipo == "impar") {
            return arrayDeNumeros.filter(numero => numero % 2 == 1)
        } else {
            return [];
        }
    }

console.log(parOuImpar("par"));
console.log(parOuImpar("impar"));

// 8 - Chamar a função par ou impar, e mostrar todos os valores em apenas uma linha;
console.log(...parOuImpar("par"));

/* 9 - Criar um array chamado vemDeTudo. Crie uma função chamda "jogaTudoPraDentro()" que permita armazenar qualquer tipo de elemento, objeto, 
número ou função dentro do array vemDeTudo; */
const vemDeTudo =[];
const jogaTudoPraDentro = (elm) => vemDeTudo.push(elm)

jogaTudoPraDentro(1);
jogaTudoPraDentro("Olá mundo!");
jogaTudoPraDentro({nome: "Janaina Franquis"});
jogaTudoPraDentro(() =>{ console.log ("minha função")});
jogaTudoPraDentro(5);
jogaTudoPraDentro(3);
jogaTudoPraDentro("Campinas Tech Talents - Bootcamp NodeJs");
jogaTudoPraDentro(() =>{ console.log ("minha função2")});

console.log(vemDeTudo);


//Nível II:
/*10 - Pegando o Array "vemDeTudo", adicionar posições nele no formato inteiro, string e funções. Criar uma nova função chamada processamento, onde:
> Se for número, deverá multiplicar os valores,
> Se for Array, armazená-lo em um array,
> Se for uma função, armazená-lo
> Se for uma função, armazená-lo em outro array. 
> O retorno desse processamento deve ser retornado em
    um objeto, como na imagem
*/

const processamento = (dados) => {
    const inteiros = [];
    const funcoes = [];
    const strings = [];

    dados.map(item => {
        if (typeof item == "number"){
            inteiros.push(item);
        } else if (typeof item == "function"){
            funcoes.push(item);
        } else if (typeof item == "string"){
            strings.push(item);
        }
    });

    return{
        inteiros: inteiros.reduce((total, item) => {
            return item * total
        }, 1),
        funcoes: funcoes,
        String: strings

    }

}
console.log(processamento(vemDeTudo)); //moc de 