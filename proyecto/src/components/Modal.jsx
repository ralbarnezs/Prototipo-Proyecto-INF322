import { React } from "react";

const Modal = ({ name, title}) => {

  return (


    <kor-modal id="functions-and-footer" visible label={"Contactar al vendedor:"+name}>
    <kor-icon slot="functions" button icon="more_vert"></kor-icon>
          <kor-button slot="footer" color="secondary" label="Close" onclick={"document.querySelector('#functions-and-footer').visible = false"}></kor-button>
    </kor-modal>



  );
};

export default Modal;
