import React  from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from '../interfaces';
import { AiFillDelete } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import { MdPending } from 'react-icons/md';
import deleteNote from '../redux/actions/deleteNote';
import setStatus from '../redux/actions/setStatus';

import { INote } from 'interfaces';

import { Props } from 'types';

export const Table:React.FC<Props> = ({is_completed}) => {
    const ICON_SIZE = 25
    const dispatch = useDispatch()
    const {notes} = useSelector((state:RootState) => state); 
    return (
        <table className='table'>
        <thead className='bg-primary text-white'>
            <tr>
                <th>Note name</th>
                <th>Created At</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                notes.filter((item:INote)=>item.completed === is_completed).length ? (
                    notes
                        .filter((item:INote)=>item.completed === is_completed)
                        .map((item:INote)=>{
                        const {id, name, createdAt, completed} = item
                                return (
                                    <tr key={id} className={`${completed && 'table-success'}`}>
                                        <th>{name}</th>
                                        <th>{createdAt}</th>
                                        <th className='col-1'>
                                            <button 
                                                type='button' 
                                                className={`w-100 btn ${!completed ? 'btn-secondary' : 'btn-success'}`}
                                                onClick={()=>{dispatch(setStatus(id, completed))}}
                                            >
                                                {!completed ? <MdPending size={ICON_SIZE}/> : <FaCheck size={ICON_SIZE}/>}
                                            </button>
                                        </th>
                                        <th className='col-1'>
                                            <button 
                                                type='button' 
                                                className='w-100 btn btn-danger' 
                                                onClick={()=>{dispatch(deleteNote(id))}}
                                            >
                                                {<AiFillDelete size={ICON_SIZE}/>}
                                            </button>
                                        </th>
                                </tr>
                                )
                            
                    })
                ):(
                    <tr className='border'>
                        <th>---</th>
                        <th>---</th>
                    </tr>
                )
            }
        </tbody>
    </table>
    )
}