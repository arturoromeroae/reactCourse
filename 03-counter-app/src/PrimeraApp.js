// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// FC functional components
//                      Valor por defecto en caso no se envie
// const PrimeraApp = ({saludo = "Hola Mundo" (default value forma 1)}) => {
const PrimeraApp = ({saludo, subtitulo}) => {
    // const saludo = 'Hola Mundo';
    // const objeto = {
    //     name: 'arturo',
    //     edad: 28
    // }
    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1>{saludo}</h1> */}
            {/* <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>

        // <div>
        //     <h1>Hola Mundo</h1>
        //     <p>Mi primer componente</p>
        // </div>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;