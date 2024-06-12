const routes = [
    {
        path: '/Raffle/Main',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/Main')
    },
    {
        path: '/Raffle/Detail',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/Detail')
    },
    {
        path: '/Raffle/Sports',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/Main')
    },
    {
        path: '/Raffle/Art',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/Main')
    },
    {
        path: '/Raffle/Fashion',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/Main')
    }
];

export default routes;