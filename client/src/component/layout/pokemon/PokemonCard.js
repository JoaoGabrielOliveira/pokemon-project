import React, { Component } from 'react'
import {Link} from 'react-router-dom';



import styled from 'styled-components';
import pokebola from '../pokemon/pokeba.gif';

const Sprite = styled.img
`width: 10em;
 height: 10em;
 display: none;

`;
const  Card= styled.div`
box-shadow:0 1px 3px rgba(0,0,0.12), 0 1px 2px rgba(0,0,0.24);
trasition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);
&:hover{
    box-shadow: 10px 14px 28px pink ;
    cursor: pointer;
}
-moz-user-select: none;
-website-user-select: none;
user-select: none;
-o-user-select: none;

`;

export default class PokemonCard extends Component {
  


    state={
        name: '',
        imagemUrl:'',
        pokemonIndex:'',
        imageLoading: true,
        toManyRequests: false,
        themeColor: '#EF5350'
    }

    componentDidMount(){
          const {name, url}= this.props;
          const pokemonIndex = this.props.id;
          const imagemUrl= `${this.props.avatar}`
             
          this.setState({name,
                        imagemUrl,
                        pokemonIndex });
    
        };

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <Link to={`pokemon/${this.props.id}`}>
                <Card className='card '
                style={{
                    backgroundColor: `#${this.state.themeColor}`
                }}
                >
                        <h5 className="card-header">{this.props.id}</h5>
                        {this.state.imageLoading?(
                            <img src={pokebola} style={{width:'10em',height:'10em'}} className="card-img  mx-auto "/>
                        ): null}
                           <Sprite 
                           className="card-img -top rounded mx-auto mt-2 "
                           onLoad={()=> this.setState({imageLoading:false})}
                           onError={()=> this.setState({toManyRequests: true})}
                            src={this.state.imagemUrl}
                            style={
                                this.state.toManyRequests?{
                                    display:"none"
                                }: this.state.imageLoading? null :{display:"block"}
                            }
                           />

                           {this.state.toManyRequests?(
                           <h6 className="mx-auto">
                               <span className="badge badge-danger mt-2">Loading</span>
                           </h6>): null}
                            <div className="card-body">
                                <h6 className="card-title">
                                    {this.state.name.toLocaleLowerCase().split('')
                                    .map(letter=> letter.charAt(0).toUpperCase()+letter.substring(1))
                                    .join('')}
                                </h6>
                        </div>

                  </Card>
                </Link>
            </div>
        )
    }
}
