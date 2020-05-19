# Projeto dos Aprendizes

* Versão do Ruby
.ruby version

* Dependencias do Programa
    - Poke-Api-V2
        - GEM que realiza consultas na [PokéApi](https://github.com/rdavid1099/poke-api-v2)
    - Jbuilder 
        - Para construir API json com maior facilidade.

# Getting Starded
 * Criar e popular o Banco de Dados
    - rails db:setup
    - rails db:populate:pokemons
_OBS: Esse processo pode demorar alguns segundos_

 * Verifique se os pokemons foram cadastrados
	- rails c
	- Pokemon.all

 * Fazer primeira consulta na API
	- rails s
	- Acesse o link: [localhost:3000/api/v1/pokemon](localhost:3000/api/v1/pokemon)
	Caso retorne um JSON com todos os pokemons cadastrados, sua API está pronta.

# API
Feita para criar as consultas entre o banco de dados e o front-end da Aplicação

## CONSULTAS

### Listagem de todos os Pokemons
Listar todos os pokemons cadastrados no Banco de Dados mostrando nome e avatar.
 - [localhost:3000/api/v1/pokemon](localhost:3000/api/v1/pokemon)

_* PokemonController_

---

### Listagem de pokemons com Limite
Listar certa quantidade de pokemons cadastrados no Banco de Dados, em que 'n' deve ser subistituido pelo valor adequado
- [localhost:3000/api/v1/pokemon?limit=n](localhost:3000/api/v1/pokemon?limit=n)

_* PokemonController_

---
### Listagem de pokemons apartir de certo numero de pokemons
Listar pokemons apartir de número determinado, por exemplo, apartir do 30º pokemon, ou seja, listará todos os pokemons do 30º para cima.
Para realizar a consulta, subtitua o [n] para o número desejado

- [localhost:3000/api/v1/pokemon?offset=n](localhost:3000/api/v1/pokemon?offset=n)

_* PokemonController_

---
### Listagem de pokemons por ordem crescente por atributo
Lista todos os pokemons os ordernando de forma crescente por order, name, weight ou height.
Basta colocar o nome do atributo desejado.
    - [localhost:3000/api/v1/pokemon?order=atributo](localhost:3000/api/v1/pokemon?order=atributo)
    
_* PokemonController_

---

### Mostrar um pokemom
Mostra todos os dados de um determinado pokemon apartir do seu ID.
No end-point da URL, subtitua ID: pelo ID do Pokemon corespondente. Caso o ID não seja encontrado no Banco de Dados, API retorna uma mensagem de ERRO.

- [localhost:3000/api/v1/pokemon/id:](localhost:3000/api/v1/pokemon/)
	
_* PokemonController_

---

### Listagem de pokemons por Pesquisa.
Procura dentre os pokemons cadastrados no Banco de Dados cujo o name,weight ou height correspondem à a pesquisa realizada.
Para essa consulta, subistitua text para o que você o nome que deseja pesquisar
- [localhost:3000/api/v1/search?q=text](localhost:3000/api/v1/search?q=text)

_* SearchController_

---
---

## TASKS
Códigos criados pelos pelo Rails que execulta uma ou mais tarefa ou código expecifico antes da execulção do programa.
  Material de Apoio: [Documentação oficial](https://guides.rubyonrails.org/command_line.html#custom-rake-tasks) | [ Criando Task](https://medium.com/@breim/criando-uma-rake-task-como-servi%C3%A7o-3b87103fb2bd) |

- **rails db:populate:pokemon**
     Faz uma requesição na [PokeAPI](https://pokeapi.co/docs/v2.html), pegando todos os 151 pokemons da primeira geração, os envia para um array do MODEL Pokemon e salvandos-os na tabela pokemons 

---
---

## MODEL
### Pokemon {Mostrar DER}

-------------------------
---
## BANCO DE DADOS
### PRO_DEVELOMENT
Banco para Ambiente de Desenvolvimento.
_Segue as configurações padrões do Ruby on Rails._

### PRO_TEST
Banco para Ambiente de Teste.
_Segue as configurações padrões do Ruby on Rails._