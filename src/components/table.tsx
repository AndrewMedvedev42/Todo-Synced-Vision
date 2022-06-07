import { useSelector, useDispatch} from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { RootState } from '../interfaces';

import deleteNote from '../redux/actions/deleteNote';

export const NoteTable:React.FC = () => {
    const ICON_SIZE = 25
    const dispatch = useDispatch()
    const {notes} = useSelector((state:RootState) => state);   
    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Created at</th>
                    <th scope='col'>Content</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {
                    notes.map((item:any)=>{
                        const {id, name, createdAt, text_content, completed} = item
                                return (
                                    <tr key={id}>
                                        <td>{name}</td>
                                        <th>{createdAt}</th>
                                        <th>{text_content}</th>
                                        <th>
                                            <button type='button' className={`btn ${!completed ? 'btn-secondary' : 'btn-success'}`}>
                                                {!completed ? <BsThreeDots size={ICON_SIZE}/> : <FaCheck size={ICON_SIZE}/>}
                                            </button>
                                        </th>
                                        <th>
                                            <button type='button' className='btn btn-danger' onClick={()=>{dispatch(deleteNote(id))}} >
                                                {<AiFillDelete size={ICON_SIZE}/>}
                                            </button>
                                        </th>
                                </tr>
                                )
                            
                    })
                }
            </tbody>
        </table>
    )
}