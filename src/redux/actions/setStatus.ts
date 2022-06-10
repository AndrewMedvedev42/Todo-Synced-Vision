import { Dispatch } from 'redux'

const setStatus = (id:string, completed:boolean) => async (dispatch:Dispatch) => {   
    dispatch({
            type:'SET_NOTE_STATUS',
            payload:{
                id:id,
                note_data: {
                    note_status:!completed,
                },
        }
    }) 
    
}
export default setStatus