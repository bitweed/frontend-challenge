/* eslint-disable import/extensions */
/*
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 09:42:50
 * @LastEditTime: 2022-04-22 15:45:09
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import 'element-plus/dist/index.css';
// eslint-disable-next-line import/no-unresolved
import router from './router';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
