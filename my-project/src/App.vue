<!--
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 09:42:50
 * @LastEditTime: 2022-04-22 15:59:58
-->
<script setup lang="ts">
import logo from './assets/metamask.svg';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <header>
    <img
      :src="logo"
      class="logo"
    >
    <el-menu
      default-active="wallet"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item index="wallet">
        wallet
      </el-menu-item>
      <el-menu-item index="balance">
        balance
      </el-menu-item>
    </el-menu>
  </header>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo{
  width:200px;
  float:left
}
</style>
