
# Projeto dos Aprendizes
  

* Versão do Ruby

    -  ``` .ruby version ```  


## Dependências do Programa

### Back-end / API

* Ruby on Rails

	- A API foi construida através do Framework da linguagem Ruby, _Ruby on Rails_

* Poke-Api-V2

	- GEM que realiza consultas na [PokéApi](https://github.com/rdavid1099/poke-api-v2)

* Jbuilder

	- Para construir API json com maior facilidade.

* Rack-cors
    
	- Permite configurar os acessos a API.
        
	- Configuração padrão na [API](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/api.md)
  
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

  
    1.1. Cria o banco de dados da Aplicação, assim como suas tabelas [Documentação dessa Task](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/tasks.md#markdown-header-setup)

    -  ``` ruby rails db:setup ```

    1.2. Populando tabelas com os Pokemons e informações relacionadas [Documentação dessa Task](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/tasks.md#markdown-header-populate)

    - ``` ruby rails db:populate ```

_OBS: Esse processo pode demorar alguns segundos_

  

2. Fazer primeira consulta na API

    3.1. Acesse a pasta server, onde está aplicação Rails

    - ```cd server ```

    2.1. Instale todas as Dependências/**Gems** da API 

    - ``` ruby bundle install```

    2.2. Execute o comando para Rodar a **API**
    
    -  ``` ruby  rails s ```

- Acesse [localhost:3000/api/v1/pokemon](localhost:3000/api/v1/pokemon).

A pagina deve retornar uma lista em JSON com todos os pokémons cadastrados no Banco de Dados.
Api está pronta para uso



3. Executando o servidor para o Front-end da Aplicação

    3.1. Acesse a pasta client, onde está aplicação React

    - ```cd client ```

    3.2. Instale as dependências do Front-end

    - ```npm install ```

    3.3. Execute o servidor do Front-end

    - ```npm start ```

---


## Mais informações

* [TASKS](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/tasks.md)

* [API](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/api.md)

* [DATABASE](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/db/database.md)

* [MODEL](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/db/model.md)


---