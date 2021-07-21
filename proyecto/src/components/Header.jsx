import  React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    const styles = {
        background: '#3f51b5',
        paddingRight : '10px',
        paddingLeft: '10px',
        color: 'blue'
    };
    const iconBar = {
        paddingRight: '10px',
        paddingLeft: '5px'
    };
    return (
        <kor-app-bar slot="top" style={styles} theme="dark">
            <kor-icon icon="shopping_cart" color="var(--text-1)" size="l" style={iconBar}></kor-icon>
            <Link to="/home">
                <kor-text size="header-1">USM Store</kor-text>
            </Link>
            <kor-button slot="functions" label="Publicar" style={{background: '#f44336'}} onClick={event =>  window.location.href='/publicar'} ></kor-button>
            <kor-avatar
                slot="functions"
                label="Manuel Rojas"
                info="Mi cuenta"
                image="http://localhost:3000/images/profile.jpg"
                style={{paddingLeft: '10px'}}
            >
            </kor-avatar>
        </kor-app-bar>
    );
}
export default Header;