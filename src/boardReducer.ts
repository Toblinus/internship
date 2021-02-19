const initialState = [];

export enum BoardActionType {

}

export interface IBoardAction {
    type: BoardActionType,
    payload: any
}

const boardReducer = (state = initialState, action: IBoardAction) => {
    return state;
}

export default boardReducer;