# Gauge

Os dados dos 3 arquivos json fornecidos foram inseridos no arquivo data.json para estarem disponíveis através de uma api REST com uso do json-server.
Para iniciar o json-server deve-se navegar até a pasta Gauge/json-server e executar o seguinte comando: 
json-server data.json -p 4000

Uma vez que o servidor esteja online, dentro da pasta Gauge executar os comandos:
gulp

Esperar a realização das tasks e por fim executar o comando:
http-server

A aplicação ficará disponível em: http://127.0.0.1:8080/dist/#/