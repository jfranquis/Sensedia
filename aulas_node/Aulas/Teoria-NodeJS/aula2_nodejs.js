/* 
Como funciona o NodeJS 
Event loop?
O código javascript do NodeJS é single thread, ou seja, apenas uma coisa pode ser executada por vez
Essa desvantagem reduz os problemas de simultaneidade por gerenciar apenas um processo, por 
exemplo;
O Javascript possui um conceito de eventos que é extremamente simples, porém é compilado para 
C++
Cada evento fica armazenado em uma fila (event queue)Event loop



Nesse meio tempo de execução temos:
→ Os eventos do javascripts (são denominados binds)
→ A camada de aplicação que manda a requisição
→ O motor V8 que executa o Javascript
→ A camada de transpilação de javascript para C++ 
→ Que executa então a partir daí a LibUv com foco em I/O assíncrono.

Ciclo de vida do Javascript
→ Todas as chamadas que dependem de interação com o mundo externo serão executadas em 
background
listarVeiculos()
database
Background (segundo plano)
A forma com que ele é escrito é diferente de como ele é executado nesse caso!

Explicando na prática:

Arrow functions
→ São menor verbosas;
→ é conhecida como "arrow" pela declaração "=>"
→ Simplifica o escopo de blocos de código;
→ Não precisa declarar function, nem return;







*/