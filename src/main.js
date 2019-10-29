import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from "firebase/app";
import'firebase/firestore'

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCjtbA7r3Wz6rh4aOhxJW1GJwK1aG4Y40Y",
  authDomain: "calendar-vue-vuetify.firebaseapp.com",
  databaseURL: "https://calendar-vue-vuetify.firebaseio.com",
  projectId: "calendar-vue-vuetify",
  storageBucket: "calendar-vue-vuetify.appspot.com",
  messagingSenderId: "656931299044",
  appId: "1:656931299044:web:ac5af7a7731b7caef556f1"
});
export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
