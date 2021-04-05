<template>
  <div>
    <h1>This is a search page</h1>
    <input type="text" v-model="name"> <button @click="search()">search</button>
    <div>
      <span @click="page = 'RANKED_SOLO_5x5'">solo</span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span @click="page = 'RANKED_FLEX_SR'">flex</span>
    </div>

    <div v-for="item in items" :key="item.id">
      <div v-if="item.queueType == page">
        {{item.tier}}
        {{item.rank}}
        {{item.leaguePoints}}<br/>
        {{item.wins}}<br/>
        {{item.losses}}
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return {
      name: null,
      page: 'RANKED_SOLO_5x5',
      items: [
        {
          "leagueId": null,
          "queueType": null,
          "tier": null,
          "rank": null,
          "summonerId": null,
          "summonerName": null,
          "leaguePoints": null,
          "wins": null,
          "losses": null,
          "veteran": null,
          "inactive": null,
          "freshBlood": null,
          "hotStreak": null
        },
        {
          "leagueId": null,
          "queueType": null,
          "tier": null,
          "rank": null,
          "summonerId": null,
          "summonerName": null,
          "leaguePoints": null,
          "wins": null,
          "losses": null,
        }
      ]
    }
  },
  methods:{
    async search(){
      await axios.get(`http://localhost:25565/eid`,{params: {name: this.name }})
        .then(response => (
          axios.get(`http://localhost:25565/info`,{params: {eid: response.data }})
        .then(response => (this.items = response.data))
        ))
        .catch(errer => (console.log(errer.message)))
    }
  }
}
</script>
