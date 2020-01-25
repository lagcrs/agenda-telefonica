import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Main from './pages/Main';
import NewContato from './pages/NewContato';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route path="/new" component={NewContato}/>
        </BrowserRouter>
    )
}