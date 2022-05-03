import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Config from './Pages/Config/Config';

function Routes() {
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            
            <Route exact path='/config'>
                <Config />
            </Route>
            
            <Route exact path='/sobre'>
                sobre
            </Route>
        </Switch>
    )
}
export default Routes;