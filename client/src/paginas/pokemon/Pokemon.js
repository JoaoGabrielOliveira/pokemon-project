import React from 'react'

import Info from './Info'
import NavBar from '../NavBar'

export default class Pokemon extends React.Component
{
  render()
  {
    return(
      <>
      <NavBar image="https://img.icons8.com/officel/80/000000/pokedex.png" style={{padding:'24px'}} />
      <div className='container'>
        <Info pokemonIndex={this.props.match.params.pokemonIndex} options={this.props.location.search}/>
      </div>
      </>
    );
  }
}