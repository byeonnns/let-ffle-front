
const routes = [
    {
        path: '/Member/MyPage',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView'),
        children: [{
            path: 'MyEntryList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/MyEntryList.vue')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/MypageHome.vue')
        },
        {
            path: 'LikeList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/LikeList.vue')
        },
        {
            path: 'WinningList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/WinningList.vue')
        },
        {
            path: 'UpdateMember',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/UpdateMember.vue')
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/InquiryList.vue')
        },
        {
            path: 'WriteInquiry',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/WriteInquiry.vue')
        },
        {
            path: 'InquiryDetails',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/InquiryDetail.vue')
        },
        {
            path: 'MyBoardList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/MyBoardList.vue')
        },
        {
            path: 'MyCommentList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/MyCommentList.vue')
        },
        {
            path: 'MyBerryHistory',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/MyBerryHistory.vue')
        },
        {
            path: 'UpdateMember2',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyPageView/UpdateMember2.vue')
        },

        ]
    }
];

export default routes;