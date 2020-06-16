
# Projeto dos Aprendizes
  

* Versão do Ruby

    -  ``` .ruby version ```  


## Dependências do Programa

### Back-end / API


* Poke-Api-V2

	- GEM que realiza consultas na [PokéApi](https://github.com/rdavid1099/poke-api-v2)

* Jbuilder

	- Para construir API json com maior facilidade.

* Rack-cors
    
	- Permite configurara os acessos a API.
        
	- Configuração padrão na API []()
  
* Rack Attack

	- Protege a aplicação de ataques de negação de serviço etc

### Front-end / Site

* React

	- Biblioteca javascript para construção do site.

* Axios

	- Biblioteca para pegar os dados da API.

* Bootstrap

	- Para melhor estilização do site.

# Getting Starded

1. Criar e popular o Banco de Dados

  
    1.1. Cria o banco de dados da Aplicação

    -  ``` rails db:create ```

    1.2. Criando as tabelas do banco de dados.

    - ``` rails db:migrate``` 

    1.3. Pega os dados dos Tipos de Pokémons e adiciona ao banco de dados da Aplicação

    -  ``` rails db:populate:types ```

    1.4. Pega os dados dos Pokémon e adiciona ao Banco de Dados da Aplicação

    -  ``` rails db:populate:pokemons ```

_OBS: Esse processo pode demorar alguns segundos_

  

2. Fazer primeira consulta na API

-  ```  rails s ```

- Acesse [localhost:3000/api/v1/pokemon](localhost:3000/api/v1/pokemon).

A pagina deve retornar uma lista em JSON com todos os pokémons cadastrados no Banco de Dados.
Api está pronta para uso



3. Executando o servidor para o Front-end da Aplicação

    3.1. Acesse a pasta client

    - ```cd client ```

    3.2. Instale as dependências do Front-end

    - ```npm install ```

    3.3. Execute o servidor do Front-end

    - ```npm start ```

---


## Mais informações

* [TASKS]()

* [API]()

* [DATABASE]()

* [MODEL]()


---