import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import weather from './components/Weather.vue'

library.add(faCompass)
library.add(faThermometerThreeQuarters)
library.add(faWind)
library.add(faLocationArrow)

const app = createApp(App)

app.component('weather', weather)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
