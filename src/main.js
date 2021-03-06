import Vue from 'vue';
import Vuex from 'vuex';
import 'normalize.css';
import { Button, Select, Menu, MenuItem, Submenu, Row, Col } from 'element-ui';
import App from './App';
import router from './router';
import createStore from './store';

Vue.config.productionTip = false;

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Submenu.name, Submenu);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: createStore(),
});
