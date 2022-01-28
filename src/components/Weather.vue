<template>
<form v-on:submit.prevent="getWeather">
    <select name="location" v-model="selected">
        <option value="Dordrecht" name="Dordrecht">Dordrecht</option>
        <option value="Utrecht" name="Utrecht">Utrecht</option>
        <option value="Den-haag" name="Den-haag">Den haag</option>
        <option value="Rotterdam" name="Rotterdam">Rotterdam</option>
        <option value="Amsterdam" name="Amsterdam">Amsterdam</option>
    </select>
  <button>Show the weather</button>
</form>
<div v-if="displayWeather">
    <h3><font-awesome-icon icon="compass" /> location: {{ weather.location.name }}</h3>
    <h3><font-awesome-icon icon="thermometer-three-quarters" /> temperature in Celsius: {{ weather.current.temp_c }}</h3>
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
            location: {location},
            selected: "Dordrecht",
            apiKey: 'cb20181c41d74884b2a101603222501',
            weather: [],
            displayWeather: false
        }
    },

    methods: {
        getWeather: function()
        {
            axios
            .get('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.selected)
            .then(response => {
                this.weather = response.data;
                this.displayWeather = true;
            })
                .catch((error) => {
                    console.log(error);
                    this.displayWeather = false;
                })
        }
    },
    mounted() {
        this.getWeather();
    }
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
</style>
