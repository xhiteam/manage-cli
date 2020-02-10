# cli
> 这是一个后台管理系统的简易模板，主要集成了elementUI、vuex、axios、echarts等后台管理系统常见的插件，在搭建团队的一系列系统时，很多子系统都是类后台管理，所以为了节约时间简单敲了这样一个轮子，搭建一个轮子也便于团队系统的风格统一，后续可能会考虑用微前端把这些系统集成起来。  

目前只是一个简单的模板，后续会继续完善，最终目标是发布到npm中，现在暂时只支持GitHub上拉取代码使用。从开始就打算把团队的一系列东西开源出来，欢迎大家提issue。
## 1.项目使用注意事项:
- router/index.js中路由的配置，name属性必须和vue组件中的name对应，否则无法keep-alive
- router/index.js中的name属性会显示在面包屑和tags中
- global中为全局配置
- 静态文件放在assets文件夹下
- components中为公共组件
- compoents/aside中的无限极菜单，目前只做了三级，需要子菜单时再添加children属性
- 页面文件全部在pages中
- 初始loading动画可以在index.html中修改

## 2.Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 3.开源技术交流
欢迎大家加入我们团队的技术交流群，团队主要涉及前后端开发，服务器以及大数据等技术。下面是群二维码:  
![群二维码](static/687034558134243340.jpg)   
二维码失效的话也可以联系我的个人邮箱:bestbven@163.com

