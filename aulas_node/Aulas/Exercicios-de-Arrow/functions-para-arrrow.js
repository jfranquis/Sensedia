console.log("Exercicio de arrow function");

/*  1  Criar uma função que permita listarum veiculo
    2 Criar uma função que permita listar a placa de um veiculo passando um ID
*/

const listarVeiculo =  (callback) => {
    console.log("Chamando a função listaVeiculo");

    setTimeout(() (=> {
    
                     return callback(null, {
                id: 1,
                nome: "Onix",
            });
        },
        1000
    );
}

function listarPlaca(id, callback) {
    console.log("Chamando a função listarPlaca");
    let tempo = 2000;
    setTimeout(
    //    handler,
        function () {
            return callback(null, {

                id: id,
                nome: "Onix",
                Placa: "CXV-1904",
            });
        },
        tempo
    );
}
listarVeiculo(function resolverVeiculo(erro, veiculo) {
    listarPlaca(veiculo.id, function resolverPlaca(erroPlaca, placa) {


        console.log(veiculo);
        console.log(placa);

    })
});



/*const veiculo = listarVeiculo();

const placa = listarVeiculo(veiculo.id);

console.log(listarPlaca(id, 1));
console.log(placa);
}*/
