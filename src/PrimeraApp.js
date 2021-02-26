import React from 'react';
import PropTypes from 'prop-types';


// Funcional Component
const PrimeraAppp = ({ saludo, subtitulo }) => {
    // const saludos = 'Hola Mundo';

    if (! saludo){
        throw new Error( 'El saludo es neecsario' );
    }
    
    const saludosObj = {
        nombre: 'Marlon',
        edad: 40
    }

    return (
        <>  
            {/* Comentario   */}
            <h1> { saludo } </h1>
            <pre> { JSON.stringify(saludosObj, null, 3) } </pre>
            <p>{ subtitulo }</p>
        </>
        );
}

PrimeraAppp.protoTypes = {
    saludo: PropTypes.string.isRequired    
}

PrimeraAppp.defaultProps = {
    subtitulo : 'Soy un subtiulo'
}


export default PrimeraAppp;