import React, { Component } from 'react';
import Logo from '../images/Logo.png'
import CanvaCurso from '../images/canva-curso.jpg'
import Formulario from './formulario';
import '../css/Secao1.css'

class Secao1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <section className="container margem-top-secao1" id="sobre">
                    <div className="row">

                        <div className="col-12 col-xl-6">
                                <img src={Logo} alt=""  />
                                <p class="text-light mt-4">A maneira mais simples para se destacar na multidão é fazer publicações mais profissionais em suas redes sociais.
                                Fortaleça sua marca criando posts, logos e templates de forma descomplicada e prática, mesmo sem ter experiência com design.</p> 
                                <Formulario/>   
                        </div>

                        <div className="col-12 col-xl-6 mt-5 mt-xl-0">
                            <img className="img-fluid" src={CanvaCurso} alt="" />
                            
                        </div>
                    </div>



            </section>


         );
    }
}
 
export default Secao1;