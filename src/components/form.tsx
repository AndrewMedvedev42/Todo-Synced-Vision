import {
  Form,
  Input,
  Button,
} from 'antd';

import { onFinish } from '../hooks';

const { TextArea } = Input;

export const FormDisabledDemo = () => {
    const [form] = Form.useForm();
    return (
        <Form 
            form={form}
            onFinish={onFinish}>
        <Form.Item
            name="firstName"
            rules={[
                {
                    required: true,
                    message: 'Please provide a name!',
                    whitespace: true,
                },
                { min: 3, message: 'No more than 3 characters!' },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Button</Button>
        </Form.Item>
        </Form>
    );
};