import React, { Component } from 'react'
import './cont.css'
import swal from 'sweetalert';







export default class cont extends Component {
    render() {
        return (
        <form className="boder"style={{alignItems:"center",paddingLeft:"90px",marginTop:"-90px"}}>
            
            <div style={{ paddingTop:"160px",alignItems:"center"}}>
            <div className="infor">
            Para entrar em contato conosco, utilize o formulário abaixo. Caso precise anexar um arquivo ou esteja com dificuldades para carregar o formulário, envie um e-mail para contato@pokemonnewscenter.com.br através do seu provedor de e-mail.
            </div>
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

   <div className="Msg">
   <div className="CM">
       <label>Sua Mensagem<span style={{color:"red", padding:'10px'}}>*</span></label><br></br>
       <span className=" textarea">
       <textarea name="textarea"   placeholder="O que você quer nos dizer?"></textarea></span> 
      
   </div> 
    
</div>
 <button
      onClick={
         
            swal({
        title: "OBRIGADA!",
        text: "Sua menssagem foi enviada!",
        icon: "success",
      })  

    }
    style={{
        marginTop:"160px",
        width:"649px",
            
    
    }}

>

      ENVIAR
    
    </button> 
</div>
    <div className="Card">
     <img  src="https://i.pinimg.com/originals/e4/cd/8d/e4cd8da51b95436ddd7b5830e4c5ed48.jpg" height="800px" />
    </div> 
  
</form>


        )
    }
}
