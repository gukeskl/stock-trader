import Vue from 'vue'
import Vuex from 'vuex'

function randomInt (min, max) {
  return min + Math.floor((max - min) * Math.random())
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    founds: 10000,
    dayNum: 1,
    stocks: [
      { id: 1, name: 'Apple', quantity: 0, price: 22 },
      { id: 2, name: 'Netflix', quantity: 0, price: 154 },
      { id: 3, name: 'Google', quantity: 0, price: 78 },
      { id: 4, name: 'Facebook', quantity: 0, price: 171 }
    ],
    history: []
  },
  mutations: {
    addToHistory (state, operation) {
      state.history.push({
        operationType: operation.type,
        quantity: operation.quantity,
        stockName: operation.stockName,
        stockPrice: operation.stockPrice
      })
    },
    endDay (state) {
      state.history.push({
        operationType: 'endDay',
        dayNum: state.dayNum,
        foundsLeft: state.founds
      })
      state.dayNum++
      state.stocks.forEach(el => {
        el.price += el.price * (randomInt(-20, 20) / 100)
        el.price = Math.round(el.price)
      })
    }

  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
