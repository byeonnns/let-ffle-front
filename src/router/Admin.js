const routes = [
    {
        path: '/Admin/Main',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Main')
    },
    {
        path: '/Admin/Sidebar',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Sidebar')
    },
    {
        path: '/Admin/Raffle',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Raffle')
    },
    {
        path: '/Admin/Raffle/CreateRaffle',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Raffle/CreateRaffle')
    },
    {
        path: '/Admin/Raffle/RaffleList',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Raffle/RaffleList')
    },
    {
        path: '/Admin/Inquiry',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry')
    },
    {
        path: '/Admin/Inquiry/CreateFaq',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry/CreateFaq.vue')
    },
    {
        path: '/Admin/Inquiry/CreateNotice',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry/CreateNotice.vue')
    },
    {
        path: '/Admin/Inquiry/Reply',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/Inquiry/Reply.vue')
    }
];

export default routes;