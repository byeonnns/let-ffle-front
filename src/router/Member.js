
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
        }
        ]
    }

    , {
        path: '/Member/WriteInquiry',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/WriteInquiryView.vue')
    },
    {
        path: '/Member/InquiryDetails',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/InquiryDetails.vue')
    },
    {
        path: '/Member/InquiryList',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/InquiryListView.vue')
    },



];

export default routes;