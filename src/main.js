import { createApp } from 'vue'
//路由
import router from './router'
//element组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//ant design 组件
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
//windicss 组件
import 'virtual:windi.css'

import App from './App.vue'

createApp(App).use(router).use(ElementPlus).use(Antd).mount('#app')

