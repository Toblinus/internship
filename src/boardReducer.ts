const initialState: never[] = [];

export enum BoardActionType {
    add_column,
    remove_column,
    edit_column,
    swap_column,
    
}

export interface IBoardAction {
    type: BoardActionType,
    payload: any
}

const boardReducer = (state = initialState, action: IBoardAction) => {
    return state;
}

export default boardReducer;