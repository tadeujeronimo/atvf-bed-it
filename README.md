# atvf-bed-it

Atividade Final do curso de Back-end Development da iTalents, onde desenvolvemos um Projeto Express CRUD completo de uma pizzaria.

Código desenvolvido em Javascript
<!-- ![NodeJS](https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg "NodeJS") -->
<img src="https://www.opus-software.com.br/wp-content/uploads/2018/09/nodejs.jpg" height="200">

## Instalação

1. baixe todo o código
2. abra o terminal do VS Code
3. execute: npm i
4. rode usando: npm run start

## Documentação da API

- Swagger UI: http://localhost:3000/docs/api-docs
- Arquivo OpenAPI: `swagger.json`
- Coleção Hoppscotch: `Hoppscotch/hoppscotch-collection_Pizzaria.json`
- Ambiente Hoppscotch: `Hoppscotch/hoppscotch-environment_Pizzaria.json`

## Endpoints

Todos os endpoints da API estão listados abaixo.

Observação:
- Endpoints com cadeado exigem token JWT no header Authorization.
- Formato do header: Bearer <token>

### Auth

| Método | Endpoint      | Auth | Descrição           |
| :----- | :------------ | :--- | :------------------- |
| POST   | /auth/login   | Não  | Autenticar usuário   |

### Usuário

| Método | Endpoint                     | Auth | Descrição                        |
| :----- | :--------------------------- | :--- | :-------------------------------- |
| GET    | /usuario/findById/:id        | Sim  | Buscar usuário por id             |
| GET    | /usuario/findAll             | Sim  | Listar usuários (com paginação)   |
| POST   | /usuario/create              | Não  | Criar usuário                     |
| POST   | /usuario/addAddress/:id      | Sim  | Adicionar endereço ao usuário     |
| POST   | /usuario/addFavPizza/:id     | Sim  | Adicionar pizza favorita          |
| PUT    | /usuario/update/:id          | Sim  | Atualizar usuário                 |
| DELETE | /usuario/remove/:id          | Sim  | Remover usuário                   |
| DELETE | /usuario/removeAddress       | Sim  | Remover endereço do usuário       |
| DELETE | /usuario/removeFavPizza/:id  | Sim  | Remover pizza favorita            |

### Pizza

| Método | Endpoint                    | Auth | Descrição                        |
| :----- | :-------------------------- | :--- | :-------------------------------- |
| GET    | /pizza/find/:id             | Sim  | Buscar pizza por id               |
| GET    | /pizza/findAll              | Sim  | Listar pizzas (com paginação)     |
| POST   | /pizza/create               | Sim  | Criar pizza                       |
| POST   | /pizza/addCategoria/:id     | Sim  | Vincular categoria a pizza        |
| PUT    | /pizza/update/:id           | Sim  | Atualizar pizza                   |
| DELETE | /pizza/delete/:id           | Sim  | Remover pizza                     |
| DELETE | /pizza/removeCategoria/:id  | Sim  | Remover categoria da pizza        |

### Categoria

| Método | Endpoint                | Auth | Descrição                         |
| :----- | :---------------------- | :--- | :--------------------------------- |
| GET    | /categoria/find/:id     | Sim  | Buscar categoria por id            |
| GET    | /categoria/findAll      | Sim  | Listar categorias (com paginação)  |
| POST   | /categoria/create       | Sim  | Criar categoria                    |
| PUT    | /categoria/update/:id   | Sim  | Atualizar categoria                |
| DELETE | /categoria/delete/:id   | Sim  | Remover categoria                  |

### Carrinho

| Método | Endpoint                | Auth | Descrição                         |
| :----- | :---------------------- | :--- | :--------------------------------- |
| GET    | /carrinho/find/:id      | Sim  | Buscar carrinho por id             |
| GET    | /carrinho/findAll       | Sim  | Listar carrinhos (com paginação)   |
| POST   | /carrinho/create        | Sim  | Criar carrinho                     |
| PUT    | /carrinho/update/:id    | Sim  | Atualizar carrinho                 |
| DELETE | /carrinho/delete/:id    | Sim  | Remover carrinho                   |

### Pedido

| Método | Endpoint                    | Auth | Descrição                         |
| :----- | :-------------------------- | :--- | :--------------------------------- |
| GET    | /pedido/find/:id            | Sim  | Buscar pedido por id               |
| GET    | /pedido/findAll             | Sim  | Listar pedidos (com paginação)     |
| POST   | /pedido/create              | Sim  | Criar pedido                       |
| PATCH  | /pedido/updateStatus/:id    | Sim  | Atualizar status do pedido         |
| DELETE | /pedido/delete/:id          | Sim  | Remover pedido                     |

## Contato
- Email: [tadeus.jeronimo@gmail.com](mailto:tadeus.jeronimo@gmail.com)
