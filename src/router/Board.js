const routes = [
    {
        path: '/Board/WriteBoard',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/WriteBoardView.vue')
    },
    {
        path: '/Board/BoardList',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/BoardMain.vue')
    },
    {
        path: '/Board/BoardDetail',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/BoardDetailView.vue')
    },
    {
        path: '/Board/BoardUpdate',
        component: () => import(/* webpackChunkName: "Board" */ '@/views/Board/UpdateBoardView.vue')
    }


];

export default routes;