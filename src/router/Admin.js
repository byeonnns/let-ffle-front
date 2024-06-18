const routes = [
    {
        path: '/Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin'),
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/AdminMain.vue'),
        },
        {
            path: 'MemberList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/MemberList.vue'),
        },
        {
            path: 'MemberDetail',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/MemberDetail.vue'),
        },
        {
            path: 'CreateRaffle',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateRaffle.vue'),
        },
        {
            path: 'RaffleList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/RaffleList.vue'),
        },
        {
            path: 'WinnerList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/WinnerList.vue'),
        },
        {
            path: 'CreateNotice',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateNotice.vue'),
        },
        {
            path: 'CreateFaq',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateFaq.vue'),
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/InquiryList.vue'),
        },
        {
            path: 'RaffleMonitor',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/RaffleMonitor.vue'),
        }
        
    ]
    },
    // {
    //     path: '/Admin/Sidebar',
    //     component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Sidebar')
    // },
    // {
    //     path: '/Admin/Inquiry',
    //     component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry')
    // },
    // {
    // {
    //     path: '/Admin/Inquiry/Reply',
    //     component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry/Reply.vue')
    // },
   
    
];

export default routes;