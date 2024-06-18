
const routes = [
    {
        path: '/Member',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member'),
        children: [{
            path: 'MyEntryList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyEntryList.vue')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MypageHome.vue')
        },
        {
            path: 'LikeList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/LikeList.vue')
        },
        {
            path: 'WinningList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/WinningList.vue')
        },
        {
            path: 'UpdateMember',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/UpdateMember.vue')
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/InquiryList.vue')
        },
        {
            path: 'WriteInquiry',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/WriteInquiry.vue')
        },
        {
            path: 'InquiryDetails',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/InquiryDetail.vue')
        },
        {
            path: 'MyBoardList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyBoardList.vue')
        },
        {
            path: 'MyCommentList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyCommentList.vue')
        },

        ]
    }
];

export default routes;