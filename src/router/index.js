/* eslint-disable */ 
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: resolve => require(["@/pages/login/index.vue"], resolve),
      name: "login"
    },
    {
      path: "/home",
      component: resolve => require(["@/pages/index.vue"], resolve),
      name: "home",
      children: [
        {
          path: "index",
          component: resolve => require(["@/pages/main/index.vue"], resolve),
          name: "系统首页"
        },
        {
          path: "table",
          component: resolve => require(["@/pages/table/index.vue"], resolve),
          name: "表格组件"
        }
      ]
    }
  ]
});

/**
 * 路由权限拦截函数，暂时不管，等接口协调
 */
router.beforeEach((to, from, next) => {
    // if (to.path !== '/' && !localStorage.token) {
    //     return next('/');
    // }
    if (to.matched.length === 0) {
        next({
            path: '/'
        });
    }
    else {
        next();
    }
    console.log('-----------router change start----------');
    console.log('this router from:::');
    console.info(from);
    console.log('this router to:::');
    console.info(to);
    console.log('-------------router change end------------');
    next();
});

export default router;

