<template>
    <div class="card mt-5 mb-5 mr-5 p-5 mw-75">
        <h2>Your History:</h2>
        <hr>
        <div class="d-flex flex-column-reverse">
            <div v-for="(item, index) in history" :key='index'>
                <div v-if="item.operationType == 'buy'" class="alert alert-success">
                    You have bought {{item.quantity}} stocks of {{item.stockName}} for {{item.stockPrice}}$ each
                </div>
                <div v-if="item.operationType == 'sell'" class="alert alert-danger">
                    You have sold {{item.quantity}} stocks of {{item.stockName}} for {{item.stockPrice}}$ each
                </div>
                <div v-if="item.operationType == 'endDay'" class="alert alert-warning">
                    You have ended day {{item.dayNum}} with {{item.foundsLeft}}$ founds left
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  computed: {
    history () {
      return this.$store.state.history
    }
  }
}

</script>

<style>
</style>
