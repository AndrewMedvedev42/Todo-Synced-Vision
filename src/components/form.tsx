import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import createNote from 'redux/actions/createNote';

import { ISubmitValue } from 'interfaces';

export const SubmitNoteForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const submitNote = (value:ISubmitValue)=> {       
        //Validation before dispatching
        if(value.note_name.match(/[^0-9,.\s+']/g)){
            dispatch(createNote(value))
        }else{
            alert('No integer values, but you can have a mix of alpha and numeric')
        }
    }

    return (
        <Form 
            className='input-group d-flex justify-content-center'
            form={form}
            onFinish={(data)=>submitNote(data)}
        >
            <Form.Item
                name='note_name'
                rules={[
                    {
                        required: true,
                        message: 'Please provide a name for note!',
                        whitespace: true,
                    },
                    { min: 3, message: 'No less than 3 characters!' },
                ]}
            >
                <Input className='form-control' placeholder="Note's name"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" className='btn btn-primary' htmlType="submit">Submit Note</Button>
            </Form.Item>
        </Form>
    );
};