console.log("Exemplos de utilização de arrow function");

/*
Eu preciso multiplicar dois valores denominados x e y
*/

function multiplicarNormal(x, y) {
    return x * y;
}

console.log(multiplicarNormal(2, 3));

var arrowFunctionSemRetorno = (x, y) => x * y;
console.log(arrowFunctionSemRetorno(2, 3));

var arrowFunctionComRetorno = (x, y) => {
    if (y > x) {
        return x * y;
    } else {
        return `${x} e maior que ${y}`;
    }
};

console.log(
    arrowFunctionComRetorno(2, 3),
    arrowFunctionComRetorno(3, 2)
);

var funcaoSplit = function (frase) {
    return frase.split(" ");
}

var funcaoQuebraFrase = frase => frase.split(" ");
const variavel1 = "Olá, estamos no CTT";
const variavel2 = ["Olá", "estamos", "no", "CTT"];



console.log(funcaoSplit("Olá, estamos no Campinas Tech Talents"));
console.log(" ------------ ");
console.log(funcaoQuebraFrase("Olá, estamos no Campinas Tech Talents"));

var funcaoSemParametros = function minhaFuncao() {
    console.log("Só uma saída normal");
}

funcaoSemParametros();

var fnSemParametros = () => console.log("Só uma saída normal");
fnSemParametros();

