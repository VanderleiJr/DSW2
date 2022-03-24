# Desenvolvimento de Software para WEB 2
> Projeto desenvolvido para a disciplina de DSW2 2021/2, consiste em um marketplace de compra e venda de jogos, podendo ser adaptado para qualquer tipo(s) de produtos.

## Requisitos
* **R01**.	CRUD de Clientes (requer login do próprio usuário). O cadastro dos usuários requerem CPF(chave primária), email, senha, nome, telefone, sexo e ano de nascimento.
* **R02**.	CRUD de Empresas (requer login da própria empresa). O cadastro das empresas requerem CNPJ(chave primária), email, nome, senha e uma descrição da empresa.
* **R03**. 	Cadastro de Jogos no Banco de Dados (requer login da empresa). Após logar-se, a empresa pode cadastrar um produto completo no banco de dados, facilitando o gerenciamento de estoque seu e de outras empresas. Os cadastros dos jogos requerem obrigatoriamente um código para o jogo(chave primária), nome, região, console, ano de lançamento, descrição e preço.
* **R04**.	Cadastro de Jogos nos estoques (requer login da empresa). Cada empresa, após registrar um jogo ao banco de dados pode registrar a quantidade de estoque que tem de um determinado jogo, assim, fazendo com que apareça na lista do Marketplace
* **R05**. 	Lista de todos os produtos sendo vendidos com/sem estoque pelas empresas naquele momento (não requer login).
* **R06**.	Lista de todas as empresas que vendem um determinado produto (não requer login).
* **R07**.	Lista de todos os produtos que uma determinada empresa vende (não requer login).
* **R08**.	Realizar ordens de compra de produtos caso haja estoque na empresa (requer login de usuário). Isso altera diretamente o Banco de Dados e no estoque das empresas. Ou seja, um usuário não consegue realizar um pedido caso a empresa não tenha estoque necessário para atendê-lo.
* **R09**.	Lista de todos os pedidos realizados pelo cliente (requer login de usuário).
* **R10**.	Lista de todos os pedidos recebidos sendo empresa (requer login de empresa).
* **R11**.	Lista de todos os produtos em estoque sendo empresa (requer login de empresa).
* **R12**. 	Pedidos detalhados com mais informações, além do dia que o pedido foi realizado. (requer login de usuário ou empresa)

## Backend
* Versão 1.0 - Desenvolvido em Python + FastAPI, utilizando SQLAlchemy e JWT

## Frontend
* Versão 1.0 - Desenvolvido em HTML e JavaScript (com Axios)

### Como clonar o repositório
```bash
git clone --recurse-submodules --remote-submodules https://github.com/VanderleiJr/DSW2.git
```
