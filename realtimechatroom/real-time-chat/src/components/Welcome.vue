<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome To Ninja Chat Room!</h2>
        <form @submit.prevent="enterChat()">
          <label for="name">Enter your name (any):</label>
          <input type="text" name="name" v-model="name">
          <button class="btn teal">Enter Chat Room</button>
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      }else{
        this.feedback = 'You must enter the name.'
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.welcome {
  max-width: 500px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 2em;
}
.welcome button {
  margin: 30px auto;
}
.welcome label {
  font-size: 1em;
}
.welcome input {
  max-width: 350px;
}
</style>
