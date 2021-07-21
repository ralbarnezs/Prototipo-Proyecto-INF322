import { React, useState} from 'react';



const Ad = () =>
{

  const [desc, setDesc] = useState('');
  const [link_, setLink] = useState('');
  const [nombre, setNombre] = useState('');
  const [cant, setCant] = useState(1);
  const [precio, setPrecio] = useState(1);
  const [region, setRegion] = useState('');
  const [show, setShow] = useState(false);
  

  const style = {
    margin: 'auto',
    paddingRight : '10px',
    paddingLeft : '10px',
    width: '700px',
    height: '570px',
    justifyContent: 'center'
  };

  const styleContent = {
    width: '460px',
    margin: 'auto',
    justifyContent: 'center'
  };


  const handlePublicar = () =>
  {

    console.log("Nombre producto: ", nombre);
    console.log("Cantidad: ",cant);
    console.log("Precio: ", precio);
    console.log("Descripcion: ", desc);
    console.log("Region: ", region);
    console.log("Enlace imagen: ", link_);
  
    setShow(true);
    setTimeout(function(){window.location.href = '/home';}, 2000);

  };

  const handleDesc = (evt) =>
  {
    setDesc(evt.target.value);
  }

  const handleLink = (evt) =>
  {
    setLink(evt.target.value);
  }

  const handleName = (evt) =>
  {
    setNombre(evt.target.value);
  }
  const handleNum = (evt) =>
  {
    setCant(evt.target.value);
  }
  const handlePrecio = (evt) =>
  {
    setPrecio(evt.target.value);
  }
  const handleRegion = (e, param) =>
  {
    e.preventDefault();
    setRegion(param);
  }


  return (
    <>  
      <kor-grid>
      
        <kor-card style={style} grid-cols="12" grid-rows="9">
          
          <kor-text style={styleContent} size="header-1">Publicar artículo</kor-text>
          <kor-input style={styleContent} value={nombre} onInput={handleName} label="Nombre artículo"></kor-input>
          <kor-input style={styleContent} value={desc} onInput={handleDesc} label="Descripción artículo"></kor-input>
          <kor-tabs style={styleContent}>
            <kor-input  label="Cantidad" value="1" type="text" value={cant} onInput={handleNum}></kor-input>
            <kor-input  label="Valor en CLP" value={precio} onInput={handlePrecio} type="text"></kor-input>
          </kor-tabs>
          
          <kor-input style={styleContent} label="Región" type="select">
            <kor-menu-item label="Región de Tarapacá" value="Región de Tarapacá" onClick = {(e) => { handleRegion(e, "Tarapaca");}} ></kor-menu-item>
            <kor-menu-item label="Región de Antofagasta" value="Región de Antofagasta"  onClick = {(e) => { handleRegion(e, "Antofagasta");}}></kor-menu-item>
            <kor-menu-item label="Región de Atacama" value="Región de Atacama" onClick = {(e) => { handleRegion(e, "Atacama");}}></kor-menu-item>
          </kor-input> 

          <kor-input style={styleContent} value={link_} onInput={handleLink}  label="Enlace imagen" ></kor-input>
          <kor-button color="primary" label="Publicar" style={{background: '#3f51b5', width: '140px', margin: 'auto'}} onClick={handlePublicar} ></kor-button>
          <kor-button color="secondary" label="Cancelar y volver" style={{color: "black", width: '140px', margin:"auto"}} onClick={event => window.location.href = '/home'} ></kor-button>
      
        </kor-card>
        {show && <div>
          <kor-modal id="modal" visible style={{margin:"auto"}}>
            <kor-icon icon="check_circle"  color="green" size="xl" style={{color: "green", margin: "auto"}}></kor-icon>
            <kor-text style={{ margin: "auto", align: "center" }} size="header-1">¡Publicado con éxito!</kor-text>
            <kor-text style={{ margin: "auto" , align: "center"}} size="body-1">Se le está redireccionando a la página principal.</kor-text>
          </kor-modal>
          </div>}
      
      
        </kor-grid>
      
      </>
  );

}

export default Ad;
