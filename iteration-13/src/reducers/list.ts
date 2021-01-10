import { IAction, IAddAction } from '../actions';
import { IListItemData } from '../store';


export default (state: IListItemData[] = [
    {
        id: 1,
        text: "item: 1"
    }, {
        id: 2,
        text: "this is item: 2"
    }, {
        id: 3,
        text: "is item: 3"
    }
], action: IAction) => {
    switch(action.type){
        case 'ADD':
            const { id, text } = action as IAddAction;
            return [
                ...state, {
                    id,
                    text
                }
            ];

        case 'REMOVE':
            return [...state].filter(item => item.id != action.id);
        
        default:
            return state;
    }
}