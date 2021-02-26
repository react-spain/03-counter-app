import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Funcional Component
const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(  value  );
    

    if (! value){
        throw new Error( 'El value es necesario' );
    }

    // handleAdd
    const handleAdd = () =>{
        // setCounter ( counter + 1 );
        setCounter( (c)=> c + 1); 
    }

    // handleSustrat
    const handleSustrat = () =>{ setCounter( (c)=> c - 1) }

    // handleReset
    const handleReset = () =>{
        // setCounter ( counter - 1 );
        setCounter( (c)=> value ); 
    }

    return (
        <>  
            <h1> CounterApp </h1>
            <h2>{ counter }</h2>
            <button onClick={ ( handleSustrat ) }>-1</button>
            <button onClick={ ( handleReset ) }>Reset</button>
            <button onClick={ ( handleAdd ) } >+1</button>
        </>
        );
}

CounterApp.protoTypes = {
    value: PropTypes.number
}

export default CounterApp;