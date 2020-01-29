// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css';
import http from './global/http';
import Bus from './global/bus';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = http;
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Bus);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
