<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <GlobalHeader/>
      </el-header>
      <el-main class="content">
        <router-view></router-view>
      </el-main>
      <el-footer class="footer">底部</el-footer>
    </el-container>
  </div>
</template>

<script setup>

import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>

.common-layout {


  .header{}


  .content{

  }


  .footer{
    background-color: #efefef;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
  }
}
</style>
