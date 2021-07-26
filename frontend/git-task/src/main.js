import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'vue-toast-notification/dist/theme-sugar.css';
import VueToast from "vue-toast-notification";

Vue.config.productionTip = false

Vue.use(VueToast);
Vue.prototype.$log = console.log.bind(console)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.mixin({
  methods: {
    toastMessage: function (message, type, position) {
      this.$toast.open({
        message: message,
        type: type,
        position: position
        // all of other options may go here
      });
    },

  },
});
Vue.prototype.toast = VueToast
