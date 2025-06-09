# DesafioHelpDeskFront - Gabriel de Moura Schramm

Este projeto de automação foi desenvolvido utilizando Cypress para os testes e Allure report para os relatórios. 

## Ferramentas utilizadas no projeto
- Linguagem JavaScript
- Node.js para instalações
- Cypress para testes API
- Allure report para relatórios

## Como executar
Para rodar os testes é preciso instalar todas as dependencias e digitar "npm run test:allure" na pasta do projeto, rodará os testes e gerará o relatório do allure.

É possível executar os testes manualmente por spec acessando a interface do Cypress utilizando o comando "npx cypress open" e acessando a opção de testes e2e.

## Bugs e Melhorias

Durante a criação do projeto foram encontrados Bugs e espaços para melhorias tanto na aplicação quanto na documentação:
- É possível fazer login com qualquer senha desde que o e-mail esteja correto.
- API de registro está sendo possível registrar email sem arroba e nome somente com números.
- Na tela de adicionar ticket o campo e-mail está com uma descrição de "name", com mais investigação foi possível constatar que a chamada para criação de ticket requer o id do usuário e uma descrição porém na interface é solicitado o e-mail e a descrição não sendo possível criar ticket pelo front.
- Ao tentar criar usuários com duplicidade um erro acontece porém não há informação na tela informando esse erro.
