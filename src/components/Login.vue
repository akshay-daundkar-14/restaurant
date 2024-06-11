<template>
<div class="login-container">

    <img class='logo' alt="Vue logo" src="../assets/resto1.png">
    <h1>Login</h1>

    <div class="login">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="pass" placeholder="Enter Password">
        <button @click="fn_Login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>

</div>
</template>

    
<script>
import axios from "axios";

export default {
    name: "LoginComp",
    data(){
        return{
            email:'',
            pass:''
        }
    },
    methods: {
       async fn_Login() {

            const result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.pass}`
            );

            if(result.status==200 && result.data.length>0)
            {
                console.log("Login Successful!");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:'Home'});
            }
            else{
                console.log("Login Failed!");
            }
        }
    },
    mounted(){
        const user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'});
        }
    }
}
</script>

    
<style>

    </style>
