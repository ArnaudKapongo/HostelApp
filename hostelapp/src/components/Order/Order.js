import React from 'react';
import Aux from '../.././hoc/Aux';

const order = (props) => {
    const orderNights = Object.keys(props.nights)
    .map( idKey => {
        return (<li><span>{idKey}</span>: {props.nights[idKey]}</li>);
    });
    return(
        <Aux>
            <h3>Votre commande</h3>
            <p>Veuillez renseigner les informations ci-dessous</p>
            {orderNights}
            <p><strong>Total: {props.price}</strong></p>
            <br/>
            <br/>
            <button onClick={props.purchaseCancelled}>Annuler</button>
            <button onClick={props.purchaseContinued}>Continue</button>
        </Aux>
    );
};

export default order;