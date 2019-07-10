import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import Night from '../.././components/Night/Night';
import HostelBuilds from '../../components/HostelBuilds';
import Modal from '../../components/UI/Modal/Modal';
import Order from '../../components/Order/Order';
import * as actionTypes from '../../store/actions';


const Content = styled.div`
 background: #B8B8B8;
 flex: 0 0 80%;
`;

const ContentSecond = styled.div`
 background: #E8E8E8;
 flex: 1;

`;

const ContainerList = styled.div`
 background: red;
 display: flex;
`;

class HostelList extends Component {
    
    state = {
        totalPrice: 0,
        purchasing: false
    }

    updatePurchaseState(nights) {
        
        const sum = Object.keys(nights).map(idKey => {
            return nights[idKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false});
    }
    purchaseContinueHandler = () => {
       alert('Votre commande a bien été prise en compte')
    }

    render(){
        return(
        <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <Order nights={this.props.nght} purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}/>
            </Modal>
        <ContainerList>
        <Content>
            <HostelBuilds nightsAdded={this.props.onNightAdded}/>
        </Content>
        <ContentSecond>
            <Night nights={this.props.nght} price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.nght)}
            ordered={this.purchaseHandler}/>
        </ContentSecond>
        </ContainerList> 
        </Aux>
        )
    }
}

const mapStateToProps = state => {
    return{
        nght: state.nights,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNightAdded: (thenight) => dispatch({type: actionTypes.ADD_NIGHT, nightHostel: thenight })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HostelList);