import React from 'react' 
import Poke from './letra';
import New from './news';
import Dic from './dinamic'
import './Home.css';


function Alert() {

alert="oiuy"
}



export default props =>
<div className="conf">
    
   <div className="topo1">
      
       <strong className="titulo"> Historia do Pokemon </strong>
       <div className="text">
       Quando jovem, o criador dos monstrinhos, Satoshi Tajiri, gostava bastante de observar e estudar os insetos.<br></br>
       Assim, baseado no conceito da metamorfose, o japonês idealizou um mundo no qual os jogadores batalhavam<br></br>
       uns com os outros usando monstros que, com o passar do tempo e com os ganhos de experiência, evoluíam e ficavam mais poderosos.<br></br>
       Foi a partir dessa ideia que nasceu Pokémon, em 1994.
       </div>
        <div>
       <a href="https://www.bichosgeeks.com/historia-do-desenvolvimento-de-pokemon/" className="btn"  onClick={Alert} ><strong>Ler Mais </strong></a >
       </div>
      <div className="img">
       <img src="https://i.pinimg.com/originals/d8/48/95/d848953a7d952445d996b5387ce20352.png" width="1000px" height="250px"/>
  </div> 
  </div>
   <div className="topo2">
    
       <Poke/>
    
   </div>
   <div className="New">
           <div className="TN">
               <strong>News</strong>
           </div>
            <New/>

    </div>
    <div className="dic">
        <Dic/>
    </div>
    
</div>
  
   