import { Button } from 'antd'
import React from 'react'
import './Header.css'
import base64img from './../assets/base64img'
const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <img className="logo" src={base64img.logo} alt="" />
                <ul className="nav">
                    <li>首页</li>
                </ul>
            </div>

            <div className="right">
                <p className="mini">
                    <img src={base64img.qr_logo} alt="" />
                    小程序
                    <div className="Mini-Program-QR-code">
                        <img src={base64img.qr} alt="" />
                        <div data-v-5143b103="" className="tips">
                            微信扫一扫，使用小程序
                        </div>
                    </div>
                </p>
                <button>登录</button>
            </div>
        </div>
    )
}

export default Header
