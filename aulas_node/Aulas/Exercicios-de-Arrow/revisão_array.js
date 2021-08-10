/* 
-> Array map 
-> Array Filter
-> Array reduce
*/

console.log("Manipulando meus arrays")
const avengers = [
    {
        "nome": "Homem de ferro",
        "genero": "M",
        "idade": 30,
        "habilidades": ["armadura integrada", "dinheiro", "inteligencia", "Iscas de holograma "]
    },

    {
        "nome": "Capitão América",
        "genero": "M",
        "idade": 84,
        "habilidades": ["honestidade", "escudo", "porrada"]
    },
    {
        "nome": "Capitã Marvel",
        "genero": "F",
        "idade": 45,
        "habilidades": ["porrada", "fogo", "super forte", "Invencivel", "voar", "destreza"]
    },
    {
        "nome": "Gavião Arqueiro",
        "genero": "M",
        "idade": 31,
        "habilidades": ["Atirador mestre", "Artista marcial mestre", "Lutador hábil", "Estrategista experiente", "Reflexos humanos no máximo"]

    },
    {
        "nome": "Viuva Negra",
        "genero": "F",
        "idade": 35,
        "habilidades": ["Sistema Imunológico Melhorado", "Fisiologia Geneticamente Modificad", "Espionagem Poliglota ", "Inteligência Superdotada", "Hacker Profissionalo"]

    }
];



    /* 
    LISTAR TODOS OS HERÓIS QUE SÃO HOMENS
    */

    const masculino = avengers.filter(item => item.genero == "M")
    const feminimo = avengers.filter(item => item.genero == "F")
    //console.log(masculino)
    /*
    LISTAR TODOS OS NOMES DO HÉROIS
    */
   let nomes = avengers.map(item => item.nome)

   /*
    RETORNAR NO ARRAY O NOME & E GENENO DOS HERÓIS
    O que preciso retornar?
   */
    //SOLUÇÃO 1
   //const nomes = avengers.map(item => [item.genero, item => item.nomes])


   //SOLUÇÃO 2

   const objetoDeHeroi = avengers.map(item => {
       return{

        nome:item.nome,
        genero: item.genero
       }
   });


   const totalIdade = avengers.reduce((total, item) => {
       return total + item.idade
   }, 0);
   //console.log(totalIdade)

   /* Listar um avenger que possua mais de 50 anos */

   const experiente = avengers.some((item)=> item.idade > 50 && item.genero === "M");
   console.log(experiente)

   /*Saber se todos os objetos do array possuem a habilidade porrada */
   const porrada = avengers.every(item => item.habilidades.includes("fogo"))
   console.log(porrada);

   /* Buscar um avenger do genero = F */
   const buscaEspecifica = avengers.find(item => item.genero == "M");
   console.log(buscaEspecifica)