import React from'react';
import { Paper } from '@material-ui/core'
import '@kor-ui/kor'
import '@kor-ui/kor/kor-styles.css'

//Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import Ad from './components/Ad';
import ProductDetails from './components/ProductDetails';
import PurchasedProduct from './components/PurchasedProduct';
import Ofertar from './components/Ofertar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  
  return (

    <div className="app" >
      <Router>
        
    <Switch className="pt-5">
        <Route path="/home">
            <kor-page>
                <Header/>
                <kor-grid>
                    <kor-card grid-cols="3" grid-cols-s="12" grid-cols-m="4">
                        <Sidebar/>
                    </kor-card>
                    <kor-card grid-cols="9" grid-cols-s="12" grid-cols-m="8">
                        <div className="container">
                            <Paper style={{maxHeight: '600px', overflow: 'auto'}}>
                                <Products/>
                            </Paper>
                        </div>
                    </kor-card>
                </kor-grid>
            </kor-page>
        </Route>

          <Route path="/publicar">
            <kor-page>
              <Header />
              <Ad/>  
            </kor-page>
          </Route>

          <Route path="/comprar/:product" component={ProductDetails} />
          <Route path="/comprado/:product" component={PurchasedProduct} />

          <Route path="/ofertar/:product" component={Ofertar} />

        </Switch>


      </Router>
    </div>

  );
}

export default App;
