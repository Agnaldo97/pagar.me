# Pagar.Me

> Esse projeto tem como finalidade criar novas transações e listar os recebíveis dos clientes

## O que foi feito:

Foi dividido em duas rotas os serviços (Private e Public). Para conseguir criar uma nova transação ou para listar os recebíveis,  é necessário anteriormente ter realizado o login e utilizar o token gerado (O mesmo expira a cada 30m).

Para testar a aplicação é simpes, mude o .env inserindo as informações do seu banco e rode o projeto (Mais para baixo há tópicos explicando como subir o banco localmente e executar o projeto), ao inicializar o projeto, é feito um sync para criação das tabelas no banco. Feito isso, basta seguir o fluxo:

Criar Cliente > Logar > Criar Transação > Listar Recebíveis

## Validações 

Ao criar um usuário ou criar uma nova transação, é feita algumas válidações (Se o usuário já possui cadastro, se o tipo do dado enviado está correto ...) Não foi mapeado todos os cenários de erros, apenas os que comprometem a integridade da transação.

## Endpoints:

* /api/public/client/create - POST
    * Exemplo de Body: 
    {
    	"name": "Agnaldo Rogerio",
    	"email" : "agnaldo@agnaldo",
    	"password": "pagarme"
    }
* /api/public/client/login - POST
    * Exemplo de Body: 
    {
    	"email" : "agnaldo@agnaldo",
    	"password": "pagarme"
    }
* /api/private/transactions - POST
    * Exemplo de Body: 
    {
      "value": 323.00,
      "description": "Guarda Chuva 2.0x",
      "paymentMethod": "debit_card",
      "cardNumber": 38979070,
      "nameClient": "Agnaldo Rogério",
      "emailClient": "agnaldo@agnaldo",
      "cvv": 321
    }
* /api/private/payables/available - GET

* /api/private/payables/waiting_funds - GET

## Exemplo Postman:

### Login:
![](/prints/login.jpeg)

### Nova Transação:
![](/prints/novaTransacao.jpeg)

### Waiting Funds:
![](/prints/espera.jpeg)

### Available:
![](/prints/disponiveis.jpeg)


## Instalar e Inicializar:

OS X & Linux:

```sh
npm install 
npm start
```

## Docker
Foi utilizado o Postgre para armazenar as informações. Para rodar localmente, basta executar os seguintes comandos:

```sh
cd db
docker-compose -f postgre.yml  up
```

