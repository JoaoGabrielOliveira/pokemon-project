import React, { Component } from 'react'
import Axios from 'axios';
  
const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

  export default class Pokemon extends Component {
    
   
    
    state = {
      name: '',
      pokemonIndex: '',
      imageUrl: '',
      types: [],
      statTitleWidth: 3,
      statBarWidth: 9,
      height: '',
      weight: '',
      eggGroups: '',
      catchRate: '',
      abilities: '',
      genderRatioMale: '',
      genderRatioFemale: '',
      evs: '',
      hatchSteps: '',
      themeColor: '#EF5350'
    };
  
    async componentDidMount() {
      const { pokemonIndex } = this.props.match.params;
  
      // Urls do pokemon
      const pokemonUrl = `http://localhost:3001/api/v1/pokemon/${pokemonIndex}/`;
  
      // pegar informações
      const pokemonRes = await Axios.get(pokemonUrl);
  
      if (pokemonRes.data.msg !== 'ID não encontrado')
      {
      const name = pokemonRes.data.name;
      const imageUrl = pokemonRes.data.avatar;
  
      // Conversor:)
      const height =
        Math.round((pokemonRes.data.height * 0.328084 + 0.00001) * 100) / 100;
  
      const weight =
        Math.round((pokemonRes.data.weight * 0.220462 + 0.00001) * 100) / 100;
  
      const types = pokemonRes.data.types.map(type => type.name);
      const types_color = pokemonRes.data.types.map(type => type.color);
  
      const themeColor = `${types_color[types[types.length - 1]]}`;
  
      // pegar descrição do pokemon

        let femaleRate = pokemonRes.data.gender_rate;
        const genderRatioFemale = 12.5 * femaleRate;
        const genderRatioMale = 12.5 * (8 - femaleRate);
  
        const catchRate = Math.round((100 / 255) * pokemonRes.data.capture_rate);
  
        const eggGroups = pokemonRes.data.egg_group
          .map(group => {
            return group.name
              .toLowerCase()
              .split(' ')
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ');
          })
          .join(', ');
  
        const hatchSteps = 255 * (pokemonRes.data.hatch_counter + 1);
  
        this.setState({
          genderRatioFemale,
          genderRatioMale,
          catchRate,
          eggGroups,
          hatchSteps
        });
  
      this.setState({
        imageUrl,
        pokemonIndex,
        name,
        types,
        themeColor,
        height,
        weight
      });
    }
    else
    {
      const msg = <div style={{justifyContent:'center',alignItems:'center',display:'flex',minHeight:'35vh',marginLeft:'5%', textTransform:'uppercase', fontSize:'200%'}}>O ID desse Pokemon no consta no Banco de Dados</div>
      this.setState({msg})
    }
    }
    render() {
        return  (
          <>
            <div className="col">
            <div className="card">
              <div className="card-header">
                <div className="row" style={{ backgroundColor: `#{TYPE_COLORS[state]}`}}>
                  <div className="col-5">
                    <h5>{this.state.pokemonIndex}</h5>
                  </div>
                  <div className="col-7">
                    <div className="float-right">
                      {this.state.types.map(type => (
                        <span
                          key={type}
                          className="badge badge-pill mr-1"
                          style={{
                            backgroundColor: `#${TYPE_COLORS[type]}`,
                            color: 'white'
                          }}
                        >
                          {type
                            .toLowerCase()
                            .split(' ')
                            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                            .join(' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className=" col-md-3 ">
                    <img
                      src={this.state.imageUrl}
                      className="card-img-top rounded mx-auto mt-2"
                    />
                  </div>
                  <div className="col-md-9">
                    <h4 className="mx-auto">
                      {this.state.name
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </h4>
                    <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="float-right"> Altura:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.height} feet.(pés)</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Peso:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.weight} lbs</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Taxa de Captura:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.catchRate}%</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-right">Gênero:</h6>
                      </div>
                      <div className="col-6">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.genderRatioFemale}%`,
                              backgroundColor: '#FE7F9C',
                              color:"black"
                            }}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <small>{this.state.genderRatioFemale}</small>
                          </div>
                          
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${this.state.genderRatioMale}%`,
                              backgroundColor: '#82EEFD',
                              color:"black"
                            }}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                              
                            <small>{this.state.genderRatioMale}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="float-right">Grupos de ovos:</h6>
                      </div>
                      <div className="col-6">
                        <h6 className="float-left">{this.state.eggGroups} </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                        
                    
                   
                  </div>
                </div>
              </div>
              {this.state.msg}
          </>  
        );
    };

}