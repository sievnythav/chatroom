<template>
    <div class="signup container">
        <form class="card-panel" @submit.prevent="signup">
            <h2 class="center teal-text">Sign Up</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field center">
                <button class="btn deep-teal">Sign Up</button>
            </div>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'signup',
    data(){
        return {
            email: null,
            password: null,
            feedback: null
        }
    },
    methods: {
        signup(){
            if(this.email && this.password){
                // firebase.auth().createUserWithEmailAndPassword(this.email,)
                console.log('Hi')
            }else{
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .catch(err => {
                    console.log(err)
                    this.feedback = err.message
                })
            }
        }
    }
}
</script>
<style>
    .signup {
        max-width: 500px;
        margin-top: 60px;
    }
    .signup .field {
        margin-bottom: 20px;
    }
</style>