import { State } from './defaultState';
import { INote } from 'interfaces';


export default function rootReducer (state=State, action:any){
    switch (action.type){
        case 'CREATE_NEW_NOTE':
            return {...state, notes: [...state.notes, action.payload.note_data]}
        case 'SET_NOTE_STATUS':
            return {...state, notes:state.notes.map((item:INote)=>item.id === action.payload.id ? {...item, completed: action.payload.note_data.note_status} : item)}
        case 'DELETE_NOTE':
            return {...state, notes:state.notes.filter((item:INote)=> item.id !== action.payload.id)}
        default:
            return {...state}
    }
}