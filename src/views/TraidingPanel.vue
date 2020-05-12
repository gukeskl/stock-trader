<template>
    <div class="card mt-5 mb-5 mr-5 p-5">
        <h2>Stocks to trade:</h2>
        <hr>
          <div class="row">
              <buy-stock
                v-for="stock in stocks"
                :key="stock.id"
                :stock="stock"
                class="col-sm-6"
              ></buy-stock>
          </div>
    </div>
</template>

<script>
import BuyStock from '../components/BuyStock.vue'

export default {
  components: {
    buyStock: BuyStock
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
