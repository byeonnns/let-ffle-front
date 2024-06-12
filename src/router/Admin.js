const routes = [
    {
        path: '/Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin'),
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/MainView.vue'),
        },
        {
            path: 'MemberList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/MemberListView.vue'),
        },
        {
            path: 'CreateRaffle',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateRaffleView.vue'),
        },
        {
            path: 'RaffleList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/RaffleListView.vue'),
        },
        {
            path: 'WinnerList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/WinnerListView.vue'),
        },
        {
            path: 'CreateNotice',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateNoticeView.vue'),
        },
        {
            path: 'CreateFaq',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateFaqView.vue'),
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/InquiryListView.vue'),
        },
        
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