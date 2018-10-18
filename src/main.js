import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import {
  TimePicker, Container, Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
} from "element-ui";
// Vue.component(TimePicker.name, TimePicker);
Vue.use(TimePicker);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
