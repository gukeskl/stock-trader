<template>
  <div id="app">
    <div class="content">
      <info-panel></info-panel>
      <div class="row">
        <nav-bar class="d-inline"></nav-bar>
        <router-view class="d-flex flex-fill"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Navigation.vue'
import InfoPanel from './components/InfoPanel'

export default {
  components: {
    navBar: Nav,
    infoPanel: InfoPanel
  }
}
</script>

<style>
  @import './assets/style/style.css';
  #app{
    max-width: 1000px;
    margin: auto;
  }
</style>
