import * as actionTypes from './actions';

const initialState = {
    nights: {
        hostel1: 0,
        hostel2: 0,
        hostel3: 0,
        hostel4: 0,
    },
    totalPrice: 0,
    
};
const NIGHTS_PRICES = {
    hostel1: 400,
    hostel2: 600,
    hostel3: 800,
    hostel4: 1000
};

const reducer = (state = initialState, action)=> {

    switch(action.type){
        case actionTypes.ADD_NIGHT:
            return {
             ...state,
             nights: {
                 ...state.nights,
                 [action.nightHostel]: state.nights[action.nightHostel] + 1
             },
             totalPrice: state.totalPrice + NIGHTS_PRICES[action.nightHostel]
            };
       default: return state; 
    }
};

export default reducer;