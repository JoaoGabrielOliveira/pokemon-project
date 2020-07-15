## TASKS

Códigos criados pelos pelo Rails que execulta uma ou mais tarefa ou código expecifico antes da execulção do programa.


Material de Apoio: [Documentação oficial](https://guides.rubyonrails.org/command_line.html#custom-rake-tasks) | [ Criando Task](https://medium.com/@breim/criando-uma-rake-task-como-servi%C3%A7o-3b87103fb2bd) |



#### Setup

**Deleta** qualquer Banco de Dados relacionado com a aplicação. **Cria**/**Re-cria** novos bancos. Executa as **Migrações**, criando as tabelas.

- ``` ruby rails db:setup ```



#### Populate

Executa todas as tasks que populam o **Banco de Dados**, sendo elas, [Popular PokemonTypes](#markdown-header-popular-pokemontypes), [Popular EggGroups](#markdown-header-popular-egggroup) e [Popular Pokemons](#markdown-header-popular-pokémons) de forma unica, exucutando dos essas tasks em um único comando.

- ``` ruby rails db:populate ```



#### Popular PokemonTypes

Faz uma requisição na [PokeAPI](https://pokeapi.co/docs/v2#types), pegando todos os **Tipos de pokémons** da primeira geração, os envia para um array do **MODEL** [PokemonType](#markdown-header-pokemontypes) e salvando-os no banco de dados da Aplicação

-  ``` ruby  rails db:populate:types ```



### Alterar cores de PokemonTypes

_**OBS**: Antes de executar esse comando, é necessário que a MODEL PokemonType esteja populada, através execução da task[Popular PokemonTypes](#markdown-header-popular-pokemontypes), se não esse não rodará._

Altera a cor padrão de cada PokemonType para a cor correspondente aos seu Type.

- ``` ruby rails db:populate:types:color ```

_**PS**: Essa task é executada automaticamente ao fim da task Popular PokemonTypes_



### Popular EggGroups

Faz uma requisição na [PokeAPI](https://pokeapi.co/docs/v2#egg-groups), pegando todos os **Gruppo de ovos** da primeira geração, os envia para um array do **MODEL** [EggGroup](#markdown-header-egggroup) e salvando-os no banco de dados da Aplicação

- ``` ruby rails db:populate:egg ```



#### Popular Pokémons

Faz uma requisição na [PokeAPI](https://pokeapi.co/docs/v2#pokemon-section), pegando todos os 151 **Pokémons da primeira geração**, os envia para um array do **MODEL** [Pokémon](https://bitbucket.org/JoaoGabrielOliveira/projetoaprendizes/src/master/docs/db/model.md#markdown-header-pokemon) e salvando-os no banco de dados da Aplicação

-  ``` ruby rails db:populate:pokemon ```
