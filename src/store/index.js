import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  getters: {
    counterSquared(state){
      return state.counter*state.counter
    }
  },//get data from state, möjligt att filtrerar
  mutations: {  
    increaseCounter(state, randomNumber){
      state.counter += randomNumber
      console.log('randomNumber;',randomNumber)
  
  },
  decreaseCounter(state, randomNumber){
    state.counter -= randomNumber
  },

  setColorCode(state, newValue){
    state.colorCode = newValue

  }
  },// kan ändra state async går inte i mutations bara sync code
  actions: {

    increaseCounter({commit}){

      console.log('increaseCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
commit('increaseCounter',response.data)
      })


    },
    decreaseCounter({commit}){

      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
commit('decreaseCounter',response.data)
      })


    },
    setColorCode({commit}, newValue){
   commit('setColorCode',newValue)
    }


  },// kan ha asynchar tillgång till state men kan inte ändra den
  modules: {
  }
})
