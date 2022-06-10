import { v4 as uuidv4 } from 'uuid';
import { Dispatch } from 'redux'
import { setCreationDate } from 'modules';

import { ISubmitValue } from 'interfaces';

const createNote = (data:ISubmitValue) => async (dispatch:Dispatch) => {
    dispatch({
            type:'CREATE_NEW_NOTE',
            payload:{
                note_data: {
                    id:uuidv4(),
                    name:data.note_name,
                    createdAt:setCreationDate(),
                    completed:false,
                },
        }
    })    
}
export default createNote