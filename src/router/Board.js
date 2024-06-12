import BoardList from '../views/Board/index.vue'
import Write from '@/components/WriteForm.vue';
import BoardComment from '../views/Board/BoardDetail.vue'

const routes = [
    {
        path: '/Board/WriteBoard',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/WriteBoardView.vue')
    },
    {
        path: '/Board/BoardList',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board')
    },
    {
        path: '/Board/BoardDetail',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/BoardDetail')
    },


];

export default routes;