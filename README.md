# Projeto dos Aprendizes
  

* Versão do Ruby

    -  ``` .ruby version ```  


* Dependências do Programa

    - Poke-Api-V2

        - GEM que realiza consultas na [PokéApi](https://github.com/rdavid1099/poke-api-v2)

    - Jbuilder

        - Para construir API json com maior facilidade.

  
  

# Getting Starded

1. Criar e popular o Banco de Dados

  
    1.1. Cria o banco de dados para a Aplicação

    -  ``` ruby rails db:setup ```


    1.2. Pega os dados dos Tipos de Pokémons e adiciona ao banco de dados da Aplicação

    -  ``` ruby rails db:populate:types ```

    1.3. Pega os dados dos Pokémon e adiciona ao Banco de Dados da Aplicação

    -  ``` ruby rails db:populate:pokemons ```

_OBS: Esse processo pode demorar alguns segundos_

  

2. Fazer primeira consulta na API

-  ``` ruby rails s ```

- Acesse [localhost:3000/api/v1/pokemon](localhost:3000/api/v1/pokemon).

A pagina deve retornar uma lista em JSON com todos os pokémons cadastrados no Banco de Dados.
Api está pronta para uso

---


## Mais informações

* [TASKS]()

* [API]()

* [DATABASE]()

* [MODEL]()


---