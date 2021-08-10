//criar um function que imprima a string "Hello World!"
function ImprimeMensagem() {
    console.log("Hello World!")
}
ImprimeMensagem()

// CRIAR UMA FUNCTION QUE RECEBA UM PARAMETRO [NOME] E IMPRIMA A STRING "HELLO" + O VALOR DO PARAMETRO.
function ImprimeNome(nome) {
    console.log("Helo" + nome)
}
ImprimeNome()

/* Criar função quereceba doi numeros por parametro [n1, n2], retonar a soma dos dois numeros e imprimir o valor retornado
da função. */

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(1, 1))

// Atribuir esta função para uma variavel
const soma1 = function (n1, n2) {
    return n1 + n2;
}
const resultado = soma(1, 1)
console.log(resultado)

/* Criar uma function que receba um numero e uma strindg por parametro[n1, s1], verificar se os dois parabmetros são do tipo number.
atribuir esta função para uma variavel*/
/*Se os dois valores forem do tipo Number, executar a subtração dos valores, 
retornar o resultado da subtração e imprimir o valor retornado da função*/
/* Se algum dos dois parametros for DIFERENTE do tipo Number, entça retornar null e imprimir o valor retornando da função*/

const subtracao = function (n1, s1) {
    const number1 = Number(n1);
    const number = Number(s1);

    if (typeof Number1 === 'number' && typeof Number2 === "number") {
        const resultado = Number(n1) - Number(s1);
        return resultado;
    }

    if (typeof Number(n1) === 'number' || typeof Number(s1) === "number") {
        const resultado = Number(n1) - Number(s1);
        return null;

    }
}
const resultadoPositivo = subtracao(10, "5")
console.log('resultadoPositivo =>', resultadoPositivo)

const resultadoNegativo = subtracao(10, 'a')
console.log('resultadoNegativo =>', resultadoNegativo)

/*Criar uma função chamada funcaoRecursiva que recebe um numero n por parâmetro e executa a seguinte lógica
se n <=, então retorna uma string "fim da execução";
se n>= 0, então devemos imprimir o valor de ne chamar novamente a função funcaoRecursiva pssando por parametro [n-1]*/

// resposta:
function funcaoRecursiva(n) {
    if (n <= 0) {
        return 'Fim da execução';
    }
    if (n <= 0) {
        return funcaoRecursiva(n - 1);
    }
}
console.log(funcaoRecursiva(10))

/*
  Criar uma function chamada fizzBuzzRecursivo que recebe um número n por parâmetro e executa a seguinte lógica:
    -> Se n <= 0, então retorna uma string ‘Fim da execução’;
    -> Se n for multiplo de 3, então imprimir a string ‘Fizz’ e chamar novamente a função fizzBuzzRecursivo passando por parâmetro [n - 1]
    -> Se n for multiplo de 5, então imprimir a string ‘Buzz’ e chamar novamente a função fizzBuzzRecursivo passando por parâmetro [n - 1]
    -> Se n for multiplo de 3 e multiplo de 5, então imprimir a string ‘FizzBuzz’ e chamar novamente a função fizzBuzzRecursivo passando por parâmetro [n - 1]
    -> Se  não for multiplo de 3 e não for multiplo de 5, então devemos imprimir o valor de n e chamar novamente a função fizzBuzzRecursivo passando por parâmetro [n - 1]
*/

function fizzBuzzRecursivo(n) {
    if (n <= 0) {
        return ('Fim da execução');
    }
    if ((n % 3) !== 0 && (n % 5) !== 0) {
        console.log(n);
        return fizzBuzzRecursivo(n - 1);
    }
    if ((n % 3) === 0 && (n % 5) === 0) {
        console.log("FizzBuzz");
        return fizzBuzzRecursivo(n - 1);
    }
    if ((n % 3) === 0) {
        console.log('Fizz');
        return fizzBuzzRecursivo(n - 1);
    }
}