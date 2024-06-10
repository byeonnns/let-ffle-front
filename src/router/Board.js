import BoardList from '../views/Board/BoardList.vue'
import Write from '../views/Board/Write.vue'
import BoardComment from '../views/Board/BoardDetail.vue'

const routes = [
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


];

export default routes;