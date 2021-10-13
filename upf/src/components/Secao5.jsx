import React, { Component } from 'react';
import '../css/Secao5.css'

class Secao5 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section class="bg-dark container" id="precos">
        <div class="row">
            <div class="col-12 d-md-flex d-block margem-top-secao5 margem-botton-secao5  " id="precos" >

            
            <div class="card me-md-2 ms-md-auto mx-auto mx-md-0 mb-2 mb-md-0 col-12 col-md-6 card-width-secao5" >
                <div class="card-body">
                  <h3 class="card-title fw-bold text-center">Cartão de crédito</h3>
                  <h6 class="card-subtitle mb-2 text-muted display-5 fw-bold text-center">R$ 147</h6>
                  <p class="card-text text-center">Acesso Imediato ao Curso.</p>
                  <hr class="bg-secondary"/>
                  <p href="#" class="card-link text-center">Compre Parcelado em até 12x</p>
                  <hr class="bg-secondary"/>
                  <p href="#" class="card-link text-center">Acesso Completo ao Curso</p>
                  <div class="d-grid mt-5">
                    <button class="btn btn-lg btn-danger">Comprar agora</button>
                  </div>
                  
                </div>
              </div>

              <div class="card  me-md-auto mx-auto mx-md-0 col-12 col-md-6 card-width-secao5" >
                <div class="card-body">
                  <h3 class="card-title fw-bold text-center">Boleto</h3>
                  <h6 class="card-subtitle mb-2 text-muted display-5 fw-bold text-center">R$ 147</h6>
                  <p class="card-text text-center">Acesso Liberado em 36 Horas.</p>
                  <hr class="bg-secondary"/>
                  <p href="#" class="card-link text-center">Pagamento Único</p>
                  <hr class="bg-secondary"/>
                  <p href="#" class="card-link text-center">Acesso Completo ao Curso</p>
                  <div class="d-grid mt-5">
                    <button class="btn btn-lg btn-danger ">Comprar agora</button>
                  </div>
                </div>
              </div>
            </div>
        </div>

    </section>

         );
    }
}
 
export default Secao5;