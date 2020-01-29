/* eslint-disable */
// 事件总线
import Vue from "vue";

export const Bus = new Vue();

export default Vue => {
    const bus = Bus;
    Vue.bus = bus;
    // 封入Vue的原型当中
    Vue.prototype.$bus = bus;
};
