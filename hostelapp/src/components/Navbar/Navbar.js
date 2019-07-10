import React  from 'react';
import styled from 'styled-components';
import Aux from '../../hoc/Aux';


const HeaderStyle = styled.header`
    height: 3.5rem;
    background-color: #808080;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        color: black;
        margin-left: 9rem;
        font-family: 'Muli', sans-serif;
        text-transform: uppercase;
        background: white;
        padding: 0 2rem 0 2rem;
        border-radius: 0.5rem;
    }
    button {
        padding: 0.5rem 2rem 0.5rem 2rem;
        font-family: 'Muli', sans-serif;
        border-radius: 0.5rem;
        text-transform: uppercase;
        
    }
`;

const NavStyle = styled.nav`

 width: 16%;
 align-self: stretch;
 display: flex;
 align-items:center;
 justify-content: space-between;
 margin-right: 3rem;
`;

const Navbar = (props) => (
            <Aux>
            <HeaderStyle>
                <h1>Logo</h1>
                <NavStyle>
                <button>
                    S'inscrire
                </button>
                <button>
                    Connexion
                </button>
                </NavStyle>
            </HeaderStyle>
            <main>
                {props.children}
            </main>
            </Aux>
);

export default Navbar;