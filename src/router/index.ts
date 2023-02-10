import { route } from 'quasar/wrappers';
import { toRouteType } from 'src/interface/router.instance';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { useRouterStore } from 'src/stores/router';

import routes from './routes';
import { HeaderTab } from 'src/interface/headerTab.interface';


// const routerStore = useRouterStore()

// export default route(function () {
//   const createHistory = process.env.SERVER
//     ? createMemoryHistory
//     : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

//   const Router = createRouter({
//     scrollBehavior: () => ({ left: 0, top: 0 }),
//     routes,

//     // Leave this as is and make changes in quasar.conf.js instead!
//     // quasar.conf.js -> build -> vueRouterMode
//     // quasar.conf.js -> build -> publicPath
//     history: createHistory(process.env.VUE_ROUTER_BASE),
//   });

//   return Router;
// });


const createHistory = process.env.SERVER
  ? createMemoryHistory
  : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createHistory(process.env.VUE_ROUTER_BASE),
});

Router.beforeEach((to:toRouteType, _from, next) => {
  const routerStore = useRouterStore()
  const headerTab:HeaderTab = {
    label: to.meta?.label as string,
    routeName: to.name as string
  }
  routerStore.setHeaderTab(headerTab)
  next()
})


export default Router
