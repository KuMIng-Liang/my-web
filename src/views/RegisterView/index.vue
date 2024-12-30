
<template>
  <el-container>
    <el-header>
      <GlobalHeader>
        <template #center>
          <span class="text-xl">注册</span>
        </template>
        <template #right>
          <a-button @click="() => $router.push('/')" type="primary">返回主页</a-button>
          &nbsp;<a-button @click="() => $router.push('/login')" type="default">登录</a-button>
        </template>
      </GlobalHeader>
    </el-header>
    <el-main>
      <h1>这是注册页面</h1>
    </el-main>
  </el-container>
</template>

<script setup>

import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>

</style>
