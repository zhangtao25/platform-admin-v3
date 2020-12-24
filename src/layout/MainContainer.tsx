import React, { useContext, useEffect, useState } from 'react'
import SideBar from './SideBar'
import { renderRoutes } from 'react-router-config'
import routes from '../router'
import './MainContainer.css'
import PersonalSetting from './../modal/PersonalSetting'
import TopBar from './TopBar'
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars'
import { Button, Popover } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import UserService from './../api/user'
import { observer } from 'mobx-react-lite'
import { MyContext } from '../store/HookStore'

const MainContainer: React.FC = (props: any) => {
    const scroll = { height: '100vh' }
    console.log(props.route.routes, 'routes')

    // handleUserinfo

    const store: any = useContext(MyContext) // 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。

    useEffect(() => {
        UserService.myInfo().then((res) => {
            console.log(res)

            store.handleUserinfo(res.data)
        })
    }, [])

    return (
        <div className="main-container">
            {/*{JSON.stringify(store.getUserinfo)}*/}
            <div className="margin">
                <SideBar />
                <div style={{ flex: 1 }}>
                    <Scrollbars style={scroll}>
                        <div className="right-container">
                            <TopBar />
                            {renderRoutes(props.route.routes)}
                        </div>
                    </Scrollbars>
                </div>
                {/*以下是全局的model*/}
                <PersonalSetting />

                <Popover
                    trigger="click"
                    placement="topRight"
                    content={
                        <div>
                            <p>Content</p>
                            <p>Content</p>
                        </div>
                    }
                    title="Title"
                >
                    <InfoCircleOutlined className="introduction" />
                    {/*<Button type="primary">Hover me</Button>*/}
                </Popover>
            </div>
        </div>
    )
}

export default observer(MainContainer)
