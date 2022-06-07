import { State } from './defaultState';

export default function rootReducer (state=State, action:any){
    switch (action.type){
        case 'CREATE_NEW_NOTE':
            return {...state, notes: [...state.notes, action.payload.note_data]}
        case 'DELETE_NOTE':
            return {...state, notes:state.notes.filter((item)=> item.id !== action.payload.id)}
        default:
            return {...state}
    }
}