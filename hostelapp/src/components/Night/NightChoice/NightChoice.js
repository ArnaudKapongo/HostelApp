import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import myImage1 from '../../../img/hotel1.jpg';
import myImage2 from '../../../img/hotel2.jpg';
import myImage3 from '../../../img/hotel3.jpg';
import myImage4 from '../../../img/hotel4.jpg';



const Figcaption = styled.figcaption`
    display:flex;
    background: white;
    margin-bottom: 0.8rem;
    img{
        height: 7rem;
        width: 8rem;
        border-top-left-radius: 0.2em;
        border-bottom-left-radius: 0.2em;
        
    }
    h1 {
        padding: 0.9rem;   
    } 
    
`;
const DetailHostelTotal = styled.div`
    display: flex;
    align-items:center;
    p {
        font-size: 1.5rem;
        
    }
    div {
        flex-direction: column;
        margin-left: auto;
        padding: 0.9rem;
        
    }
`;

const Price = styled.p`
 font-size: 1.9rem;
 padding-left: 5rem;
`;
const NightPrice = styled.p`
 font-size: 0.2rem;
 color: lightgray;
 padding-left: 5rem;
`;

class NightChoice extends Component {
    render(){
        let night = null;

        switch (this.props.type) {
            case ('hostel1'):
                night = (   
                <Figcaption>
                 <img src={myImage1} alt='hostel1'/>
                 <div>
                     <DetailHostelTotal>
                     <div>
                     <Price>400 €</Price>
                     <NightPrice>prix/nuit</NightPrice>
                     </div>
                    </DetailHostelTotal>                    
                 </div>
                </Figcaption>);
                break;
            case ('hostel2'):
                        night = (
                        <Figcaption>
                         <img src={myImage2} alt='hostel2'/>
                         <div>
                             <DetailHostelTotal>
                             <div>
                             <Price>600 €</Price>
                             <NightPrice>prix/nuit</NightPrice>
                             </div>
                            </DetailHostelTotal>
                         </div>
                        </Figcaption>
                );
                        break;
                case ('hostel3'):
                                night = (<Figcaption>
                                 <img src={myImage3} alt='hostel3'/>
                                 <div>
                                     <DetailHostelTotal>
                                     <div>
                                     <Price>800 €</Price>
                                     <NightPrice>prix/nuit</NightPrice>
                                     </div>
                                    </DetailHostelTotal>
                                 </div>                                
                                 </Figcaption>
                                );
                                break;
                    case ('hostel4'):
                                        night = (
                                        <Figcaption>
                                         <img src={myImage4} alt='hostel4'/>
                                         <div>
                                             <DetailHostelTotal>
                                             <div>
                                             <Price>1000 €</Price>
                                             <NightPrice>prix/nuit</NightPrice>
                                             </div>
                                            </DetailHostelTotal>
                                         </div>
                                        </Figcaption>);
                                        break;
                    default: night = null;
        }
        return night;
    }
};

NightChoice.propTypes = {
    type: PropTypes.string.isRequired
};


export default NightChoice;