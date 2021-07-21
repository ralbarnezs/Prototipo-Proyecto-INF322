import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { stockData } from "./data";
import Header from './Header';

const Ofertar = (props) =>
{

    const [show, setShow] = useState(false);
    const data = stockData.filter((d) => d.name === props.match.params.product)[0];

    const handlePreguntar = () =>
    {
    
      setShow(true);
      setTimeout(function(){window.location.href = '/home';}, 4000);
  
    };
    
    return (
        <>  <kor-page>
        <Header />

            <kor-grid spacing="s" style={{margin:'auto',justifyContent: 'center', marginLeft: '200px'}}>
            
                <kor-card  style={{height: '570px'}} grid-cols="5" spacing="s" >
                    <kor-text size="header-1">{data.name}</kor-text>
                    <kor-text size="body-1" style={{fontSize: '1.6em'}}>$ {data.price}</kor-text>
                    <kor-image style={{margin:'auto'}}
                        width="100%"
                        height="250px"
                        theme="dark"
                        fit="cover"
                        src={data.image}>    
                    </kor-image>
                    <kor-text size="header-2">Descripción del Producto</kor-text>
                    <kor-text size="body-2">{data.detail}</kor-text>

                    <kor-divider spacing="s" orientation="horizontal"></kor-divider>

                    <kor-text size="header-2" >Detalles del Vendedor</kor-text>
                    <kor-text size="body-2"><span style={{fontWeight: 'bold'}}>Vendedor(a):</span> {data.username}</kor-text>
                    <kor-text size="body-2"><span style={{fontWeight: 'bold'}}>Región:</span> {data.region}</kor-text>
                </kor-card>
                

                <kor-card  grid-cols="5" style={{height: '570px'}} label="Contactar vendedor"  spacing="s">
                
                    



                    
                <kor-input style={{margin: '40px', width: '350px', marginBottom: '10px', marginTop:'10px'}}  label="Numero de unidades que le interesa" value="1" type="number"></kor-input>
		 

                    
                <kor-tabs >
		            <kor-text  style={{margin: '40px', marginBottom: '10px', marginTop:'10px'}} size="body-1">Desea: </kor-text>
                    <kor-radio-button label="Permutar" style={{margin: '40px', marginLeft: '10px', marginBottom: '10px', marginTop:'10px'}}  active></kor-radio-button>
                    <kor-radio-button label="Ofertar"  style={{margin: '40px', marginLeft: '10px', marginBottom: '10px', marginTop:'10px'}}  ></kor-radio-button>
                </kor-tabs>
                    
                <kor-input style={{ margin: '40px', width:'350px'}} condensed="false" label="Mensaje"></kor-input>

                <kor-toggle style={{ margin: '40px' }} label="Mostrar mi ciudad al vendedor"></kor-toggle>    


                    <kor-button color="primary" label="Enviar" style={{background: '#3f51b5', width: '140px', margin: 'auto', marginBottom: '10px'}} onClick={handlePreguntar} ></kor-button>
                    <kor-button color="secondary" label="Cancelar y volver" style={{color: "black", width: '140px', margin:"auto", marginBottom: '80px', marginTop: '5px'}} onClick={event => window.location.href = '/home'} ></kor-button>

            </kor-card>
            </kor-grid>
            {show && <div>
          <kor-modal id="modal" visible style={{margin:"auto"}}>
            <kor-icon icon="check_circle"  color="green" size="xl" style={{ color: "green", margin: "auto" }}></kor-icon>
                    <kor-text style={{ margin: "auto", align: "center" }} size="header-1">¡Se ha enviado la oferta al vendedor!</kor-text>
                    <kor-text style={{ margin: "auto", align: "center", marginTop:'5px' }} size="header-1"> Se le notificará cuando haya respuesta.</kor-text>
            <kor-text style={{ margin: "auto" , align: "center"}} size="body-1">Se le está redireccionando a la página principal.</kor-text>

          </kor-modal>
          </div>}
            

            
            
    </kor-page>
</>
    );
}

export default Ofertar;