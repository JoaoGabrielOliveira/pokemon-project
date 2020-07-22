import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';


export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 100;

  return (
    <div  style={{ padding: `0 ${chevronWidth}px`,overflow:'none' }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={2}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        
        <div style={{ height: 750,width :500,background: '' }}>
                  <div>
                  <div className="Game" >
                  <img  src="https://s2.glbimg.com/RtPv114RUYYmMKeFV1SthxZ-N5A=/0x0:1920x1181/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/X/I/X1AaAPRXGWf5qYdTaBUQ/kyurem-pogo.png" width="453.5px" height="300" />
                  <div className="TiT" ><strong>Pokémon GO: com estreia de Kyurem, eventos de julho são anunciados</strong></div> 
                  <div className="conteu">A Niantic divulgou, nesta terça-feira, os eventos que acontecerão em julho no Pokémon GO. Entre as principais novidades, está a chegada de Kyurem membro do Trio de Elite, às reides de nível 5. Além disso, Larvitar poderá ser capturado pela Descoberta Extraordinária.  </div>
                  <div style={{color:"#D3D3D3"}}>@Goblo Esporte</div>
                <a  className="button" style={{textDecoration:"none",color:"Black"}}href="https://globoesporte.globo.com/e-sportv/noticia/pokemon-go-com-estreia-de-kyurem-eventos-de-julho-2020-sao-anunciados.ghtml"><strong>Ler Mais</strong></a>
                    </div>
                  </div>
        </div>
        <div style={{ height:750,width:500,background: '' }}>
                  <div>
                  <div className="Game" >
                  <img src="https://static.invenglobal.com/upload/image/2020/06/24/i1593008763944016.jpeg" width="454px" height="300" />
                  <div className="TiT" ><strong>'Pokémon Unite', game que leva monstros ao gênero de 'League of legends', é anunciado.</strong></div> 
                  <div className="conteu"> Novo game será gratuito e disputado em equipes em tempo real. Data de lançamento não foi divulgada.O novo game da Pokémon, o "Pokémon Unite", foi anunciado nesta quarta-feira (24) pela franquia japonesa. </div>
                  <div style={{color:"#D3D3D3"}}>@G1</div>
                   <a  className="button"style={{textDecoration:"none",color:"Black"}} href="https://g1.globo.com/pop-arte/games/noticia/2020/06/24/pokemon-unite-game-que-leva-monstros-ao-genero-de-league-of-legends-e-anunciado.ghtml"><strong>Ler Mais</strong></a>
                    </div>
                  </div>  
                        
        </div>
        <div style={{ height:550,width:499,background: '' }}>
                  <div>
                  <div className="Game"  >
                  <img src="https://pbs.twimg.com/media/EbSieHIWoAExsLq?format=jpg&name=small"  width="454px" height="300"  />
                  <div className="TiT"><strong>Pokémon Sword & Shield: como pegar Shiny Zeraora</strong></div> 
                  <div className="conteu"> Resgate da versão brilhante poderá ser feito até o dia 6 de julho pela versão mobile do Pokémon Home.Os jogadores de Pokémon Sword & Shield já podem adquirir o monstrinho mítico Zeraora de forma gratuita (Você conseguiu, treinadores!)   </div>
                  <div style={{color:"#D3D3D3"}}>@globo Esporte</div>
                  <a  className="button" style={{textDecoration:"none",color:"Black"}} href="https://globoesporte.globo.com/e-sportv/noticia/pokemon-sword-and-shield-como-pegar-shiny-zeraora.ghtml"><strong>Ler Mais</strong></a>
                    </div>
                  </div>  
                        
        </div>
        <div style={{ height: 550,width:499,boder: '' }}>
                  <div >
                  <div className="CardN">
                  <img src="https://i0.wp.com/www.nintendoenthusiast.com/wp-content/uploads/2020/06/poketune-pokemon-looney-tunes-800x400.png?resize=650,400" width="454x" height="300" />
                  <div className="TiT" style={{backgroundColor:"#FF0000"}}><strong>Pokémon lança 'PokéToon' inspirado em desenhos clássicos de Looney Tunes</strong></div> 
                  <div className="conteu">Por meio do canal no Pokémon Kids TV, a The Pokémon Company lançou ontem o 'PokéToon', um desenho inspirado nos desenhos clássicos de Looney Tunes.A peça, intitulada 'Chase the Beans' ('Perseguir os Feijões', em português). </div>
                  <div style={{color:"#D3D3D3"}}>@Tecmundo</div>
                  <a  className="button"style={{textDecoration:"none",color:"Black"}} href="https://www.tecmundo.com.br/cultura-geek/153917-poketoon-nova-animacao-pokemon-inspirada-looney-tunes.htm"><strong>Ler Mais</strong></a>
                    </div>
                  </div>  
                        
        </div>
        <div style={{ height: 550,width:499,boder: '' }}>
                  <div >
                  <div className="CardN">
                  <img src="https://www.einerd.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Equipe-Rocket-capa.jpg" width="454px" height="300" />
                  <div className="TiT" style={{backgroundColor:"#FF0000"}}><strong>Equipe Rocket: a história dos vilões de Pokémon nos games e anime</strong></div> 
                  <div className="conteu">Quem jogou ou assistiu ao anime de Pokémon sabe que uma pedra no sapato tanto do jogador quanto de Ash e seus amigos, respectivamente, foi a Equipe Rocket. O grupo de vilões está presente desde o primeiro game da série.</div>
                  <div style={{color:"#D3D3D3"}}>@Einerd</div>
                  <a  className="button" style={{textDecoration:"none",color:"Black"}} href="https://www.einerd.com.br/equipe-rocket-pokemon/"><strong>Ler Mais</strong></a>
                    </div>
                  </div>
                </div>
                <div style={{ height: 550,width:499,boder: '' }}>
                  <div >
                  <div className="CardN">
                  <img src="https://observatoriodegames.uol.com.br/wp-content/uploads/2020/06/Ahs-and-Pikachuu--696x392.jpg" width="454px" height="300" />
                  <div className="TiT" style={{backgroundColor:"#FF0000"}}><strong>Pokemon doa US$ 200.000 para movimento ‘Black Lives Matter’</strong></div> 
                  <div className="conteu">Nesta semana, a Pokemon Company prometeu doar cerca de US$ 200.000 em apoio ao movimento Black Lives Matter e à NAACP. A declaração foi dada através do conta oficial da empresa no Twitter, onde se destacou ainda apoia a causa . </div>
                  <div style={{color:"#D3D3D3"}}>@Observatorio de Games</div>
                  <a  className="button"  style={{textDecoration:"none",color:"Black"}}href="https://observatoriodegames.uol.com.br/noticias/pokemon-doa-us-200-000-para-movimento-black-lives-matter"><strong>Ler Mais</strong></a>
                    </div>
                  </div>  
                        
        </div>
      
  
      </ItemsCarousel>
    </div>
  );
};