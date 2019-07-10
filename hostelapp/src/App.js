import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "./components/Navbar/Navbar";
import HostelList from "./containers/HostelList/HostelList";
import Default from "./components/Default";


const Container = styled.div`
    max-width: 120rem;
    margin: auto;
    background-color: blue;
    min-height: 57rem;
`;


function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Container>
     <Switch>
       <Route exact path="/" component={HostelList}/>
       <Route path="/default" component={Default}/>
     </Switch>
     </Container>
   </React.Fragment>
  );
}

export default App;
