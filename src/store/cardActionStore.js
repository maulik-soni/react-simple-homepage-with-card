import * as actionTypes from '../constants/actionsTypes';

export default function sampleStore(state={}, action) {
    let newState = {};
    switch(action.type){
        case actionTypes.CARD_LIKE:
            newState = state;
            let likedCards = state.likedCards||[];
            let cardId = action.cardId;
            likedCards.indexOf(cardId) > -1 ? likedCards.splice(likedCards.indexOf(cardId),1) : likedCards.push(action.cardId);
            newState.likedCards = likedCards;
            return {...state, ...newState};
        
        default:
            return state;
    }
}