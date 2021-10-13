import React, { Component } from 'react';
import '../css/Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
            <footer id="contato" class="text-left bg-light "  >
        <div class="container" >

            <div class=" row text-center ">
                <div class="col-12 col-md-4  ">
                    <div class="margem-top-footer" >
                        <a href="/" class="text-decoration-none fw-bold text-dark  ml-4 font-size-footer1"
                           >Canva</a>
                        <a class="text-decoration-none ml-4  text-dark d-block mt-2 font-size-footer2" 
                            href="#sobre">Sobre</a>
                        <a class="text-decoration-none ml-4  text-dark d-block mt-2 font-size-footer2" 
                            href="#precos">Preços</a>
                        <a class="text-decoration-none ml-4  text-dark d-block mt-2 font-size-footer2" 
                            href="#contato">Contato</a>
                    </div>

                </div>
                <div class="col-12 col-md-4 ">
                    <div class="margem-top-footer" >
                        <h1 class="text-decoration-none fw-bold text-dark ml-4 font-size-footer1" >
                            Contato</h1>
                        <h7 class="text-decoration-none ml-4 text-dark d-block mt-2 font-size-footer2" href="">
                           canvascurso.bra@gmail.com </h7>
                        <h7 class="text-decoration-none ml-4 text-dark d-block mt-2 font-size-footer2"  href="">
                            </h7>




                    </div>


                </div>
                <div class="col-12 col-md-4 ">
                    <div class="margem-top-footer" >
                        <h5 href="" class="text-decoration-none fw-bold text-dark ml-4 font-size-footer1"
                            >Social</h5>
                        <a class="text-decoration-none ml-4 text-dark d-block mt-2 font-size-footer2" 
                            target="_blank" href="">Instagram</a>
                        <a class="text-decoration-none ml-4 text-dark d-block mt-2 font-size-footer2" 
                            target="_blank"
                            href="">Facebook</a>
                        <a class="text-decoration-none ml-4 text-dark d-block mt-2 font-size-footer2" 
                            href="#">Twiter</a>

                    </div>


                </div>



            </div>

        </div>
        <div class=" text-center mx-auto col-12 margem-top-footer-hr" >
            <hr class="mb-4 w-100 footer-hr-color " />
        </div>
        <div class="pb-2">
            <p class="text-dark text-center  ">© 2021 Canva Profissional</p>
        </div>
    </footer>


         );
    }
}
 
export default Footer;