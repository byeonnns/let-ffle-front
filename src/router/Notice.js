
import Write from '../views/Notice/Write.vue'
import Announcement from '../views/Notice/index.vue'
import BoardDetail from '../views/Notice/NoticeDetailView.vue'

const routes = [
    {
        path: '/Notice',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice')
    },
    {
        path: '/Notice/Write',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/Write')
    },
    {
        path: '/Notice/NoticeDetail',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/NoticeDetailView')
    },


];

export default routes;