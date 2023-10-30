<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  <counter/>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = 
     {{$store.getters.counterSquared}}
    </div>
    <div class="buttons">
      <button @click = " $store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>


    </div>
    <div>
      <input v-model= "colorCode"
        placeholder="Enter color code" type="text">
    </div>
   
  </div>
</template>

<script>
// https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new

export default {
  name: 'HomeView',
  computed: {
    colorCode:{

      get(){
        return this.$store.state.colorCode

      },
      set(newValue){
        this.$store.dispatch('setColorCode', newValue)

      }


    }
  },
  
 components:{
  'counter': require('@/components/Counter.vue').default
 }

}
</script>

<style>
div{
margin-bottom: 10px ;

}
.counter{
  font-size: 80px;
}

.buttons button{
font-size: 40px;
width: 100px;
margin: 0 10px;
}

</style>
