import { Layout, Menu, Breadcrumb } from 'antd'
import React, { useContext } from 'react'
import './PageView.css'
import { renderRoutes } from 'react-router-config'
import routes from './../router/index' // 导入路由配置文件

import { createHashHistory } from 'history'
import { MyContext } from '../store/HookStore'
import { observer } from 'mobx-react-lite' // 是hash路由 history路由 自己根据需求来定

const { Header, Content, Footer } = Layout

const PageView = () => {
    const history = createHashHistory()

    const store: any = useContext(MyContext)

    const handleClick = (val: any) => {
        console.log(val, 'val')
        history.push(`/${val.key}`)

        store.handleVersion()
    }

    return (
        <Layout className="layout" id="components-layout-demo-top">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    onClick={handleClick}
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                >
                    <Menu.Item key="home">nav 1</Menu.Item>
                    <Menu.Item key="ActivityManager">nav 2</Menu.Item>
                    <Menu.Item key="Test">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {renderRoutes(routes)}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED {store.getVersion}
            </Footer>
        </Layout>
    )
}

export default observer(PageView)
