<template>
  <div class="container">
    <h1>Yanlış Cevap !!!!</h1>
    <button @click="newGame">Yeni oyun</button>
  </div>
</template>

<script>
export default {
  methods :{
    newGame(){
      this.$emit('activeComponentEvent',"app-game-card")
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  background-color: darkred;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.container h1{
  text-align: center;
  font-size: 333%;
  color: white;
}

.container button{
  width: 200px;
  background-color: #fff;
  color: darkred;
  border: 1px solid brown;
  font-size: 15px;
  height: 50px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;

}
</style>