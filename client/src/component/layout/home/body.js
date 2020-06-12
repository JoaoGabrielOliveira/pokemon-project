import React from 'react'
import Bootstrap from 'bootstrap'

export default class Body extends React.Component {
    render(){
        return(
            <>
            <div className='col1'>
            <div class="frase">
                <h1>Frase </h1>
            </div>

            <div class="pesquisa">
                <input class="barra"type="text" placeholder="Pesquise" />

                <input class="barra" type="submit" style={{display: "none"}} />

                <label class="btn "for="btn" >
                    <img src="https://img.icons8.com/color/45/000000/pokedex.png" />
                </label>

 
            </div>
            
            <div class="ash">
                <img src="https://4.bp.blogspot.com/-xZCLBO8q8CI/UmnYd36HNGI/AAAAAAAAFKI/8MT3HGTfqHE/s320/250px-Ash_XY.png" />
            </div>

            </div>
            
            </>
        );
    }
}