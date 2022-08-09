<template>

  <div class="container">
    <Header @search="getWeather" @toggleUnit="toggleUnit"/>
    <div class="current-hourly-container">
      <div class="current-container">
        <Current :current="currentWeather" :unit="unit" />
      </div>
      </div>
    </div>
    </template>
   
  


<script>
  import Header from './components/Header.vue'
  import Current from './components/Current.vue'
  import getWeatherData from './scripts/apiHandler.js'

  export default {
    name: 'WeatherApp',
    components: {
      Header,
      Current,
     
    },
    data() {
      return {
        currentWeather: {},
        hourlyWeather: [],
        dailyWeather: [],
        unit: "C",
        currentCity: ""
      }
    },
    methods: {
      async getWeather(city) { 
        try {
          this.currentCity = city;
          let fetchUnit;
          this.unit === "F" ? fetchUnit = "imperial" : fetchUnit = "metric";
          this.fetchData(city, fetchUnit);
        } catch (error) {
          console.log(error);
        }
      },

      async fetchData(city, unit) { 
        try {
          const data = await getWeatherData(city, unit);
          console.log(data);
          this.currentWeather = data.current;
          this.hourlyWeather = data.hourly;
          this.dailyWeather = data.daily
        } catch (error) {
          console.log(error);
        }    
      },

      

    },
    created() {
      this.getWeather("Tehran");
    } 
  }
</script>

<style>

.container {
  text-align: center;
  flex-direction: column;
        background-color: rgb(169, 222, 253);
  font-family: 'Montserrat', sans-serif;
}

.current-hourly-container {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 768px) {
    .current-hourly-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .hide-mobile {
    display: none;
  }
}

.current-container {
  margin: 40px;
  
  align-items: center;
  width: 1200px;
}


</style>
