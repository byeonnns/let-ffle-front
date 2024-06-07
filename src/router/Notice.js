import BoardList from '../views/Notice/BoardList.vue';
import Write from '../views/Notice/Write.vue'
import Announcement from '../views/Notice/Announcement.vue'
import BoardDetail from '../views/Notice/BoardDetail.vue'
import BoardComment from '../views/Notice/BoardComment.vue'
const routes = [
    {
        path: '/Notice/Announcement',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/Announcement')
    },
    {
        path: '/Notice/Write',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/Write')
    },
    {
        path: '/Notice/BoardList',
        component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice/BoardList')
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