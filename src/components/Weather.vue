<template>
<form v-on:submit.prevent="getWeather">
  <button>Show the weather</button>
</form>
<div v-if="displayWeather">
    <h3>location: {{ weather.location.name }}</h3>
    <h3>temperature in Celsius: {{ weather.current.temp_c }}</h3>
    <h3>wind speed in kph: {{ weather.current.wind_kph }}</h3>
    <h3>Wind direction: {{ weather.current.wind_dir }}</h3>
    <img id="weatherImage" :src="weather.current.condition.icon">
    <h3 id="weatherText">{{ weather.current.condition.text }}</h3>
</div>
</template>

<script>
import axios from 'axios'

export default {
    
   data: function(){
        return {
            location: 'dordrecht',
            apiKey: 'cb20181c41d74884b2a101603222501',
            weather: [],
            displayWeather: false
        }
    },

    methods: {
        getWeather: function()
        {
            axios
            .get('http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=' + this.location)
            .then(response => (
                this.weather = response.data,
                console.log(response.data),
                this.displayWeather = true
                ))
                .catch((error) => {
                    console.log(error);
                    this.displayWeather = false;
                }
                )
                
            //     this.weather = response.body;
                
            // }, (response) => {
            //     this.weather = [];
            //     this.displayWeather = false
            // });
        }
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
