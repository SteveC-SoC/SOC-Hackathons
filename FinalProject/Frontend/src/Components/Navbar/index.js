import React from 'react';
import { Nav, NavLink, Bars, NavMenu, } from './NavbarElements.js';
import logo from "./travelsafev2.png";




const Navbar = () => {
    return (

        <div>
            
            <Nav data-testid="nav">                                   
                <div><img src={logo} alt="logo"/></div>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                </NavLink>
                    <NavLink to="/UKPage" activeStyle>
                        UK
                    </NavLink>
                    <NavLink to="/WorldPage" activeStyle>
                        Abroad
                    </NavLink>
                    <NavLink to="/WorldTracker" activeStyle>
                        Stats
                </NavLink>

                    <NavLink to="/TravelTipsPage" activeStyle>
                        Tips
                    </NavLink>
                </NavMenu>
            </Nav>

        </div>
    );
};

export default Navbar;

