import React, { Component } from 'react';
import Certificado from '../images/cert.png'
import '../css/Secao4.css'

class Secao4 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
        <section class="container-fluid  bg-secao4 mt-5  "  >
            <div class="row text-center">
                <div class="col-12 margem-top-secao4 margem-botton-secao4" >
                    <h1 class="fw-bold display-5 text-light text-center" >CERTIFICADO INCLUSO</h1>
                    <h2 class="text-light text-center">Ao concluir seu curso você ainda recebe um certificado de conclusão</h2>
                    <img class="mt-5 img-fluid"  src={Certificado} alt=""/>
                </div>
    
            </div>
    
        </section>

         );
    }
}
 
export default Secao4;
