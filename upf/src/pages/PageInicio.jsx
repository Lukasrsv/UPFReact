import React, { Component } from 'react';
import Header from '../components/Header';
import Secao1 from '../components/Secao1';
import Secao2  from '../components/Secao2';
import Secao3 from '../components/Secao3';
import Secao4 from '../components/Secao4';
import Secao5 from '../components/Secao5';
import Footer from '../components/Footer';



class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header/>
                 <Secao1/>   
                 <Secao2/>
                 <Secao3/>  
                 <Secao4/> 
                 <Secao5/> 
                 <Footer/>
            </div>
         );
    }
}
 
export default Inicio;
