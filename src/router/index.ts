import { RouteConfig } from 'react-router-config'

import Home from '../views/Home'
import ActivityManager from '../views/ActivityManager'
import Activity from '../views/Activity'
import Test from '../views/Test'
import MainContainer from '../layout/MainContainer'
import Login from '../views/Login'

const routes: RouteConfig[] = [
    {
        path: '/main',
        component: MainContainer,
        routes: [
            {
                path: '/main/home',
                component: Home,
            },
            {
                path: '/main/ActivityManager',
                component: ActivityManager,
            },
            {
                path: '/main/Activity/:id',
                component: Activity,
            },
            {
                path: '/main/Test',
                component: Test,
            },
        ],
    },
    {
        path: '/login',
        component: Login,
    },
    // {
    //   path: "/home",
    //   component: Home,
    // },
    // {
    //   path: "/ActivityManager",
    //   component: ActivityManager,
    // },
    // {
    //   path: "/Activity/:id",
    //   component: Activity,
    // },
    // {
    //   path: "/Test",
    //   component: Test,
    // },
]

export default routes
