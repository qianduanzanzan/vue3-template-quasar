import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { i18n } from 'src/boot/i18n'

export const useAppStore = defineStore('app', {
  state: () => ({
    lang: LocalStorage.getItem('lang') || 'zh-CN'
  }),
  actions: {
    setLang(lang:string){
      LocalStorage.set('lang',lang)
      this.lang = lang
      let { locale }:any = i18n.global
      locale = lang
    }
  },
});
