import React, { Component } from 'react';
import '../css/Secao2.css'




class Secao2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <section className="container">
                 <div class="row margem-top-secao2" >
            <div class="mb-5">
                <h1 class="text-light text-center">Aproveite a oferta e comece agora mesmo a produzir vídeos e vinhetas para o youtube e a faturar alto.</h1>
            </div>


            <div class="col-12 col-lg-6">
                <table class="table-dark table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Unidades</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Parcelas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>1</td>
                        <td>1.000,00</td>
                        <td>12x</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>2</td>
                        <td>1.800,00</td>
                        <td>12x</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <th >3</th>
                        <td >1.500,00</td>
                        <td>12x</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
            <div class="col-12 col-lg-6 text-center">
                <iframe width="550" height="300" class="video1-tamanho" src="https://www.youtube.com/embed/wgJBhjrLbpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


            </section>

         );
    }
}
 
export default Secao2;