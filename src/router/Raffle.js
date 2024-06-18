const routes = [
    {
        path: '/Raffle',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/RaffleMainView.vue')
    },
    {
        path: '/Raffle/RaffleDetail',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/RaffleDetailView.vue')
    }
    
];

export default routes;