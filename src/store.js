import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popup: false,
    countryInfo: {}
  },
  mutations: {
    togglePopup (state) {
      state.popup = !state.popup
    },
    updateCountryInfo (state, response) {
      console.log(response.name)
      state.countryInfo = {
        name: response.name,
        timezones: response.timezones,
        callingCodes: response.callingCodes[0],
        currencies: response.currencies,
        borders: response.borders,
        flag: response.flag,
        topLevelDomain: response.topLevelDomain,
        alpha2Code: response.alpha2Code,
        alpha3Code: response.alpha3Code,
        population: response.population
      }
    }
  },
  actions: {
    togglePopupAction({ commit }) {
      commit('togglePopup')
    },
    getCountryInfo({ commit }, query) {
      return axios.get(`https://restcountries.eu/rest/v2/name/${query}`).then((response) => {
        console.log(response.data)
        commit('updateCountryInfo', response.data[0])
      })
    }
  },
  getters: {
    popup: state => state.popup,
    countryInfo: state => state.countryInfo
  }
})
