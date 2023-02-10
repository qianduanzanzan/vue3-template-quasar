import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    meta:{
      inMenu: false,
      keepAlive: false
    },
    component: () => import('pages/Login/index.vue')
  },
  {
    path: '/',
    component: () => import('layouts/index.vue'),
    children: [
      {
        path: '',
        name: 'homePage',
        meta:{
          label: '首页'
        },
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/test',
        name: 'test',
        meta:{
          label: '测试'
        },
        component: () => import('pages/Test/index.vue')
      },
      {
        path: '/test1',
        name: 'test1',
        meta:{
          label: '测试1'
        },
        component: () => import('pages/Test/index.vue')
      },
      {
        path: '/test2',
        name: 'test2',
        meta:{
          label: '测试2'
        },
        component: () => import('pages/Test/index.vue')
      },
      {
        path: '/test3',
        name: 'test3',
        meta:{
          label: '测试3'
        },
        component: () => import('pages/Test/index.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
