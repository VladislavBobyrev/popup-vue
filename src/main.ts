import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { init } from './modules/common/init/init';
import './main.scss';

createApp(App).use(router).mount('#app');
init();
