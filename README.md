# cli
## 项目使用注意事项:
- router/index.js中路由的配置，name属性必须和vue组件中的name对应，否则无法keep-alive
- router/index.js中的name属性会显示在面包屑和tags中
- global中为全局配置
- 静态文件放在assets文件夹下
- components中为公共组件
- compoents/aside中的无限极菜单，目前只做了三级，需要子菜单时再添加children属性
- 页面文件全部在pages中
- 初始loading动画可以在index.html中修改
> project cli for our team

## Build Setup

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

