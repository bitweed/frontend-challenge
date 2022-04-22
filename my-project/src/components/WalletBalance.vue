<!--
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 09:45:10
 * @LastEditTime: 2022-04-22 17:46:42
-->
<template>
  <h1>{{ remain }}</h1>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { ethers } from 'ethers';
import abi from '../constants/erc20.json';

const remain = ref(0);
onMounted(async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // await provider.send('eth_requestAccounts', []);
  // const contract = new ethers.Contract('ethers.eth', abi, provider);
  // const result = await contract.balanceOf('ethers.eth');
  const USDTaddress = window.ethereum.selectedAddress;
  const contract = new ethers.Contract(USDTaddress, abi, provider);
  const balance = await contract.balanceOf(USDTaddress);
  remain.value = balance.toString();
});

</script>

<style>

</style>
