import { createApp } from 'vue'
import App from './App.vue'

import weather from './components/Weather.vue'

const app = createApp(App)

app.component('weather', weather)

app.mount('#app')
