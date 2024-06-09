
import Write from '../views/Notice/Write.vue'
import Announcement from '../views/Notice/index.vue'
import BoardDetail from '../views/Notice/BoardDetail.vue'
import BoardComment from '../views/Notice/BoardComment.vue'
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
        path: '/Notice/BoardDetail',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/BoardDetail')
    },
    {
        path: '/Notice/BoardComment',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/BoardComment')
    },

];

export default routes;