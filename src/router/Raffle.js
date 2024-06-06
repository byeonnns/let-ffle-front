const routes = [
    {
        path: '/Raffle/Main',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views/Raffle/Main')
    },
    {
        path: '/Raffle/Detail',
        component: () => import(/* webpackChunkName: "Raffle" */ '@/views//Raffle/Detail')
    }
];

export default routes;