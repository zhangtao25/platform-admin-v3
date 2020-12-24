import React, { useContext, useState } from 'react'
import './personal-setting.css'
import { Button, Col, Modal, Row } from 'antd'
import { MyContext } from '../store/HookStore'
import { observer } from 'mobx-react-lite'

const PersonalSetting: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const store: any = useContext(MyContext)

    const handleOk = () => {
        store.handlePersonalSettingIsModalVisible(false)
    }

    const handleCancel = () => {
        store.handlePersonalSettingIsModalVisible(false)
    }

    return (
        <div>
            <Modal
                wrapClassName={'personal-setting'}
                title="个人设置"
                visible={store.getPersonalSettingIsModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
            >
                <ul>
                    <li className="row">
                        <p className="title">
                            <span className="text">手机号</span>
                            <span className="tag">未验证</span>
                        </p>

                        <div className="content">
                            <span>{store.getUserinfo.phone}</span>
                            <Button>发送验证邮件</Button>
                            <Button>修改邮箱</Button>
                        </div>
                    </li>

                    <li className="row">
                        <p className="title">
                            <span className="text">邮箱</span>
                            <span className="tag">未验证</span>
                        </p>

                        <div className="content">
                            <span>{store.getUserinfo.email}</span>
                            <Button>发送验证邮件</Button>
                            <Button>修改邮箱</Button>
                        </div>
                    </li>

                    <li className="row">
                        <p className="title">
                            <span className="text">密码</span>
                            <span className="tag">未验证</span>
                        </p>

                        <div className="content">
                            <span>*********</span>
                            <Button>修改密码</Button>
                        </div>
                    </li>
                </ul>
            </Modal>
        </div>
    )
}

export default observer(PersonalSetting)
