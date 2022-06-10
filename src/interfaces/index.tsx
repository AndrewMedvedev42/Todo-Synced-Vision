export interface RootState {
    notes:[],
}

export interface ISubmitValue {
    note_name:string
}

export interface INote {
    id:string, 
    name:string, 
    createdAt:string, 
    completed:boolean
}
