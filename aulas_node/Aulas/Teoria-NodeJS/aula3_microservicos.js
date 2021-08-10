/*

Microserviço
→ É uma abordagem para construir aplicações;
→ É uma forma de decompor a aplicação e especializar ela em uma única responsabilidade;
→ Isso garante que os serviços possam funcionar ou falhar sem comprometer os demais.

O que é uma API?
→ Application Programing Interface;
→ Uma API tem função de estabelecer comunicação entre uma, duas ou mais aplicações para que
  funcionem simultaneamente;
→ Também servem para conectar serviços terceiros, como e-commerce, redes sociais ou qualquer 
  tipo de software terceiro;
→ Quando falamos em “Rest API”, estamos falando de uma API que segue os padrões da arquitetura
  REST, seguindo 6 regras;


Client-Server (cliente-servidor)
É a separação entre as responsabilidades do clliente x servidor.

Stateless (sem estado)
Significa que toda comunicação entre servidores deve ser independente, onde todos os recursos
sejam totalmente individuais ao serviço. Isso garante que a aplicação possa ser escalável para
suportar grandes volumes de informações/transações.

Cacheable (cacheavel)
Isso garante a melhora de eficiência, pois elimina interações desnecessárias, melhora a
escalabilidade e diminui latência entre o grande número de requisições.

Uniform interface (interface uniforme)
Isso simplifica a arquitetura, todos os componentes seguem as mesmas regras para se comunicarem
e garante que os diferentes componentes do sistema mantenham o mesmo estado de comunicação

Code on demand (Código sob demanda)
O código pode ser baixado para estender a funcionalidade do cliente. No entanto, isso é opcional
porque o cliente pode não conseguir fazer o download ou executar esse código e, portanto, um
componente REST não pode depender de sua execução.

Layered system (sistema de camadas)
Os componentes individuais não podem ver além da camada imediata de interação, para garantir que
os componentes sejam independentes e extensíveis.

Payload
→ É conhecido como "carga paga" ou "conteúdo que vale a pena";
→ É o dado que realmente interessa pra nós ao consultar uma API, sem cabeçalhos e informações
complementares.

Endpoint
→ É um ponto de comunicação de umaaplicação.
→ Significa dentro do contexto de um microserviço que você terá uma url para acessar um recurso.
    Exemplo: https://swapi.dev/api/planets/1

O que éo Express.js?
Express.js
-> É um framework criado em 2010
→ O Express.js é um Framework rápido e um dos mais utilizados em conjunto com o Node.js;
→ Muito presente nas empresas quanto na comunidade open source;
→ Facilita a criação de aplicações utilizando o Node em conjunto com o Javascript;
→ Possui sistema de roteamento;
→ Tratamento de exceções dentro de aplicação;
→ Pode trabalhar com o conceito RESTful;
→ Boa parte dos frameworks de mercado possuem implementação baseada sob o Express;


Frameworks que usam Express.js
→ Dinoloop (Rest API application)
→ Expressive tea (framework modular)
→ Locomotive.js (MVC Framework)
→ Sails.js (MVC framework)
→ Nest.js (Framework modular em ts)



*/
