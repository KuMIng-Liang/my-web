
<template>

  <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      hideRequiredMark
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
    >
      <a-input placeholder="请输入用户名" v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码' },{ min: 6,max: 20, message: '密码长度在 6 到 20 个字符' }]"
    >
      <a-input-password placeholder="请输入密码" v-model:value="formState.password" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 5, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
<!--  <a-button class="ml-2" @click="Login" type="primary" danger html-type="submit">登录</a-button>-->

</template>

<script setup>
import axios from "axios";
import {reactive} from "vue";

const Login = () => {
  axios.post('/api/login', { username: formState.username, password: formState.password})
}

const formState = reactive({
  username: '',
  password: '',
});
const onFinish = async (values) => {
  console.log('Success:', values);
  await axios.post('/api/login', formState)

};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped>

</style>
