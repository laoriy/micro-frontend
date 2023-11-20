<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const { push, go } = useRouter()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const menus = [
  { path: '/', title: 'Index', key: '1' },
  { path: '/about', title: 'About', key: '2' },
  { path: '/vue3ViteSub', title: 'Vue3ViteSub Home', key: '3' },
  { path: '/vue3ViteSub/about', title: 'Vue3ViteSub About', key: '4' }
]
const pageTitle = ref('Index')

const handleSelect = (index: string) => {
  const { path, title } = menus.find((m) => m.key === index)!
  pageTitle.value = title
  push(path)
}

const goBack = () => {
  go(-1)
}
</script>

<template>
  <header>
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3"> {{ pageTitle }} </span>
      </template>
    </el-page-header>
  </header>
  <div class="container">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#fff"
          @select="handleSelect"
        >
          <el-menu-item v-for="menu in menus" :index="menu.key" :key="menu.key">
            <span>{{ menu.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="content">
          <RouterView />
          <div id="vue3ViteSub"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
header {
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 20px;
  position: relative;
  z-index: 1;
}
.container {
  background: #f9fafd;
  height: calc(100vh - 50px);
  .tac {
    height: 100%;
  }
  .el-menu-vertical-demo {
    height: 100%;
  }
}
.content {
  padding: 15px;
}
</style>
