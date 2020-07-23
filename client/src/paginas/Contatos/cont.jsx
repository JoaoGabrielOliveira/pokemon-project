import React, { Component } from 'react'
import './cont.css'
import swal from 'sweetalert';
import Menu from './menuCont';
import Dina from '../Home/components/dinamic'








export default class cont extends Component {
    render() {
        return (
            <>
            <nav className="navr" style={{}}> 
              
           <form className="boder"style={{alignItems:"center",paddingLeft:"90px"}} >
            
            <div style={{alignItems:"center"}}>
                <div style={{display:"flex"}} >
              <Menu style={{display:"block"}}/>
              </div>
                <div >
            <div style={{float:"left", paddingLeft:"200px",fontSize:"20px   "}}>
            Para entrar em contato conosco, utilize o formulário abaixo.
            </div> 
            <div style={{}}>
        <div className="control">
        <div className="CN">
        <div className="Nome">Seu nome<span style={{color:"red", padding:'10px'}}>*</span></div>
          <input type="text" placeholder="Nome e Sobrenome" className="Name"></input>
    </div>  
    <div className="CE">
        <div className="Nome">Seu E-mail<span style={{color:"red", padding:'10px'}}>*</span></div>
          <input type="email" placeholder="Seu E-mail" className="Name"></input>
    </div>  
    <div className="CA">
        <div className="Nome">Titulo do Assunto<span style={{color:"red", padding:'10px'}}>*</span></div>
          <input type="text" placeholder="Titulo" className="Name"></input>
    </div>  
   
</div>

   <div className="Msg" style={{paddingTop:"30px"}}>
   <div className="CM">
       <label>Sua Mensagem<span style={{color:"red", padding:'10px'}}>*</span></label><br></br>
       <span className=" textarea">
       <textarea name="textarea"   placeholder="O que você quer nos dizer?"></textarea></span> 
      
   </div> 
  
    
</div>

</div>
</div>
</div>
  <div style={{marginTop:"700px",marginLeft:"-950px"}} >
  <button type="submit" className="enviar">
      <img  style={{marginLeft:"-600px",paddingRight:"400px"}} src="https://img.icons8.com/color/50/00000/pokeball--v1.png"/> 
      <strong className="envia" style={{textAlign:"center",paddingTop:"10px",fontSize:"20px"}}> Enviar </strong>
  </button>
  

    </div> 
  
</form> 

</nav>
<Dina/>
</>
        )
    }
}
