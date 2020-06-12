import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//import { App } from './pokedex_React/src/App';
import { PokemonCard } from './component/layout/pokemon/PokemonCard';
import { PokemonList } from './component/layout/pokemon/PokemonList'
import { Pokemon } from './component/layout/pokemon/Pokemon';


const LANGUAGES = {
    pt: {
        urlLang: 'pt',
        code: 'pt-BR'
    },
    en: {
        urlLang: 'en',
        code: 'en-US'
    }
}


const MultiLanguageRoute = (props) => {
    const defaultLanguage = LANGUAGES.pt.urlLang
    const hasLang = props.computedMatch.params.lang
    const is404Page = props.path
    const isBasePathWithoutLang = props.path === "/"

    if(isBasePathWithoutLang)  return  <Redirect to={`/${defaultLanguage}`} />
    if(!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />

    return <Route {...props} />    
}

export const Routes = () => {
    return (
        <Switch>
            <MultiLanguageRoute exact path="/"/>
            <MultiLanguageRoute exact path="/:lang" component={Pokemon}/>
            <MultiLanguageRoute exact path="/:lang/posts" component={PokemonCard}/>
            <MultiLanguageRoute exact path="/:lang/posts" component={PokemonList}/>
            <MultiLanguageRoute  exact path="*/:lang" component={Pokemon}/>
        </Switch>
    )
}
