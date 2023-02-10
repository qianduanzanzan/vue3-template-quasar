import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useUserStore = defineStore('user', {
  state: () => ({
    token:'',
    username: 'admin',
    userId: '',
    btnPermissions: {},
    avatar: 'https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500',
    roleName: '',
    roleId: '',
    departmentName: '',
    departmentId: ''
  }),
  actions: {
    initUserInfo(){
      // const userInfoStr:string | null = LocalStorage.getItem('userInfo')
      // if(userInfoStr){
      //   const userInfo:any = JSON.parse(JSON.stringify(userInfoStr))
      // }
    }
  },
});
