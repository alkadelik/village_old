import axios from 'axios'
import * as urls from './urls'
import * as mutationTypes from '@/store/mutationTypes'
import store from '@/store/index'

// try {var auth = store.getters.getSettlement.keys.paystack_secret_key}
// catch {null}
// const auth = 'AIzaSyD-mKszUKKRlSBlc8u9Tb8zj7UslWpDxB4'

export const addProduct = (data) => {
    return axios ({
        method: 'post',
        url: `${urls.addProduct}`,
        data
    })
    .then((response) => { // should it load all products or simply add the most recent product to the store
        store.commit(mutationTypes.LOAD_PRODUCTS, response.data)
    })
}
export const loadProducts = (data) => {
    return axios ({
        method: 'get',
        url: `${urls.loadProducts}`,
        data
    })
    .then((response) => {
        store.commit(mutationTypes.LOAD_PRODUCTS, response.data)
    })
}
export const searchListings = (data) => {
    return axios ({
        method: 'get',
        url: `${urls.searchListings}`,
        data
    })
    .then((response) => {
        store.commit(mutationTypes.LOAD_LISTINGS, response.data)
    })
}
export const soldOut = (id) => { // doublecheck url - should it be manually typed?
    return axios ({
        method: 'post',
        url: `${urls.soldOut}${id}/`,
    })
    .then((response) => {
        store.commit(mutationTypes.LOAD_LISTINGS, response.data)
    })
}