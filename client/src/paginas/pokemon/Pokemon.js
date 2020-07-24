import React from 'react'

import API from '../../service/API'

import Info from './Info'
import NavBar from '../../component/NavBar'

export default class Pokemon extends React.Component
{
  state={
    name:'Pokedex',
    image:"https://img.icons8.com/officel/80/000000/pokedex.png"
  }


  image = null;
  color = null;

  async componentDidMount()
  {
    let index = this.props.match.params.pokemonIndex;

    await API.getPokemon(index).then((res)=>{
      this.setState({name:res.name});
      this.image=res.avatar;
      this.color=res.types[0].color;
    });

  }
  render()
  {

    return(
      <>
      <NavBar text={this.state.name} image={this.state.image}
      style={{padding:'24px'}} />
      <div className='container'>
        <Info
        pokemonIndex={this.props.match.params.pokemonIndex} options={this.props.location.search}/>
      </div>
      </>
    );
  }
}