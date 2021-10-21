import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import messages from './Langs';

Vue.config.productionTip = false
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'de', // set locale
  fallbackLocale: 'ar', // set fallback locale
  messages, // set locale messages
});


new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
