import { Button, Box, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Formulario(props) {
    const [Cargando, setCargando] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        telefono: "",
        correo: "",
    });

    const cambiosFormulario = (evento) => {
        const { name, value } = evento.target;
        setDatosFormulario({...datosFormulario, [name]: value});
    };

    const hacerPeticion = async (datos) => {
        try {
            const response = await axios.post("http://localhost:4567/alumno", datos);
            console.log("Hacer Peticion", response);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const procesarFormulario = async (evento) => {
        evento.preventDefault();
        console.log("Datos recuperados del Form:", datosFormulario);
        setCargando(true);

        try {
            const response = await hacerPeticion(datosFormulario);
            console.log("procesarFormulario", response);
            setCargando(false);

            if (datosFormulario.nombre === response.tipousuario) {
                console.log("usuario correcto");
            } else {
                console.log("no son el mismo usuario");
            }
        } catch (error) {
            console.log("error", error);
            setCargando(false);
        }
    };

    return (
        <>
            <h1>Inicio de Sesión</h1>
            <form onSubmit={procesarFormulario}>
                <Box m={5}>
                    <TextField
                        label="Nombre: "
                        variant="outlined"
                        fullWidth
                        onChange={cambiosFormulario}
                        name="nombre"
                        value={datosFormulario.nombre}
                    />
                </Box>
                <Box m={5}>a 
                    <TextField
                        label="Numero de Teléfono:"
                        variant="outlined"
                        fullWidth
                        onChange={cambiosFormulario}
                        name="telefono"
                        value={datosFormulario.telefono}
                    />
                </Box>
                <Box m={5}>
                    <TextField
                        label="Correo:"
                        variant="outlined"
                        fullWidth
                        onChange={cambiosFormulario}
                        name="correo"
                        value={datosFormulario.correo}
                    />
                </Box>
                <Box m={5}>
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                        disabled={Cargando}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            </form>
        </>
    );
}

export default Formulario;
