import * as actions from '../../actionTypes/index'

export const changePage = (pageNumber) => {
    return {
        type: actions.CHANGE_PAGE,
        payload: pageNumber
    };
}

