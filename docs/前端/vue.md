# Vue
:::tip
用于积累vue知识
:::
+ 子组件向父组件传值
```js
子：this.$emit('func', value);//func:父组件接收变化的接口。   value：传递的值
父：@func="function" //命名一个函数接受子组件传值 
```