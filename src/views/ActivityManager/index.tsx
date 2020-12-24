import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd'
import ActivityService from '../../api/activity'
import { createHashHistory } from 'history'

const ActivityManager = () => {
    const [dataSource, useDataSource] = useState([])
    const [loading, useLoading] = useState(false)

    const history = createHashHistory()

    const handleClick = (val: any) => {
        console.log(val, 'val')
        history.push(`/${val}`)
    }

    useEffect(() => {
        const params = {
            isMy: true,
        }
        useLoading(true)
        ActivityService.getActivitys(params).then((res) => {
            console.log(res)
            useDataSource(res.data)
            useLoading(false)
        })
        // useDataSource
    }, [])

    const columns = [
        {
            title: '活动名称',
            dataIndex: 'name',
        },
        {
            title: '花费',
            dataIndex: 'cost',
        },
        {
            title: '人数限制',
            dataIndex: 'numberLimit',
        },
        {
            title: '开始时间',
            dataIndex: 'startTime',
        },
        {
            title: '结束时间',
            dataIndex: 'endTime',
        },

        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render() {
                return (
                    <>
                        <a
                            onClick={() => {
                                handleClick('activity/1')
                            }}
                        >
                            编辑
                        </a>
                    </>
                )
            },
        },
    ]

    return (
        <div className="activity-manager">
            <Table
                loading={loading}
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    )
}

export default ActivityManager
