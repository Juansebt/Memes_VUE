import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(store).mount('#app')
