<template>
  <div id="LoginView">
    <el-container>
      <el-header>
        <GlobalHeader>
          <template #center>
            <span class="text-xl">登录页面</span>
          </template>
          <template #right>
            <a-button @click="() => $router.push('/')" type="primary">返回主页</a-button>
            &nbsp;<a-button @click="() => $router.push('/register')">注册</a-button>
          </template>
        </GlobalHeader>
      </el-header>
      <el-main class="flex flex-col justify-center items-center">
        <div class="text-center text-xl mt-4 mb-4">欢迎来到我的网站</div>
        <div class="w-1/5">
          <LonginForm/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
import LonginForm from "@/components/LonginForm.vue";

</script>

<style scoped>

</style>
