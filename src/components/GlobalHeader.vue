<template>
  <div id="global-header">
    <a-row :wrap="false">
      <a-col flex="320px">
        <slot name="left">
          <div class="title">
            <img class="title-logo" src="../assets/logo.svg" alt="logo">
            <div class="title-text">VUE用户中心</div>
          </div>
        </slot>
      </a-col>
      <a-col flex="auto">
        <slot name="center">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              router
              mode="horizontal"
              @select="handleSelect"
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/user">用户信息</el-menu-item>
            <el-sub-menu index="2">
              <template #title>系统管理</template>
              <el-menu-item index="/manage">用户管理</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="/about">关于我们</el-menu-item>
          </el-menu>
        </slot>
      </a-col>
      <a-col flex="200px">
        <slot name="right">
          <div>
            <a-button @click="() => $router.push('/login')" type="primary">登录</a-button>
            &nbsp;
            <a-button @click="() => $router.push('/register')">注册</a-button>
          </div>
        </slot>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

//根据路由变化，设置菜单选中项
if (import.meta.env.SSR) {
  activeIndex.value = '/'
} else {
  activeIndex.value = window.location.pathname
}

</script>

<style scoped>
#global-header{
  line-height: 60px;

  ::v-deep.el-menu-demo{
    border: none;
  }
}

.title {
  display: flex;


  .title-logo {
    width: 32px;
  }

  .title-text {
    margin-left: 16px;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
