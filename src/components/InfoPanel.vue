<template>
  <div id="infoPanel" class="align-items-center card mb-0 mt-4 mr-5 ml-5">
    <h4 class="m-3">Stock Trader <span class="badge badge-secondary">Day {{dayNum}}</span></h4>
    <button class="ml-auto mr-3 btn btn-primary" @click='endDay'>End Day</button>
    <h5 class="m-3">Your Founds: {{founds}}$</h5>
  </div>
</template>

<script>
export default {
  computed: {
    dayNum () {
      return this.$store.state.dayNum
    },
    founds () {
      return this.$store.state.founds
    }
  },
  methods: {
    endDay () {
      this.$store.commit('endDay')
    }
  }
}
</script>

<style>
    #infoPanel {
    height: 50px;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    }
</style>
