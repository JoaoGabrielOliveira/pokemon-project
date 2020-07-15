# MODEL

MODEL é criado pelo Ruby on Rails. Sua função é criar um objeto/classe semelhante é a tabela criado no Banco de Dado.
Por exemplo, ao criar uma nova model, é também criado uma nova tabela de mesmo nome, assim, facilitando o resgate de informações do Banco e a manipulação pela API.



## Pokémon

Em Pokemon estão os principais dados dos Pokémons, assim como alguns relacionamentos.

**DER**
![ImagemcomDERdoMODELPokemon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_Pokemon.png)



## PokemonType

Em PokemonType é onde fica amazenado todos os _Tipos de Pokémons_ da primeira geração.

**DER**
![ImagemcomDERdoMODELPokemon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_Type.png)



## EggGroup

Em **EggGroup** é onde fica amazenado todos os _Grupos de Ovos_ dos Pokémons da primeira geração.

**DER**
![ImagemcomDERdoMODELPokemon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_EggGroup.png)



## Diagramas de Entidade-Relacionamento / ER Diagram

### Diagrama Completo

![ImagemcomDERdoMODELPokemon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_completo.png)



### DER separados

|Pokemon|Type|EggGropup|
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![ImagemcomDERdoMODELPokemon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_Pokemon.png)|![ImagemcomDERdoMODELType](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_Type.png)|![ImagemcomDERdoMODELPokemon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_EggGroup.png)|


### DER Tabelas JOIN

Tabelas Auxiliares que fazem a relação de uma tabela com outra


| Pokemon para PokemonType | Pokemon para EggGroup |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![PokemonToPokemonType](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_PokemonToTypes.png) | ![PokemonToPokemonType](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/raw/87ed60e911a8b2c7293acfadeca23e3cb7e1ea7b/docs/db/DER_PokemonToEggGroup.png) |
    