# 自定义事件$emit
把子组件的数据传递给父组件
在父组件中,当成事件使用
## conmponentA和componentB
间接的通过pros子传父，父传子
## AttrComponents
“透传attribute"指的是传递给一个组件，却没有被该组件声明为props或emits的attribute或者v-on事件监听器。最常见的例子就是class 、style和id
当一个组件以单个元素为根作渲染时，透传的attribute 会自动被添加到根元素上
