import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
const app = createApp(App);

app.use(PrimeVue);

createApp(App).mount('#app');
app.component('Dialog', Dialog);
