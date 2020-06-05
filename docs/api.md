# API

Feita para criar as consultas entre o banco de dados e o front-end da Aplicação

  

## CONSULTAS

  

### Listagem de todos os pokémons

Listar todos os pokémons cadastrados no Banco de Dados mostrando nome e avatar.

  

*  [localhost:3000/api/v1/pokemon](localhost:3000/api/v1/pokemon)

  

_* PokemonController_
  

### Listagem de pokémons com Limite

Listar certa quantidade de pokémons cadastrados no Banco de Dados, em que _n_ deve ser subistituido pelo valor adequado

  

*  [localhost:3000/api/v1/pokemon?limit=n](localhost:3000/api/v1/pokemon?limit=n)

  

_* PokemonController_



### Listagem de pokémons apartir de certo numero de pokémons

Listar pokémons apartir de número determinado, por exemplo, apartir do 30º pokemon, ou seja, listará todos os pokémons do 30º para cima.

Para realizar a consulta, subtitua o _n_ para o número desejado

  

*  [localhost:3000/api/v1/pokemon?offset=n](localhost:3000/api/v1/pokemon?offset=n)

  

_* PokemonController_

  

### Listagem de pokémons por ordem crescente por atributo

Lista todos os pokémons os ordenando de forma crescente por order, name, weight ou height.

Basta colocar o nome do atributo desejado.

  

*  [localhost:3000/api/v1/pokemon?order=atributo](localhost:3000/api/v1/pokemon?order=atributo)

_* PokemonController_

  
  

### Mostrar um pokémon especifico

Mostra todos os dados de um determinado pokemon apartir do seu ID.

No end-point da URL, substitua ID: pelo ID do Pokemon correspondente. Caso o ID não seja encontrado no Banco de Dados, API retorna uma mensagem de ERRO.

  

*  [localhost:3000/api/v1/pokemon/id:](localhost:3000/api/v1/pokemon/)

_* PokemonController_

  

---

  

### Listagem de pokémons por Pesquisa.

Procura dentre os pokémons cadastrados no Banco de Dados cujo o name,weight ou height correspondem à a pesquisa realizada.

Para essa consulta, subistitua text para o que você o nome que deseja pesquisar

  

*  [localhost:3000/api/v1/search?q=text](localhost:3000/api/v1/search?q=text)

  

_* SearchController_
