import { request } from "src/boot/axios";
import { LoginForm } from "src/interface/login.interface";

export const login = (loginForm:LoginForm) => {
  return request({
    url: '/api/auth/login',
    method: 'POST',
    data: loginForm,
    headers: {
      needToken: false
    }
  })
}
