import React, { useContext } from 'react'
import './index.css'
import logo from './../../assets/logo.png'
import { Form, Input, Checkbox, Button } from 'antd'
import UserService from './../../api/user'
import { createHashHistory } from 'history'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values)

        const params = {
            wechatID: values.wechatID,
            password: values.password,
        }
        UserService.passwordLogin(params).then((res) => {
            console.log(res)
            if (res.data.id) {
                localStorage.setItem('token', res.data.id)

                const history = createHashHistory()

                history.push(`/main/home`)
            }
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className="login">
            <div className="margin">
                <div className="top">
                    <img src={logo} alt="" />
                    <span>RiCO</span>
                </div>

                <div className="container">
                    <Form
                        style={{ width: '500px' }}
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="WechatID"
                            name="wechatID"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            {...tailLayout}
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
