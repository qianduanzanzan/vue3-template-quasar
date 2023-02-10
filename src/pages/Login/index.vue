<script lang="ts" setup>
import { reactive, Ref, ref, watch } from 'vue';
import { i18n } from 'src/boot/i18n'
import { LoginForm } from 'src/interface/login.interface';
import { login } from 'src/api/login.api';

let { locale } = i18n.global

const lang: Ref<string> = ref('zh-CN')

watch(lang, (newValue: string) => {
  console.log(newValue)
  locale.value = newValue
})

const langs = reactive([
  {
    label: '中文',
    value: 'zh-CN'
  },
  {
    label: 'English',
    value: 'en-US'
  }
])

const loginForm: LoginForm = reactive({
  account: '',
  password: ''
})

const onSubmit = () => {
  loginFun()
}

const checkoutPassword = (password: string, t: Function) => {
  const massageArr = [
    {
      condition: !password,
      message: t('pleaseInputPassword')
    },
    {
      condition: password.length < 6,
      message: t('passwordLengthMustBeGreaterThanSix')
    },
    // {
    //   condition: !/[A-z]+/.test(password),
    //   message: t('thePasswordIsTooSimple')
    // }
  ]

  for (let index = 0; index < massageArr.length; index++) {
    if (massageArr[index].condition) {
      return massageArr[index].message
    }
  }

  return true
}

const loginFun = () => {
  login(loginForm).then(res => {
    console.log(res)
  })
}
</script>

<template>
  <div class="login-page">
    <!-- {{ lang }}
    <q-select v-model="lang" :options="langs" map-options emit-value>
    </q-select> -->
    <div class="login-form">
      <div style="width: 100%;">
        <div class="title">登录</div>
        <q-form @submit="onSubmit" class="q-gutter-xs" dense>
          <q-input outlined dense v-model="loginForm.account" :label="$t('account')" :clearable="true" lazy-rules
            :placeholder="$t('pleaseInputAccount')" :rules="[val => val && val.length > 0 || $t('pleaseInputAccount')]">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input outlined dense type="password" v-model="loginForm.password" :label="$t('password')" lazy-rules
            :clearable="true" :placeholder="$t('pleaseInputPassword')" :rules="[
              val => checkoutPassword(val, $t)
            ]">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <div>
            <q-btn style="width: 100%;" :label="$t('submit')" type="submit" color="primary" />
            <!-- <q-btn :label="$t('reset')" type="reset" color="primary" flat class="q-ml-sm" /> -->
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login-page {
  width: 100vw;
  height: 100vh;
  background-image: url(assets/image/login-background.png);
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  width: 400px;
  padding: 60px 30px;
  background-color: #ffffff;

  .title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
    font-weight: bold;
  }
}

@media (max-width: 800px) {
  .login-form {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    .title {
      text-align: center;
      font-size: 30px;
      margin-bottom: 50px;
      font-weight: bold;
    }
  }
}
</style>
