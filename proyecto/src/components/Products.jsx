import { React, useState } from "react";
import { stockData } from "./data";

const Products = () =>{

  let [show, toggleShow] = useState(false);
  let [datamodal, setDatamodal] = useState({
	nombre: "",
	precio: "",
	detalle: ""
  });
  
  let cantidadResultados = 0;

  const ofertarStyle = {
	background: '#3f51b5',
	margin: 'auto',
	width: '100%'
  }
  const comprarStyle = {
	background: '#f44336',
	margin: 'auto',
	width: '100%'
  }
  const handleOfertar = (e, nomProd, precio, detalle_) =>{
	window.location.replace("http://localhost:3000/ofertar/" + nomProd);
  };

  const handleComprar = (e, nomProd) => {
  	window.location.replace("http://localhost:3000/comprar/" + nomProd);
  }

  const handleClose = () => {
	toggleShow(!show);
	
  }

	const search = window.location.search;
	const params = new URLSearchParams(search);
	var textourl = (params.get('textourl') != null ? params.get('textourl') : "");
	var regionurl = (params.get('regionurl') != null ? params.get('regionurl') : "");
	var categoriaurl = (params.get('categoriaurl') != null ? params.get('categoriaurl') : "");

  	const MostrarMensajeBusqueda = ({totalResultados}) => {
  		if (totalResultados === 0) {
	  		return (
	  			<kor-text size="body-1">No hay resultados</kor-text>
	  		);
  		} else {
  			return null;
  		}
  	}

	const Resultados = (props) => {
		return (
			<>
			<kor-grid>
			{
				stockData.map((data, key) => {
					if (data.name.toLowerCase().search(props.texto.toLowerCase()) !== -1 || props.texto.trim() === "") {
						if (data.region === props.region || props.region.trim() === "") {
							if (data.categoria === props.categoria || props.categoria.trim() === "") {
								cantidadResultados += 1;
								return (
									<kor-card grid-cols="4" grid-cols-m="6" grid-cols-s="6" key={data.name}>
										<kor-text size="body-1">{data.name.slice(0, 35)}</kor-text>
										<kor-image
											width="100%"
											legend-position="inner-bottom"
											height="200px"
											theme="dark"
											fit="cover"
											src={data.image}
										>
										</kor-image>
										<kor-text size="header-1">{"$ " + data.price}</kor-text>
										<kor-button slot="footer" label="Ofertar" style={ofertarStyle} onClick = {(e) => {handleOfertar(e,data.name,data.price, data.detail);}}></kor-button>
										<div slot="footer"></div>
										<kor-button slot="footer" label="Comprar" style={comprarStyle} onClick = {(e) => {handleComprar(e, data.name);}}></kor-button>
									</kor-card>
								);
							}
						}
					}
				})
			}
			<MostrarMensajeBusqueda totalResultados={cantidadResultados}></MostrarMensajeBusqueda>
			{show && <div><Modal datamodal={datamodal} ></Modal></div>}
			</kor-grid>
			</>
		)
	}

  const Modal = (props) => {
	return (
	  <>
		<kor-modal id="functions-and-footer" visible label={"Contactar al vendedor"} >
		  <kor-icon slot="functions" button icon="more_vert"></kor-icon>
		  <kor-tabs >
			<kor-text size="body-1">{props.datamodal.nombre}</kor-text>
			<kor-text style={{ margin: 'auto' }} size="body-1">Precio: {props.datamodal.precio}</kor-text>
		  </kor-tabs>
		  <kor-text size="body-2">{props.datamodal.detalle}</kor-text>
		  <kor-tabs >
		  <kor-text  size="body-1">Desea: </kor-text>
			<kor-radio-button label="Permutar" style={{ paddingLeft : '5px' }}  active></kor-radio-button>
			<kor-radio-button label="Ofertar"  style={{ paddingLeft : '20px'  }}  ></kor-radio-button>
		  </kor-tabs>
		  <kor-input label="Numero de unidades que le interesan" value="1" type="number"></kor-input>
		 
		  <kor-input style={{
			maxHeight: '100',
			width: '100%',
			height: '60px',
			padding: '12px 20px'
		  }}  condensed="false" label="Mensaje"></kor-input>
		  
		  <kor-toggle label="Mostrar mi ciudad al vendedor"></kor-toggle>
		  <kor-button label="Enviar" style={{ margin: 'auto' }} color="Primary" onHide={handleClose} onclick={"document.querySelector('#functions-and-footer').visible = false"}></kor-button>
		</kor-modal>
	  </>
	);
  };

	return (
		<>
			<Resultados texto={textourl} region={regionurl} categoria={categoriaurl}></Resultados>
		</>
	);
}

export default Products;