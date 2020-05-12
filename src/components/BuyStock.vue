<template>
  <div >
    <div class="card m-1">
      <h3 class="mt-3 mb-0 text-center">{{stock.name}}</h3>
      <hr class='m-3'>
      <h6 class= "text-center">
        Actual Price: {{stock.price}}$
      </h6>
      <div class="m-4">
        <div class="input-group">
            <div class="input-group-prepend">
              <button class="btn btn-success"
                type="button"
                id="button-addon1"
                @click="buy"
                >Buy</button>
            </div>
            <input
              type="number"
              class="form-control"
              placeholder="quantity"
              v-model="quantityToBuy"
              @keyup.enter="buy">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'stock'
  ],
  data () {
    return {
      quantityToBuy: 0
    }
  },
  methods: {
    buy () {
      if ((this.quantityToBuy > 0) && ((this.quantityToBuy * this.stock.price) < this.$store.state.founds)) {
        this.stock.quantity += parseInt(this.quantityToBuy)
        this.$store.state.founds -= (this.quantityToBuy * this.stock.price)
        this.$store.commit('addToHistory', {
          type: 'buy',
          quantity: parseInt(this.quantityToBuy),
          stockName: this.stock.name,
          stockPrice: this.stock.price
        })
        this.quantityToBuy = 0
      } else {
        alert('quantity must be higher than 0 or you dont have enought stocks')
        this.quantityToBuy = 0
      }
    }
  }
}
</script>

<style>
</style>
