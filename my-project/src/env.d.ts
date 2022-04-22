/*
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 09:42:50
 * @LastEditTime: 2022-04-22 10:13:29
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
