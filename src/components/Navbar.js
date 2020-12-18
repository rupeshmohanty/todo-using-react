import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './HomeComponent';
import New from './NewComponent';
import '../index.css';

const Navbar = () => {
    return(
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to = "/" className = "navbar-brand">Spectrum</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to = "/" className = "nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to = "/new" className = "nav-link">Make a wish</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>
                <Route path = "/new">
                    <New/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Navbar;