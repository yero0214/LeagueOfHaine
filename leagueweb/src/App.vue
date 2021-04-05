<template>
  <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/Search">Search</router-link> |
      <router-link to="/Ranking">Ranking</router-link>
    <router-view/>
  </div>
</template>

<style>
#app{
  text-align: center;
}

</style>
