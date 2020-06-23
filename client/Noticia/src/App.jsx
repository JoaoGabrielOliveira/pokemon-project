import React from "react";
import './index.css'
import './components/layout/Card.css';
import './components/App.css';

import Pri from './components/Pri.jsx';
import Card from './components/layout/Card.jsx';
import Img from './components/img';
import Parametros from './components/Parametros';


export default (props) => (

    <div className="App">
  

    <Card color='#00BFFF'>
        <Img />
      <Parametros  Color='#00BFFF'titulo="Pokémon GO: como pegar Zekrom nas reides." /> 
      <Pri text="O segundo membro da Elite Lendária chega nesta terça-feira ao Pokémon GO. Zekrom estará nas reides de nível 5 ainda sem data definida para sair. A única informação passada pela Niantic é que o lendário será a estrela de três edições do jantar lendário nos dias 14, 24 e 1º de julho. O Pokémon Preto Intenso chega como melhor nome do tipo elétrico no Pokémon GO."  />
    </Card>
  
  
    <Card color='#40E0D0'>
        <Img src='components/img/img1.jpg' /> 
        <Parametros Color='#40E0D0' titulo="Pokémon GO: Mega Evolução é anunciada e chega ao jogo ainda em 2020" />
        <Pri text="De acordo com as informações divulgadas, o título será gratuito para iniciar (ou seja, provavelmente será necessário pagar para liberar elementos adicionais) e envolve servir as criaturas que chegam em seu café com drinques e pratos específicos. Preparar cada um deles envolve a resolução de um puzzle, sendo necessário arrastar o ícone de um pokémon para a mesma categoria à qual ele pertence." />
     
    </Card>
  
    <Card color='#3CB371' >
        <Img />
        <Parametros Color='#3CB371' titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos" />
        <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
      
    </Card>

    <Card color='#FF6347' >
        <Img />
        <Parametros Color='#FF6347' titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
        <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
      
    </Card>
    <span>
    <Card color="#FFB6C1">
        <Img />
        <Parametros Color="#FFB6C1" titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
        <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
      
    </Card>
    <Card color='#EE82EE'>
        <Img /> 
        <Parametros Color='#EE82EE' titulo="Pokémon GO: Mega Evolução é anunciada e chega ao jogo ainda em 2020" />
        <Pri text="De acordo com as informações divulgadas, o título será gratuito para iniciar (ou seja, provavelmente será necessário pagar para liberar elementos adicionais) e envolve servir as criaturas que chegam em seu café com drinques e pratos específicos. Preparar cada um deles envolve a resolução de um puzzle, sendo necessário arrastar o ícone de um pokémon para a mesma categoria à qual ele pertence." />
     
    </Card>
  
    <Card color='#9400D3' >
        <Img />
        <Parametros Color='#9400D3' titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
        <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
      
    </Card>

    <Card color='#FFFF00' >
        <Img />
        <Parametros Color='#FFFF00' titulo="Chamado 'New Pokémon Snap', game coloca jogador em uma ilha para fotografar monstrinhos"/>
        <Pri text="A Nintendo anunciou nesta quarta-feira, 17, New Pokémon Snap, um novo jogo para o Switch no qual o objetivo do jogador não é capturar ou batalhar, e sim fotografar os monstrinhos." />
      
    </Card>
    
    </span>

  </div>
  
)