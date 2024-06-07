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
        path: '/Admin/CreateRaffle',
        component: () => import(/* webpackChunkName: "Admin" */ '@/views/Admin/CreateRaffle')
    }
];

export default routes;