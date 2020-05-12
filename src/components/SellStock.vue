<template>
  <div >
    <div class="card m-1">
      <h3 class="mt-3 mb-0 text-center">{{stock.name}}</h3>
      <hr class='m-3'>
      <h6 class= "text-center">
        Quantity: {{stock.quantity}}  ||  Actual Price: {{stock.price}}$
      </h6>
      <div class="m-4">
        <div class="input-group">
            <div class="input-group-prepend">
              <button class="btn btn-danger"
                type="button"
                id="button-addon1"
                @click="sell"
                >Sell</button>
            </div>
            <input
            type="number"
            class="form-control"
            placeholder="quantity"
            v-model="quantityToSell"
            @keyup.enter="sell">
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
      quantityToSell: 0
    }
  },
  methods: {
    sell () {
      if ((this.quantityToSell > 0) && (this.quantityToSell <= this.stock.quantity)) {
        this.stock.quantity -= parseInt(this.quantityToSell)
        this.$store.state.founds += (this.quantityToSell * this.stock.price)
        this.$store.commit('addToHistory', {
          type: 'sell',
          quantity: parseInt(this.quantityToSell),
          stockName: this.stock.name,
          stockPrice: this.stock.price
        })
        this.quantityToSell = 0
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
