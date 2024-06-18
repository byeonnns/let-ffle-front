
const routes = [
    {
        path: '/Member',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member'),
        children: [{
            path: 'MyEntryList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyEntryListView.vue')
        },
        {
            path: '',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyHomeView.vue')
        },
        {
            path: 'LikeList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/LikeListView.vue')
        },
        {
            path: 'WinningList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/WinningListView.vue')
        },
        {
            path: 'UpdateMember',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/UpdateMemberView.vue')
        },
        {
            path: 'InquiryList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/InquiryListView.vue')
        },
        {
            path: 'WriteInquiry',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/WriteInquiryView.vue')
        },
        {
            path: 'InquiryDetails',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/InquiryDetails.vue')
        },
        {
            path: 'MyBoardList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyBoardListView.vue')
        },
        {
            path: 'MyCommentList',
            component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/MyCommentListView.vue')
        },

        ]
    }
];

export default routes;