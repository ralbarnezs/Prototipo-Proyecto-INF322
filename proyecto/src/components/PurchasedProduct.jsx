import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { stockData } from "./data";
import Header from './Header';

const PurchasedProduct = (props) =>
{
    const [show, setShow] = useState(false);

    const handleUbicacion = () =>
    {
        setShow(!show);
    };

    const handleVolver = (e) => {
        window.location.replace("http://localhost:3000/home");
    }

    const gridStyle = {
        margin: 'auto',
        width: '40%'
    };

    const messageStyle = {
        marginTop: '30px',
        marginBottom: '0',
        fontSize: '1.5em',
        textAlign: 'center'
    };

    const textStyle = {
        marginLeft: '40px',
        marginRight: '40px'
    };

    const ubicacionStyle = {
        background: '#3f51b5',
        margin: 'auto'
    }

    const volverStyle = {
        margin: 'auto'
    }

    const data = stockData.filter((d) => d.name === props.match.params.product)[0];

    return (
    <>  
        <kor-page>
            <Header />
            <kor-grid style={gridStyle}>
                <kor-card grid-cols="12" grid-cols-s="12">
                    <kor-text style={messageStyle} size="header-1">¡Muchas Gracias por tu Compra!</kor-text>
                    <kor-text style={messageStyle}>
                        <kor-icon icon="check_circle"  color="green" size="xl" style={{color: "green"}}></kor-icon>
                    </kor-text>

                    <kor-divider spacing="s" orientation="horizontal"></kor-divider>

                    <kor-text>
                        <span style={{fontWeight: 'bold'}}>Lugar de Retiro:</span> Los Placeres #123, Region de {data.region}
                        <kor-button style={ubicacionStyle} label="Ver Mapa" onClick={handleUbicacion}></kor-button>
                    </kor-text>

                    <kor-text size="header-1">Detalles de la compra</kor-text>
                    <kor-text size="header-1">
                        <span>Total Pagado: </span>
                        <span style={{fontWeight: 'normal'}}>$ {data.price}</span>
                    </kor-text>
                    <kor-text size="body-1"><span style={{fontWeight: 'bold'}}>Producto: </span>{data.name}</kor-text>
                    <kor-text size="body-1"><span style={{fontWeight: 'bold'}}>Descripción: </span>{data.detail}</kor-text>
                    <kor-text size="body-1"><span style={{fontWeight: 'bold'}}>Vendedor(a): </span>{data.username}</kor-text>

                    <kor-divider spacing="s" orientation="horizontal"></kor-divider>
                    <kor-button style={volverStyle} slot="footer" label="Volver" color="secondary" onClick = {(e) => {handleVolver(e);}}></kor-button>

                    {show && <div>
                        <kor-modal id="modal" visible label="Ubicación" style={{margin:"auto"}}>
                            <kor-text size="body-1"><span style={{fontWeight: 'bold'}}>Región:</span> {data.region}</kor-text>
                            <kor-text size="body-1"><span style={{fontWeight: 'bold'}}>Dirección:</span> Los Placeres #123</kor-text>
                            <kor-image src={"https://docs.microsoft.com/es-es/azure/azure-maps/media/migrate-google-maps-web-app/google-maps-marker.png"}></kor-image>
                        </kor-modal>
                    </div>}

                </kor-card>
            </kor-grid>
        </kor-page>
    </>
    );

}

export default PurchasedProduct;
