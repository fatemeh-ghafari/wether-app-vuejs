<template>
  <header>
    <center>
    <img :src="`${publicPath}logo2.png`" alt="logo">
    <div class="search-bar">
      <input type="text" placeholder="Enter a city" @keydown.enter="search()" v-model="searchValue" id="search-input">
      <button class="button_search" @click="search()" >Search</button>
    </div>
  </center>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: '',
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    search() {
      if(!this.searchValue) { 
        return; 
      }
    
    const city = this.searchValue;
    this.$emit('search', city);

    this.searchValue = '';
    }
  }
}
</script>

<style scoped>

  img {
    width: 250px;
    height: auto;
  }
  header {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    background: #36b5f5;
    color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
  }

  input {
    min-width: 700px;
    padding: 5px;
    font-size: 20pt;
    color: rgb(44, 12, 255)
  }

  @media only screen and (max-width: 768px) {
    header {
      flex-direction: column;
    }

    .search-bar {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 425px) {
    input {
      min-width: 100px;
    }
  }

  h2 {
    font-size: 1.7rem;
  }

  .search-bar {
    display: flex;
    justify-content: center;
  }

.button_search{
  font-size: 30px;
  color: blue;
}

</style>>