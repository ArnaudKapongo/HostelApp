import React from 'react'
import styled from 'styled-components';
import NightChoice from './NightChoice/NightChoice';

const ContentPrice = styled.div`
    
 h2 {
     padding: 2rem 0 0 2rem;
     text-transform: uppercase;
 }
`;

const FigureReview = styled.figure`
   
    margin-bottom: 2rem;
    margin: 2rem;
        button {
        background-color: white; 
        border: none;
        color: black;
        padding: 0.4rem 1rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1.6rem;
        margin-left: 1%;
        cursor: pointer;
        outline: none;
    }
    h3 {
        margin-left: 15rem;
        background: #7FFF00;
        width: 7rem;
        border-radius: 0.3rem;
        height: 3.5rem;
        text-align: left;
        text-transform: uppercase;
        padding-left: 1rem;
        padding-top: 0.8rem;
        
    }
    
`;



const Night = (props) => {
    let TheNight = Object.keys(props.nights)
    .map(keyNights => {
        return [...Array(props.nights[keyNights])].map( (_, i) => {
          return  <NightChoice key={keyNights + i} type={keyNights}/>;
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(TheNight.length === 0){
        TheNight = <p>Votre panier est pour l'instant vide</p>;
    }
    return(
        <ContentPrice>
              <h2>Panier</h2>
              <FigureReview>
                {TheNight}
                <h3>Total {props.price}</h3>
                <button disabled={!props.purchasable} onClick={props.ordered}>Commander</button>
              </FigureReview>
          </ContentPrice> 
    );
};
 
export default Night;
  