/*
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-22 14:51:10
 * @LastEditTime: 2022-04-22 15:21:32
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/wallet',
    name: '',
    component: () => import('../components/ConnectWallet.vue'),
  },
  {
    path: '/balance',
    name: '',
    component: () => import('../components/WalletBalance.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
