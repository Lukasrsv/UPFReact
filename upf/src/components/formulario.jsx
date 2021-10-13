import React, { Component } from 'react';
import '../css/Formulario.css'



class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email:"",
            password:""
        }
    }

    validar(){
        var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        
        
        
        if( nome.value !== ""){
          nome.removeAttribute("class", "borda-vermelha");
          nome.setAttribute("class","borda-verde form-control-lg form-control rounded-0 input-trasparente");
          
        }else{
         
          nome.setAttribute("class","borda-vermelha form-control-lg form-control rounded-0 input-trasparente");
        }
        
        
        if(  email.value !== ""){
          email.removeAttribute("class", "borda-vermelha");
          email.setAttribute("class","borda-verde form-control-lg form-control rounded-0 input-trasparente");
        }else{
          
          email.setAttribute("class","borda-vermelha form-control-lg form-control rounded-0 input-trasparente");
        }
        
        }
        




    render() {
        return (
            <div className=" margem-top-formulario">
                <form action="">
                <div class="">
                        <label for="exampleFormControlInput1" className="form-label text-light">Nome</label>
                        <input type="text" onChange={this.validar} class="form-control form-control-lg rounded-0  input-bg" id="nome" placeholder="Nome completo"/>
                    </div>
                    <div class="">
                        <label for="exampleFormControlInput1" className="form-label text-light">Email </label>
                        <input type="email" onChange={this.validar} class="form-control rounded-0 form-control-lg input-bg" id="email" placeholder="name@example.com"/>
                    </div>
                   

                <div className="d-grid mt-2">
                <button className="btn btn-danger" type='button' onClick={this.validarFormulario}>Comprar</button>
                </div>
                   
                </form>

            </div>


        );
    }
}

export default Formulario;


