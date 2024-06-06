const routes = [
    {
        path: '/Admin/Main',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Admin/Main')
    },
    {
        path: '/Admin/Sidebar',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Admin/Sidebar')
    },
    {
        path: '/Admin/CreateRaffle',
        component: () => import(/* webpackChunkName: "Ch08RestAPI" */ '@/views/Admin/CreateRaffle')
    }
];

export default routes;