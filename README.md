# NODEJS - Ambiente e Conceitos

## O que é Node.js?
* Javascript no back-end;
  * Não lidamos com eventos do usuário final
  * Rotas e integrações
* Plataforma (não linguagem)
* Construída em cima da V8
* Comparável a PHP / Ruby / Python / Go

## O que é o NPM?
* Instalar bibliotecas de terceiros
* Fornecer bibliotecas
* Comparáveis:
  * Composer do PHP
  * Gems do Ruby
  * PIP do Python

## Características do Node
* Arquitetura Event-loop
  * Baseada em eventos (Rotas na maioria das vezes)
  * Call Stack
* Node single-thread
  * C++ por trás com libuv
  * Background threads
* Non-blocking I/O

## Frameworks
* ExpressJS como base
  * Sem opinião (não tem uma estrutura fechada)
  * Ótimo para iniciar
  * Micro-serviços
* Frameworks opinados
  * AdonisJS
  * NestJS

## API REST
### Como funciona?
* Fluxo de requisição e resposta
  * Requisição feita por um cliente
  * Resposta retornada através de uma estrutura de dados
  * Cliente recebe resposta e processa resultado
* As rotas utilizam métodos HTTP:
  * `GET`  http://minhaapi.com/users (Buscar alguma informação na rota users)
  * `POST` http://minhaapi.com/users (Criar alguma informação na rota users)
  * `PUT`  http://minhaapi.com/users/1 (Atualizar alguma informação na rota user de parâmetro 1)
  * `DELETE`  http://minhaapi.com/users/1 (Deletar alguma informação na rota user de parâmetro 1)
* Benefícios
  * Múltiplos clientes (front-end), mesmo back-end
  * Protocolo de comunicação padronizada
    * Mesta estrutura para web / mobile / API pública
    * Comunicação com serviços externos

![Conteúdo da requisição](/wtf/conteudo_requisicao.png)

O corpo da requisição é utilizado somente em `POST` e `PUT` (pq são informações muito mais detalhadas)
Os Headers são informações adicionais que não tem haver com o conteúdo daquela requisição. Utilizado para enviar qualquer tipo de informação adicional. Ex: Autenticação...

## HTTP codes
* 1xx: Informational
* 2xx: Success
  * 200: SUCCESS
  * 201: CREATED
* 3xx: Redirection
  * 301: MOVED PERMANENTLY
  * 302: MOVED
* 4xx: Client Error
  * 400: BAD REQUEST
  * 401: UNAUTHORIZED
  * 404: NOT FOUND
* 5xx: Server Error
  * 500: INTERNAL SERVER ERROR

