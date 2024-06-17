
const routes = [
    {
        path: '/Notice',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice')
    },
    {
        path: '/Notice/NoticeDetail',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/NoticeDetailView')
    },


];

export default routes;