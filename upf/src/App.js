import React, { Component } from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageInicio from './pages/PageInicio';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <BrowserRouter>
      
      <Switch>
        <Route path="/">
          <PageInicio/>
        </Route>


      </Switch>
      
      
      </BrowserRouter>
      


     );
  }
}
 
export default App;
