import Vue from 'vue';

import Vuetify from 'vuetify/lib/framework';

import {LoggerPlugin} from 'smyld-lib-common/dist/VueLoggerPlugin';
Vue.use( LoggerPlugin,{cacheLogs: true});

Vue.use(Vuetify, {
  options: {
    customProperties: true
  }
});

export default new Vuetify({
    theme: {dark:false,
      options: {
        customProperties: true,
      },

      themes: {
        light: {
          primary: '#306dc1',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  });
