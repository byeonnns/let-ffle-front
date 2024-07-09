const routes = [
    {
        path: '/Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin'),
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/AdminMain.vue')
        },
        {
            path: 'MemberList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/MemberList.vue')
        },
        {
            path: 'MemberDetail',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/MemberDetail.vue')
        },
        {
            path: 'CreateRaffle',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateRaffle.vue')
        },
        {
            path: 'UpdateRaffle',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/UpdateRaffle.vue')
        },
        {
            path: 'RaffleList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/RaffleList.vue')
        },
        {
            path: 'WinnerList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/WinnerList.vue')
        },
        {
            path: 'CreateNotice',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateNotice.vue')
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/InquiryList.vue')
        },
        {
            path: 'RaffleMonitorList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/RaffleMonitorList.vue')
        },
        {
            path: 'RaffleMonitorDetail',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/RaffleMonitorDetail.vue')
        }
        ]
    },
];

export default routes;