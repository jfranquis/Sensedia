// BOOTCAMP NODEJS CAMPINAS TECH TALENTS -  Share RH e Sensedia
/*   NodeJs = Plataforma para construção de plicação backend utilizando a lingua de programação JavaScript ou seja voce escreve os programas em JS e ele será
 compilado e interpretado prelo motor V8 javascript engine.

 NodeJs é uma plataformasegura, devido a tecnologia open source.

 -> VANTAGENS
    1 - Pode utilizar javascript para programar na parte de front e backend;

    2 - É extremamente leve;

    3 - Alta capacidade para escabilidade 
        3.1-Escalavel é um sistema que permite ser replicado de forma rápida.

    4- Flexivele com um dos maiores repositorios de aplicações do mundo (NPM) 
       4.1-Muitos recursos tanto em front como backend

    5- Produtividade.

-> CONCORRENTE DO NODEJS
    1 - GO (LINGUAGEM DE PROGRAMAÇÃO +NOVA E FUNCIONAL) = https://golang.org/

    2 - ELIXIR (LINGUAGEM PARA PROGRAMAÇÃO FUNCIONAL, AINDA EM CRESCIMENTO) = https://elixir-lang.org/
        2.1 Elixir é uma linguagem dinâmica e funcional para a construção de aplicativos escaláveis ​​e de fácil manutenção.
        Elixir aproveita o Erlang VM, conhecido por executar sistemas de baixa latência, distribuídos e tolerantes a falhas. 
        O Elixir é usado com sucesso em desenvolvimento web, software embutido, ingestão de dados e processamento de multimídia em uma ampla gama de indústrias.

    3 - SCALA (PRODUZIDO EM JAVA - PARADGMA DE PROGRAMAÇÃO ) = https://www.scala-lang.org/
        3.1 Scala combina programação orientada a objetos e funcional em uma linguagem concisa e de alto nível. 
        Os tipos estáticos do Scala ajudam a evitar bugs em aplicativos complexos e seus tempos de execução JVM e 
        JavaScript permitem construir sistemas de alto desempenho com fácil acesso a enormes ecossistemas de bibliotecas. 

-> EMPRESAS QUE UTILIZAM NODEJS.
    Sensedia, Google,PayPal, Linkedin, NetFlix,Yahoo,IBM, GetNet.

-> CASOS DE USO
    1 Aplicação em tempo real: Chat, Streaming
    2 Ambiente escalaveis: Grande numero de conexões concorrentes. Performace maior,custo de consumo baixo.
    3 Provas de conceito: Por ter um background de uma linguagem bastante conhecida, o Node Js possibilita criar prototipos de APIs e serviços de bakcend com rapidez

-> GERENCIAMENTO DE PACOTES
    Os gerenciadores de pacotes são ferramentas que auxiliam a criação de aplicações web por meio da instalação de pacotes de forma automática. 
    Existem diferentes alternativas disponíveis no mercado que desenvolvem essa tarefa.
    Usado para gerenicar dependecias do projeto
    É identificado através do arquivo package.json
    É usado para executar scripts 
    
-> COMO UM GERENCIADO DE PACOTE FUNCIONA:
    1. É um local pra publicar projetos nodejs de codigo aberto
    2. isso significa que essa plataforma online permite que qualquer pessoa ou empresa posso publicar ferramenteas escritas em javascritp;
    3. Essa ferramentas tempossibilidade de operar atraves de linha de comando para ajudar a interagir em plataforma online, como navegadores e servidores;

-> NPM: É um gerenciador de pacotes para a linguagem de programação JavaScript. npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para 
        desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.
        criado em 2009 reposito ofical do node e em 2016 foi criado o yarn.

-> YARN: O Yarn é um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação. O que reforça essa ideia é o fato de a ferramenta utilizar 
        também os bancos de dados tanto do NPM quanto do Bower, outro importante e conhecido gerenciador de pacotes de códigos. Oferece mais velocidade, estabilidade 
        e segurança na construção de aplicações web.


package.json:escopo do arquivo.
1. Nome projeto
2. Controle da versão doprojeto
3. o Arquivo de referencia "bootstrap"
4. Scripts que podem automatizar o projeto
5. Palavras chaves para referencia no repositorio oficial

package-lock.json
Afinal, o que ele faz?
- Garante que a instalação das dependicias sejacompativeis com a versão do seu projeto;
- E extremaimportancia manter o historico dop packge-lock.json no controle de versão;
- Uma versão de projeto dividida em 3 partes: Major (principal), minor (menor) e patch, correções.
    Ex "express""4.17.1" ->4 = Major, 17 = Minor , 1 Patch
- Isso se chama versionamento semântico
- O traz uma vasta lista de todas dependencias listadas no packagee.json,
alem de especificar a versão exata possui um hash especifico que verifica e valida a integridade do modulos e pacotes necessários


- INSTALANDO NPM 
PS D:\Sensedia\Projeto> node -v
v14.16.0
PS D:\Sensedia\Projeto> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (projeto) curso-ctt-instalando-npm
version: (1.0.0)
description: Aprendendo a instalar o npm
entry point: (index.js)
test command:
git repository:
keywords: curso
author: Janaina Franquis

- INSTALANDO DEPENDENCIAS
    PS D:\Sensedia\Projeto> npm install
    npm notice created a lockfile as package-lock.json. You should commit this file.
    npm WARN curso-ctt-instalando-npm@1.0.0 No repository field.
    up to date in 1.171s
f   ound 0 vulnerabilities

- INSTALANDO DO EXPRESS
    https://www.npmjs.com/package/express
    PS D:\Sensedia\Projeto> npm install express
    npm WARN curso-ctt-instalando-npm@1.0.0 No repository field.

    + express@4.17.1
    added 50 packages from 37 contributors and audited 50 packages in 3.552s
    found 0 vulnerabilities

- COMANDOS QUE PODEM SER EXECUTADOS
PS D:\Sensedia\Projeto> npm
Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, fund, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    C:\Users\jfranquis\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.14.11 C:\Program Files\nodejs\node_modules\npm

- PACOTE QUE AUXILIA NO DESENVOLVIMENTO: NODEMON
PS D:\Sensedia\Projeto> npm install -g nodemon
C:\Users\jfranquis\AppData\Roaming\npm\nodemon -> C:\Users\jfranquis\AppData\Roaming\npm\node_modules\nodemon\bin\nodemon.js

> nodemon@2.0.7 postinstall C:\Users\jfranquis\AppData\Roaming\npm\node_modules\nodemon
> node bin/postinstall || exit 0

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.1 (node_modules\nodemon\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ nodemon@2.0.7
added 119 packages from 53 contributors in 5.103s

- RODAR O PROJETO:
PS D:\Sensedia\Projeto> node index.js
Hello World 2

PS D:\Sensedia\Projeto> npm run dev
> curso-ctt-instalando-npm@1.0.0 dev D:\Sensedia\Projeto
> nodemon index.js
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node index.js`
Hello World 2
[nodemon] clean exit - waiting for changes before restart

PS D:\Sensedia\Projeto> nodemon index.js
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Hello World 2
[nodemon] clean exit - waiting for changes before restart
























*/