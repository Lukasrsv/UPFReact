import React, { Component } from 'react';
import Logo from '../images/Canva_Logo.png';
import '../css/Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header className="fixed-top" id="home">
                    <nav class="navbar navbar-light bg-dark">
                        <div class="container-fluid">
                            <a className="navbar-brand " href="/"><img className="logo" src={Logo} alt="" /></a>
                            <div>
                             <AnchorLink className="me-3 text-light text-decoration-none border-hover" href="#home">Home </AnchorLink> 
                             <AnchorLink className="me-3 text-light text-decoration-none border-hover" href="#sobre">Sobre</AnchorLink>
                             <AnchorLink className="me-3 text-light text-decoration-none border-hover" href="#precos">Preços</AnchorLink>
                             <AnchorLink className="me-3 text-light text-decoration-none border-hover" href="#contato">Contato</AnchorLink>  
        
                            </div>
                           
                        </div>
                    </nav>

                </header>

            </div>

        );
    }
}

export default Header;