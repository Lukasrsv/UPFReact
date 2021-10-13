import React, { Component } from 'react';
import '../css/Secao3.css'

class Secao3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section className="margem-top">
                <div class="row " >


                    <div class="col-12 mt-5  text-center">
                        <h1 class="text-light text-center display-1 fw-bold">Alunos satisfeitos!</h1>
                        <h1 class="text-light text-center">Depoimentos de quem fez o curso</h1>
                        <iframe class="mt-5 video2-tamanho " src="https://www.youtube.com/embed/LgdveS8mppU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>


                </div>


            </section>

        );
    }
}

export default Secao3;