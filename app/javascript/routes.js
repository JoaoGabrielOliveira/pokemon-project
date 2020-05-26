import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TelaPrincipal from './paginas/principal'
import TelaPokedex from './paginas/pokedex'
import TelaPokemon from './paginas/pokemon'

const Rotas = () => {
    return (
        <Switch>
            <Route exact path='/' component={TelaPrincipal} />
            <Route exact path='/pokedex' component={TelaPokedex} />
            <Route exact path='/pokemon/:id' component={TelaPokemon} />
        </Switch>
    )
}

export default Rotas;