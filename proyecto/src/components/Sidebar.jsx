import { React, useState } from "react";
import { Redirect } from 'react-router-dom';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';

const Sidebar = () => {
    const [text, setText] = useState('')
    const [region, setRegion] = useState('')
    const [categoria, setCategoria] = useState('')
    const handleSubmit = (e, param1, param2, param3) => {
        e.preventDefault();
        window.location.replace("http://localhost:3000/home?textourl=" + param1 + "&regionurl=" + param2 + "&categoriaurl=" + param3);
    }
    const formStyle = {
        overflow: 'hidden'
    }
    return (
        <>
            <form noValidate autoComplete="off" style={formStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="Búsqueda" onChange={event => setText(event.target.value)} style={{width: '100%'}} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            label="Filtrar por región"
                            value={region}
                            onChange={event => setRegion(event.target.value)}
                            style={{width: '100%'}}
                        >
                            <MenuItem key="Región de Arica y Parinacota" value="Región de Arica y Parinacota" >{"Región de Arica y Parinacota"}</MenuItem>
                            <MenuItem key="Región de Tarapacá" value="Región de Tarapacá">{"Región de Tarapacá"}</MenuItem>
                            <MenuItem key="Región de Antofagasta" value="Región de Antofagasta" >{"Región de Antofagasta"}</MenuItem>
                            <MenuItem key="Región de Atacama" value="Región de Atacama" >{"Región de Atacama"}</MenuItem>
                            <MenuItem key="Región de Coquimbo" value="Región de Coquimbo" >{"Región de Coquimbo"}</MenuItem>
                            <MenuItem key="Región de Valparaíso" value="Región de Valparaíso" >{"Región de Valparaíso"}</MenuItem>
                            <MenuItem key="Región Metropolitana" value="Región Metropolitana" >{"Región Metropolitana"}</MenuItem>
                            <MenuItem key="Región de O'higgins" value="Región de O'higgins" >{"Región de O'higgins"}</MenuItem>
                            <MenuItem key="Región del Maule" value="Región del Maule" >{"Región del Maule"}</MenuItem>
                            <MenuItem key="Región de Ñuble" value="Región de Ñuble" >{"Región de Ñuble"}</MenuItem>
                            <MenuItem key="Región del BioBío" value="Región del BioBío" >{"Región del BioBío"}</MenuItem>
                            <MenuItem key="Región de La Araucanía" value="Región de La Araucanía" >{"Región de La Araucanía"}</MenuItem>
                            <MenuItem key="Región de Los Ríos" value="Región de Los Ríos" >{"Región de Los Ríos"}</MenuItem>
                            <MenuItem key="Región de Los Lagos" value="Región de Los Lagos" >{"Región de Los Lagos"}</MenuItem>
                            <MenuItem key="Región de Magallanes y Antártica" value="Región de Magallanes y Antártica" >{"Región de Magallanes y Antártica"}</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            label="Filtrar por categoría"
                            value={categoria}
                            onChange={event => setCategoria(event.target.value)}
                            style={{width: '100%'}}
                        >
                            <MenuItem key="Permutas" value="Permutas">{"Permutas"}</MenuItem>
                            <MenuItem key="Ventas" value="Ventas">{"Ventas"}</MenuItem>
                            <MenuItem key="Permutas y ventas" value="Permutas y ventas">{"Permutas y ventas"}</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick = {(e) => handleSubmit(e, text, region, categoria)}>Buscar</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
export default Sidebar;