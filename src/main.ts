import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: "invoice-d70f8.firebaseapp.com",
    projectId: "invoice-d70f8",
    storageBucket: "invoice-d70f8.appspot.com",
    messagingSenderId: process.env.VUE_APP_MESSAGE_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

createApp(App).mount('#app')
