<template>
  <div class="container">
    <div class="row">

      <h1>CoinMarket</h1>


    <div>
      <tr v-for="team in CONMEBOL" :key="team.id">
        <td>
          <span>{{team.name}}</span>
        </td>
      </tr>
    </div>

    <table class="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in CONMEBOL" :key="team.id">
            <td class="text-muted">{{ index  + 1}}</td>
            <td>
              <img :src="team.image" :alt="team.name" style="width: 2rem" class="me-2" />
              <span>
                {{ team.name }}
              </span>
              <span class="ms-2 text-muted text-uppercase">
                {{ team.symbol }}
              </span>
            </td>
            <td>${{ team.current_price.toLocaleString() }}</td>
            <td
              :class="[
                team.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              {{ team.price_change_percentage_24h.toFixed(1)}}%
            </td>
            <td>${{ team.total_volume.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>


    </div>
  </div>
</template>

<script>
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