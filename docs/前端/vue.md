# Vue
:::tip
用于积累vue知识
:::
## vue常见安装命令
```js
yarn add vue-router
yarn add vuex
yarn global add @vue/cli
yarn add element-ui
yarn add sass-loader
yarn add sass
```
## vue常见写法
+ 子组件向父组件传值
```js
子：this.$emit('func', value);//func:父组件接收变化的接口。   value：传递的值
父：@func="function" //命名一个函数接受子组件传值 
```
+ 所有属性绑定都是`:disbaled="tip" tip:false`
## vue优化速度
+ 开启gzip。1.代码中加入配置命令，2.服务器允许访问.gz文件。
+ 按需加载