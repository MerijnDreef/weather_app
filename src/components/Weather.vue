<template>
<form v-on:submit.prevent="getWeather">
    <!-- <select name="location" v-model="selected">
        <option value="Dordrecht" name="Dordrecht">Dordrecht</option>
        <option value="Utrecht" name="Utrecht">Utrecht</option>
        <option value="Den-haag" name="Den-haag">Den haag</option>
        <option value="Rotterdam" name="Rotterdam">Rotterdam</option>
        <option value="Amsterdam" name="Amsterdam">Amsterdam</option>
        <option value="Breda" name="Breda">Breda</option>
        <option value="Maatricht" name="Maastricht">Maastricht</option>
        <option value="Arnhem" name="Arnhem">Arnhem</option>
        <option value="Nijmegen" name="Nijmegen">Nijmegen</option>
        <option value="Eindhoven" name="Eindhoven">Eindhoven</option>
        <option value="'s HertogenBosch" name="'s Hertogen-Bosch">'s Hertogen-Bosch</option>
        <option value="Zwolle" name="Zwolle">Zwolle</option>
        <option value="Leiden" name="Leiden">Leiden</option>
        <option value="Delft" name="Delft">Delft</option>
    </select> -->
    <input name="location" v-model="location">
  <button>Show the weather</button>
</form>

<div id="errorMyDude">
    <h3 v-if="errorDetected">Hey ho er gaat iets fout</h3>
</div>

<div v-if="displayWeather">
    <h3><font-awesome-icon icon="compass" /> location: {{ weather.location.name }}</h3>
    <h3 v-if="weather.location.country == 'United States of America'"><font-awesome-icon icon="thermometer-three-quarters" /> temperature in Fahrenheit: {{ weather.current.temp_f }}</h3>
    <h3 v-else><font-awesome-icon icon="thermometer-three-quarters" /> temperature in Celsius: {{ weather.current.temp_c }}</h3>
    <h3><font-awesome-icon icon="wind" /> wind speed in kph: {{ weather.current.wind_kph }}</h3>
    <h3><font-awesome-icon icon="location-arrow" /> Wind direction: {{ weather.current.wind_dir }}</h3>
    <img id="weatherImage" :src="weather.current.condition.icon">
    <h3 id="weatherText">{{ weather.current.condition.text }}</h3>
</div>
</template>

<script>
import axios from 'axios'

export default {
    
   data: function(){
        return {
            location: localStorage.getItem('lastLocation') ? localStorage.getItem('lastLocation') : "Dordrecht",
            apiKey: 'cb20181c41d74884b2a101603222501',
            weather: [],
            displayWeather: false,
            errorDetected: false
        }
    },

    methods: {
        getWeather: function()
        {
            axios
            .get('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.location)
            .then(response => {
                this.weather = response.data;
                this.displayWeather = true;
                
                this.errorDetected = false;

                localStorage.setItem('lastLocation', this.location);
            })
                .catch((error) => {
                    console.log(error);
                    this.errorDetected = true;
                    this.displayWeather = false;
                })
        }
    },
    mounted() {
        this.getWeather();
        if(localStorage.getItem('lastLocation')){
            localStorage.setItem('lastLocation', this.location);
        }
    }
    // Add a localstorage
}
</script>

<style>
#weatherImage{
    vertical-align:middle;
}

#weatherText{
    vertical-align:middle;
    display:inline-block;
}

#errorMyDude{
    color: RED;
}
</style>
