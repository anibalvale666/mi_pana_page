import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from '../components/Navbar';
import { Contact } from '../components/pages/Contact';
import Home from '../components/pages/Home';
import { Products } from '../components/pages/Products';
import { Services } from '../components/pages/Services';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                 <Switch>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/servicios' component={Services}/>
                    <Route path='/productos' exact component={Products}/>
                    <Route path='/contacto' exact component={Contact}/>
                    <Redirect to="/home" />
                 </Switch>
            </div>
        </>
    )
}
