const routes = [
    {
        path: '/Admin',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Main'),
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Main/MainView.vue'),
        },
        {
            path: 'MemberList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Member/MemberListView.vue'),
        },
        {
            path: 'MemberDetail',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Member/MemberDetailView.vue'),
        },
        {
            path: 'CreateRaffle',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Raffle/CreateRaffleView.vue'),
        },
        {
            path: 'RaffleList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Raffle/RaffleListView.vue'),
        },
        {
            path: 'WinnerList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Winner/WinnerListView.vue'),
        },
        {
            path: 'CreateNotice',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Notice/CreateNoticeView.vue'),
        },
        {
            path: 'CreateFaq',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Notice/CreateFaqView.vue'),
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry/InquiryListView.vue'),
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