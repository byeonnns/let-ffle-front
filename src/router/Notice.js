
const routes = [
    {
        path: '/Notice',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/NoticeMainView.vue')
    },
    {
        path: '/Notice/NoticeDetail',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/NoticeDetailView')
    },
];

export default routes;