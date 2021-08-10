/* PROMISES 
-> Promises(promessas),traduzindo pro melhor portugues possivel é que: vamos fazer uma promessa que em algum momento será cumprida e teremos um retorno xpto.
-> É um objeto javascript que ajuda nosso código assincrono ser menos complexo e verboso. ()


 CICLO DE VIDA DE UMA PROMISE:
-> Ao instanciar uma Promise, ela sempre entra como o estado inicial "PENDING", logo ela não terminou ou não foi rejeitada.
-> Ai executar as operações com  sucesso, a Promise retorno pro códico o status "FULLFILED". (Status de Sucesso)
-> Caso de falha,o retorno sempre será "REJECTED"

PROMISES ASYNC/AWAIT:
-> O async/await é uma nova forma de tratar Promises evitando o cascateamento com .the;
-> Ou seja, o async/await garante que o comportamento seja assíncrono baseado em Promises;
-> O código fica mais simples por conta de encadeamento;
-> Async/await não altera a performace de sua aplicação;
-> Toda função await poderá ser utilizada apenas em funções coma palavra chave async;
-> Deverá ser utilizada quando dependermos de uma resposta por uma função terceira;
    Exemplo: async function index(){
                const veiculo = await listarVeiculo();
                listarPlaca(veiculo);
            }



*/

