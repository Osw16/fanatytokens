<template>
<div class="flex justify-center">
  <div class="w-3/4 lg:w-2/4">

    <h1 class="text-3xl">Conmebol</h1>
  <div class="carousel">
    <div class="card" v-for="(team, index) in CONMEBOL" :key="team.id">
              <span class="m-4 tracking-widest">
                {{ team.symbol.toUpperCase() }}
              </span>
            <img class="object-contain h-28 w-full mt-2" :src="team.image" :alt="team.name" />
      <div>
        <div class="text-center py-1" >
          <h3 class="text-right text-xl -my-6">{{ index  + 1}}</h3>
      
            <h1 class="justify-center max-h-0 pb-10
             font-bold text-sm mt-7 mb-2">{{ team.name.replace('Fan Token','') }}</h1>
            <h2 class ="mt-7 text-center font-bold text-blue-600">${{ team.current_price.toLocaleString() }}</h2>
                <span class="mt-3 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2 mb-2">Ver Más</span>
            <!-- <div
              :class="[
                team.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              {{ team.price_change_percentage_24h.toFixed(1)}}%
            </div>
            <div>${{ team.total_volume.toLocaleString() }}</div> -->
      
        </div>
      </div>
    </div>
    </div>  <!-- .carousel conmebol -->

    <h1 class="text-3xl text-right">La Liga</h1>
  <div class="carousel">
    <div class="card" v-for="(team, index) in LALIGA" :key="team.id">
              <span class="m-4 tracking-widest">
                {{ team.symbol.toUpperCase() }}
              </span>
            <img class="object-contain h-28 w-full mt-2" :src="team.image" :alt="team.name" />
      <div>
        <div class="text-center py-1" >
          <h3 class="text-right text-xl -my-6">{{ index  + 1}}</h3>
      
            <h1 class="justify-center max-h-0 pb-10
             font-bold text-sm mt-7 mb-2">{{ team.name.replace('Fan Token','') }}</h1>
            <h2 class ="mt-7 text-center font-bold text-blue-600">${{ team.current_price.toLocaleString() }}</h2>
                <span class="mt-3 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2 mb-2">Ver Más</span>
            <!-- <div
              :class="[
                team.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              {{ team.price_change_percentage_24h.toFixed(1)}}%
            </div>
            <div>${{ team.total_volume.toLocaleString() }}</div> -->
      
        </div>
      </div>
    </div>
    </div>  <!-- .carousel la liga -->

    <h1 class="text-3xl">EPL</h1>
  <div class="carousel">
    <div class="card" v-for="(team, index) in EPL" :key="team.id">
              <span class="m-4 tracking-widest">
                {{ team.symbol.toUpperCase() }}
              </span>
            <img class="object-contain h-28 w-full mt-2" :src="team.image" :alt="team.name" />
      <div>
        <div class="text-center py-1" >
          <h3 class="text-right text-xl -my-6">{{ index  + 1}}</h3>
      
            <h1 class="justify-center max-h-0 pb-10
             font-bold text-sm mt-7 mb-2">{{ team.name.replace('Fan Token','') }}</h1>
            <h2 class ="mt-7 text-center font-bold text-blue-600">${{ team.current_price.toLocaleString() }}</h2>
                <span class="mt-3 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2 mb-2">Ver Más</span>
            <!-- <div
              :class="[
                team.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              {{ team.price_change_percentage_24h.toFixed(1)}}%
            </div>
            <div>${{ team.total_volume.toLocaleString() }}</div> -->
      
        </div>
      </div>
    </div>
    </div>  <!-- .carousel EPL -->

   
  </div>
  </div>
</template>

<script>
import './assets/tailwind.css'
import api from './api'
export default {
  name: "App",
  components: {},
   // data method define global variables
  data() {
    return {
      LALIGA:[],
      SERIEA:[],
      EPL:[],
      CONMEBOL:[],
      titles: ["#", "Coin", "Price", "Price Change", "24h Volume"],
      textSearch: "",
    };
  },
  // mounted methods is executed after the instance has been mounted
  async mounted() {

    api.getLALIGA_TEAMS()
    .then(assets =>(this.LALIGA = assets))
    api.getSERIEA_TEAMS()
    .then(assets =>(this.SERIEA = assets))
    api.getEPL_TEAMS()
    .then(assets =>(this.EPL = assets))
    api.getCONMEBOL_TEAMS()
    .then(assets =>(this.CONMEBOL = assets))
  },
  methods: {
    searchCoin() {
      this.filteredCoins = this.coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
  },
};
</script>

<style>
</style>