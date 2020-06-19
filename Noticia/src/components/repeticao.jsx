import React from 'react';
import produtos from './data/produtos';
export default props => {

    function getProdutosListItem(){
        return produtos.map(prod=> {
        return<li key={prod.id}>
            {props.id}</li>
        })
    }

    return(
        <div>
            <h2>repetiçao</h2>
        </div>
    )
}