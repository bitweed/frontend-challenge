<!--
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 09:44:37
 * @LastEditTime: 2022-04-22 16:58:35
-->
<template>
  <h1>connect</h1>
  <el-button @click="getAccount">
    connect metamask
  </el-button>
  <strong class="status">{{ status }}</strong>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus';
import { onMounted, ref } from 'vue';

const status = ref('');

onMounted(() => {
  if (window.ethereum) {
    status.value = window.ethereum.selectedAddress ? 'connected' : '';
  } else {
    alert('please install MetaMask');
  }
});
const getAccount = async () => {
  if (window.ethereum) {
    if (window.ethereum.selectedAddress) {
      alert(`the addredd of wallet is：${window.ethereum.selectedAddress}`);
    } else {
      window.ethereum.enable().then(() => {
        status.value = 'connected';
        ElNotification({
          title: 'Success',
          message: 'Connected',
          type: 'success',
        });
      });
    }
  } else {
    alert('please install MetaMask');
  }
};
</script>

<style scoped>

</style>
