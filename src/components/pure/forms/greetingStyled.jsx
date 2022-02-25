import React, { useState }from 'react';
// definiendo estilos en constantes

const loggedStyle = {
    color: 'white'
};

const unLoggedStyle ={
    color:'tomato',
    fontWeight:'bold'
}

const Greetingstyled = (props) => {

    const [logged, setLogged] = useState(false);
    return (
        <div style={logged ? loggedStyle:unLoggedStyle}>
        {logged ? <p>Hola, {props.name}</p> : <p>Por favor, logeate</p>}
            
            <button onClick={()=> setLogged(!logged) } >
                { logged ? 'Logout':'Logint' }
            </button>
        </div>
    );
}

export default Greetingstyled;
