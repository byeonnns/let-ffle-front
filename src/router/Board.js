import BoardList from '../views/Board/BoardList.vue'
import Write from '../views/Board/Write.vue'
import Announcement from '../views/Board/Announcement.vue'
import BoardDetail from '../views/Board/BoardDetail.vue'
import BoardComment from '../views/Board/BoardComment.vue'

const routes = [
    {
        path: '/Board/Announcement',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/Announcement')
    },
    {
        path: '/Board/Write',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/Write')
    },
    {
        path: '/Board/BoardList',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/BoardList')
    },
    {
        path: '/Board/BoardDetail',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/BoardDetail')
    },
    {
        path: '/Board/BoardComment',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/BoardComment')
    },


];

export default routes;