import { React } from 'react';
import { Link } from 'react-router-dom';
import { stockData } from "./data";
import Header from './Header';

const ProductDetails = (props) => {
    const gridStyle = {
        margin: 'auto',
        width: '60%'
    };
    const imgStyle = {
        height: '100%'
    };
    const priceStyle = {
        fontSize: '2.1em'
    };

    const textStyle = {
        marginLeft: '40px',
        marginRight: '40px'
    };

    const mediosStyle = {
        margin: 'auto',
        color: 'green'
    };

    const cancelarStyle = {
        margin: 'auto',
        width: '100%'
    };
    const comprarStyle = {
        background: '#f44336',
        margin: 'auto',
        width: '100%'
    };
    const data = stockData.filter((d) => d.name === props.match.params.product)[0];
    return (
    <>  <kor-page>
            <Header />
            <kor-grid style={gridStyle} spacing="s">
                <kor-card grid-cols="6" grid-cols-s="12">
                    <kor-image
                        src={data.image}
                        height="100%"
                        fit="cover"
                        overflow="hidden"
                    ></kor-image>
                </kor-card>
                <kor-card grid-cols="6" grid-cols-s="12">
                    <kor-text size="header-1">{data.name}</kor-text>
                    <kor-text size="body-1" style={priceStyle}>$ {data.price}</kor-text>
                    <kor-divider spacing="s" orientation="horizontal"></kor-divider>
                    <kor-text size="header-2">Descripción del Producto</kor-text>
                    <kor-text size="body-2">{data.detail}</kor-text>
                    <kor-divider spacing="s" orientation="horizontal"></kor-divider>
                    <kor-text size="header-2">Detalles del Vendedor</kor-text>
                    <kor-text size="body-2"><span style={{fontWeight: 'bold'}}>Vendedor/a:</span> {data.username}</kor-text>
                    <kor-text size="body-2"><span style={{fontWeight: 'bold'}}>Región:</span> {data.region}</kor-text>
                    <kor-divider spacing="s" orientation="horizontal"></kor-divider>
                    <kor-image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvGwIWciX9SVeSTp5GA1WzDwoItn1Q7vNSJg&usqp=CAU"
                        width="200px"
                        height="30px"
                        legend="Medios de Pago"
                        fit="cover"
                        style={mediosStyle}
                    ></kor-image>
                    <kor-button style={cancelarStyle} slot="footer" label="Cancelar" color="secondary" onClick={event => window.location.href = '/home'}></kor-button>
                    <div slot="footer"></div>
                    <kor-button style={comprarStyle} slot="footer" label="Confirmar Compra" onClick={event => window.location.href = '/comprado/' + data.name}></kor-button>
                </kor-card>
            </kor-grid>
        </kor-page>
    </>
    );

}

export default ProductDetails;
