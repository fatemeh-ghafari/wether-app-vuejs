<template>
  <div class="hour-forecast">
     <p>{{hour.time}}</p>
     <h3 class="temp">{{hour.temp}}° {{unit}}</h3>
     <img :src="`${publicPath}${hour.weather}`" alt="">
  </div>
</template>

<script>
  export default {
    name: 'Hour',
    props: {
      hour: Object,
      unit: String
    },
    data () {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>

<style scoped>
  .hour-forecast {
    flex: 0 0 50px;
    display: flex;
    flex-direction: column;
    background: rgb(240, 240, 240);
    padding: 15px;
    margin: 5px;
    width: 70px;
    font-size: 1.3rem;
    align-items: center;
  }

  h3 {
    font-size: 1.7rem;
  
    font-weight: 500;
     
  }

  p {
    margin-bottom: 7px;
   
    width: auto;
  }

  .temp {
    white-space: nowrap;
    overflow: hidden;
    
  }

</style>