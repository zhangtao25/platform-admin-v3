import React, { useContext, useState } from 'react'
import { Drawer, Button, Menu, Dropdown, Tooltip } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import touxiang from './../assets/touxiang.jpg'
import './SideBar.css'
import {
    AlertOutlined,
    ApartmentOutlined,
    AppstoreOutlined,
    CalendarOutlined,
    DownOutlined,
    FundOutlined,
    LeftCircleOutlined,
    RightOutlined,
    ScissorOutlined,
    SettingOutlined,
    ZoomInOutlined,
} from '@ant-design/icons'
import { createHashHistory } from 'history'
import { MyContext } from '../store/HookStore'
import { observer } from 'mobx-react-lite'

const SideBar: React.FC = () => {
    const store: any = useContext(MyContext)

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <div
                    className="dropdown-menu"
                    onClick={() => {
                        store.handlePersonalSettingIsModalVisible(true)
                    }}
                >
                    <img src={store.getUserinfo.avatarUrl} alt="" />
                    <div className="text">
                        <p>{store.getUserinfo.nickName}</p>
                        <p>邀请码：905019</p>
                    </div>
                    <RightOutlined />
                </div>
            </Menu.Item>
        </Menu>
    )

    const history = createHashHistory()

    const handleClick = (val: any) => {
        console.log(val, 'val')
        history.push(`/main/${val.key}`)

        // store.handleVersion()
    }

    // const store:any = useContext(MyContext);

    return (
        <div className="side-bar">
            <div className="personal-center">
                <Dropdown overlay={menu} trigger={['click']}>
                    {/*<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>*/}
                    {/*  Click me <DownOutlined />*/}
                    {/*</a>*/}

                    <div className="dropdown-wrap">
                        <img
                            className="avatar"
                            src={store.getUserinfo.avatarUrl}
                            alt=""
                        />
                        <span className="nickname">
                            {store.getUserinfo.nickName}
                        </span>
                        <DownOutlined />
                    </div>
                </Dropdown>
            </div>

            {/*Shortcut button*/}

            <ul className="shortcut-button">
                <li>
                    <Tooltip placement="bottom" title={<div>手气不错</div>}>
                        <ZoomInOutlined />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip placement="bottom" title={<div>手气不错</div>}>
                        <ScissorOutlined />
                    </Tooltip>
                </li>

                <li>
                    <Tooltip placement="bottom" title={<div>手气不错</div>}>
                        <AlertOutlined />
                    </Tooltip>
                </li>

                <li>
                    <Tooltip placement="bottom" title={<div>手气不错</div>}>
                        <FundOutlined />
                    </Tooltip>
                </li>

                <li>
                    <Tooltip placement="bottom" title={<div>手气不错</div>}>
                        <ApartmentOutlined />
                    </Tooltip>
                </li>
            </ul>

            <Menu onClick={handleClick}>
                <Menu.Item icon={<CalendarOutlined />} key="ActivityManager">
                    活动管理
                </Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />}>发起活动</Menu.Item>
                <Menu.Item icon={<SettingOutlined />}>活动模板</Menu.Item>
            </Menu>
        </div>
    )
}

export default observer(SideBar)
