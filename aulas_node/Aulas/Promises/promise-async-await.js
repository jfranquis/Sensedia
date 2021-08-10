console.log("Exercício de Promises");

/*
* 1) Criar uma função que permita listar um veículo qualquer
* 2) Criar uma função que permita listar a placa de um veículo passando um ID
*/
const listarVeiculo = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Chamando a função listarVeiculo");
            setTimeout(() => {
                return resolve({
                    id: 1,
                    nome: "Onix"
                });
            }, 3000)
        } catch (erro) {
            return reject(new Error(erro));
        }
    })
}
const listarPlaca = (id) => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Chamando a função listarPlaca");
            let tempo = 4000;
            setTimeout(() => {
                return resolve({
                    id: id,
                    nome: `Onix - placa do carro`,
                    placa: "CXV-1904"
                })
            }, tempo);
        } catch (erro) {
            return reject(new Error(erro));
        }
    })
}

listarVeiculo().then((carro) => {
    return listarPlaca(carro.id).then((placa) => {
        console.log(carro);
        console.log(placa);
    })
}).catch((erro) => {
    console.error("Erro de operação =>", erro);
})



/*const veiculo = listarVeiculo();

const placa = listarVeiculo(veiculo.id);

console.log(listarPlaca(id, 1));
console.log(placa);
}*/
