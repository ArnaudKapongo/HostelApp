import React from 'react';
import styled from 'styled-components';





const FigureHostel = styled.figure`
 
`;

const FigureReview = styled.figure`
    margin-bottom: 2rem;
    background: white;
    margin: 2rem ;
    border-radius: 2em;
`;


const Figcaption = styled.figcaption`
    display:flex;
    img{
        height: 15rem;
        width: 20%;
        border-top-left-radius: 2em;
        border-bottom-left-radius: 2em;
        
    }
    h2 {
        padding: 0.9rem;   
    } 
    button {
        background-color: #e7e7e7; 
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
    
`;

const DetailHostel = styled.div`
    display: flex;
    align-items:center;
    
    
    div {
        flex-direction: column;
        margin-left: auto;
        padding: 0.9rem;
    }
`;
const Paragraph = styled.p`
    padding: 0.9rem;
    color: #BEBEBE;
    
`;
const Price = styled.p`
 font-size: 1.9rem;
`;
const NightPrice = styled.p`
 font-size: 1rem;
 color: lightgray;
`;

const  hostelBuild = (props) => (
    <FigureHostel>
        <FigureReview>
                <Figcaption>
                 <img src={props.image} alt={props.alt}/>
                 <div>
                     <DetailHostel>
                     <h2>Hotel de la plage</h2> 
                     <div>
                     <Price>{props.prices}</Price>
                     <NightPrice>prix/nuit</NightPrice>
                     </div>
                    </DetailHostel>
                     <Paragraph>
                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                     ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                     In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum 
                     </Paragraph>
                     <button onClick={props.added}>ajouter</button>
                 </div>
                </Figcaption>
                </FigureReview>
    </FigureHostel>
);

export default hostelBuild;