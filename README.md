# Gauge

Os dados dos 3 arquivos json fornecidos foram inseridos no arquivo data.json para estarem disponíveis através de uma api REST com uso do json-server.

Para executar a aplicação deve-se nagevar até a pasta raiz do projeto e executar os seguintes comandos:
npm install -g bower
bower install
npm install

Para iniciar o json-server deve-se navegar até a pasta Gauge/json-server e executar o seguinte comando: 
json-server data.json -p 4000

Com o servidor online, dentro da pasta Gauge executar o comando:
gulp

Esperar a realização das tasks e por fim executar o comando:
http-server

A aplicação ficará disponível em: http://127.0.0.1:8080/app/#/ ou  http://127.0.0.1:8080/dist/#/, sendo uma a versão de produção e outra a de desenvolvimento

Pontos a melhorar:
- Não foram implementadas todas as funcionalidades exigidas pela tarefa;
- Layout da aplicação;
- Adicionar paginação na tabela;
- Implementar tudo o que foi pedido na terafa;
- Implementar maneira de remover o filtro uma vez que já aplicado;- 
- Remover as dependências não utilizadas;
- Remover o uso de rotas, o qual não é necessário para essa aplicação.
- Apesar de ser um problema simples, ele tem alguns pontos cruciais, como é o caso do cruzamento das informações entre marcas e usuários, uma melhor solução do que a implementada seria criar maps para os usuários e para as marcas de tal maneira que as listas seriam iteradas apenas 1 vez e não diversas vezes como está atualmente.
Exemplo:
var usersMap = {};
users.forEach (function (user){
  usersMap[user.id] = user;
});


Dificuldades encontradas:
- Falta de entendimento do que foi pedido, devido a maneira como está especificado no documento.
- Tempo curto devido a hora em que vi o email falando sobre a atividade.

Tempo total de execução do projeto (desde a leitura da especificaçã, até a publicação no github):
- 3 Horas
