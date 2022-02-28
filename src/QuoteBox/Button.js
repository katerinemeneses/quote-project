import React from 'react';

const Button = ({fracesAleatoria}) => {
    return (
        <div class="containerButton">
         <button onClick={fracesAleatoria}><i className="fa-solid fa-circle-chevron-right"></i></button>
        </div>
    );
};

export default Button;