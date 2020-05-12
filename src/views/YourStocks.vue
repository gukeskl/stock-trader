<template>
    <div class="card mt-5 mb-5 mr-5 p-5">
        <h2>Stocks:</h2>
        <hr>
        <div class="row">
          <div v-for="stock in stocks" :key="stock.id">
              <sell-stock :stock="stock" v-if="stock.quantity > 0"></sell-stock>
          </div>
        </div>
    </div>
</template>

<script>
import SellStock from '../components/SellStock.vue'

export default {
  components: {
    sellStock: SellStock
  },
  computed: {
    stocks () {
      return this.$store.state.stocks
    }
  }
}
</script>

<style>
</style>
