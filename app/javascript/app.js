import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Rotas from './routes'

const App = () => {

    return(
        <Fragment>
            <BrowserRouter>
                <Rotas />
            </BrowserRouter>
        </Fragment>
    )

}

export default App;
