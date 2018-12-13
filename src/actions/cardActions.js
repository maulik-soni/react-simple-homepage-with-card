import * as actionTypes from '../constants/actionsTypes';

const cardLike = (cardId) => {
    return dispatch => {
        dispatch({
            type: actionTypes.CARD_LIKE,
            cardId
        })
    }
}

export default cardLike;