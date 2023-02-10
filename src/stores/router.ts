import { defineStore } from 'pinia';
import routerInstance from 'src/router';
import { LocalStorage } from 'quasar';
import { HeaderTab } from 'src/interface/headerTab.interface';
import { RouteRecordRaw } from 'vue-router';

export const useRouterStore = defineStore('router', {
  state: () => ({
    router: [] as RouteRecordRaw[],
    routerSearchKey: '' as string,
    headerTabs: (LocalStorage.getItem('headerTabs') ? JSON.parse(LocalStorage.getItem('headerTabs') as string) : []) as Array<HeaderTab>,
    activeTab: 'homePage'
  }),
  getters: {
    menus: (state) => state.router,
  },
  actions: {
    addRouter(routers: RouteRecordRaw[]) {
      this.router.length = 0
      this.router.concat(routers)
    },
    setHeaderTab(headerTab: HeaderTab) {
      const hasTab: Boolean = !!this.headerTabs.find(item => item.routeName == headerTab.routeName)
      if (!hasTab && headerTab.routeName !== 'homePage') {
        this.headerTabs.push(headerTab)
        LocalStorage.set('headerTabs', JSON.stringify(this.headerTabs))
      }
      if (this.activeTab !== headerTab.routeName) {
        this.activeTab = headerTab.routeName
        routerInstance.push({ name: headerTab.routeName })
      }
    },
    delHeaderTab(index: number) {
      if(this.activeTab === this.headerTabs[index].routeName){
        if(index === 0){
          routerInstance.push({ name: 'homePage' })
        }else{
          routerInstance.push({ name: this.headerTabs[index - 1].routeName })
        }
      }
      this.headerTabs.splice(index, 1)
      LocalStorage.set('headerTabs', JSON.stringify(this.headerTabs))
    },
    setActiveTab(name: string) {
      this.activeTab = name
    },
    clearLeft(index: number) {
      this.headerTabs.splice(0, index)
      const currentTab = this.headerTabs.find(item => item.routeName === this.activeTab)
      if (this.activeTab !== 'homePage' && !currentTab) {
        routerInstance.push({ name: this.headerTabs[0].routeName })
      }
      LocalStorage.set('headerTabs', JSON.stringify(this.headerTabs))
    },
    clearRight(index: number) {
      this.headerTabs.splice(index + 1, this.headerTabs.length + 1)
      const currentTab = this.headerTabs.find(item => item.routeName === this.activeTab)
      if (this.activeTab !== 'homePage' && !currentTab) {
        routerInstance.push({ name: this.headerTabs[this.headerTabs.length - 1].routeName })
      }
      LocalStorage.set('headerTabs', JSON.stringify(this.headerTabs))
    },
    clearOther(index: number) {
      // this.headerTabs.splice(0, index)
      // this.headerTabs.splice(1, this.headerTabs.length + 1)
      this.headerTabs = [this.headerTabs[index]]
      if (this.activeTab !== 'homePage' && this.headerTabs[0].routeName !== this.activeTab) {
        routerInstance.push({ name: this.headerTabs[0].routeName })
      }
      LocalStorage.set('headerTabs', JSON.stringify(this.headerTabs))
    },
    clearAll() {
      this.headerTabs.splice(0, this.headerTabs.length + 1)
      routerInstance.push({ name: 'homePage' })
      LocalStorage.remove('headerTabs')
    }
  },
});
