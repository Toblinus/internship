export interface IAction {
    type: 'ADD'|'REMOVE'
    id: number,
}

export interface IAddAction extends IAction {
    text: string
}

export const add = (id: number, text: string): IAddAction => ({
    type: 'ADD',
    id,
    text
})

export const remove = (id: number): IAction => ({
    type: 'REMOVE',
    id
})