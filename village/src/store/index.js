import * as mutationTypes from './mutationTypes'

import { createStore } from 'vuex'

export default createStore({
  state: {
    // listings: [],
    listings: [
      {name: 'iPhone X', image: 'image url', qty: 3},
      {name: 'iPhone X', image: 'image url', qty: 3},
      {name: 'iPhone X', image: 'image url', qty: 3},
    ]
      ,
    products: [],
  },

  getters: {
    getProducts: (state) => state.products,
    getListings: (state) => state.listings,
  },

  mutations: {
    [mutationTypes.LOAD_PRODUCTS](state, data) {
      state.products = data
    },
    [mutationTypes.LOAD_LISTINGS](state, data) {
      state.listings = data
    },
  },

  actions: {
  },

  modules: {
  }
})
