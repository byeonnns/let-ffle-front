import MypageNavBar from '@/views/Member/Mypage/MypageNavBar';
const routes = [
    {
        path: '/Member/Mypage',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage'),
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/MypageProfiles.vue')
            },
            {
                path: 'LoginInformation',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/LoginInformation.vue')
            },
            {
                path: 'ProfileManagement',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/ProfileManagement.vue')
            },
            {
                path: 'ApplicationDetails',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/ApplicationDetails.vue')
            },
            {
                path: 'WinningDetails',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/WinningDetails.vue')
            },
            {
                path: 'CreateInquiry',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/CreateInquiry.vue')
            },
            {
                path: 'ToInquiry',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/ToInquiry.vue')
            },
            {
                path: 'WatchList',
                component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/WatchList.vue')
            },
        ]
    },
    {
        path: '/Member/Mypage/MypageProFile',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/MypageProFile.vue')
    },
    {
        path: '/Member/Mypage/MypageProFile2',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/MypageProFile2.vue')
    },
    {
        path: '/Member/Mypage/MypageProFile3',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/MypageProFile3.vue')
    },
    {
        path: '/Member/Mypage/MypageProFile4',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/MypageProFile4.vue')
    },
    {
        path: '/Member/Mypage/ProfileManagement',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/ProfileManagement.vue')
    },
    {
        path: '/Member/Mypage/LoginInformation',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/LoginInformation.vue')
    },
    {
        path: '/Member/Mypage/ApplicationDetails',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/ApplicationDetails.vue')
    },
    {
        path: '/Member/Mypage/WinningDetails',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/WinningDetails.vue')
    },
    {
        path: '/Member/Mypage/WatchList',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/WatchList.vue')
    },
    {
        path: '/Member/Mypage/CreateInquiry',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/CreateInquiry.vue')
    },
    {
        path: '/Member/Mypage/ToInquiry',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/ToInquiry.vue')
    },
    {
        path: '/Member/Mypage/MypageNavBar',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage/MypageNavBar.vue')
    },
    {
        path: '/Member/Mypage',
        component: () => import(/* webpackChunkName: "Member" */ '@/views/Member/Mypage')
    },


];

export default routes;