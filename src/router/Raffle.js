const routes = [
    {
        path: '/Raffle',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle')
    },
    {
        path: '/Raffle/RaffleDetail',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/RaffleDetailView.vue')
    },
    {
        path: '/Raffle/Sports',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle')
    },
    {
        path: '/Raffle/Art',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle')
    },
    {
        path: '/Raffle/Fashion',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle')
    }
];

export default routes;