<template>
<div class="signup-container">

    <!-- <img class='logo' alt="Vue logo" src="./assets/resto1.jpg"> -->
    <img class='logo' alt="Vue logo" src="../assets/resto1.png">
    <h1>Sign Up</h1>

    <div class="register">
        <input type="text" ref="name" placeholder="Enter Name">
        <input type="email"  ref="email"  placeholder="Enter Email">
        <input type="password"  ref="pass"  placeholder="Enter Password">
        <button @click="fn_SignUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>

</div>
</template>

<script>

 import axios from "axios";

export default {
    name: "SignUp",
    mounted(){
        const user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'});
        }
    },
    methods:{
       async fn_SignUp(){

            const userInfo = {
                name:this.$refs.name.value,
                email : this.$refs.email.value,
                pass:this.$refs.pass.value

            }

            const result = await axios.post("http://localhost:3000/user",userInfo);

            if(result.status == 201){
                console.log("Sign Up Successful!");
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'Home'});
            }
            else{
                console.log("Sign Up Failed!");
            }
            
        }
    }
}
</script>

<style>
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border: 1px solid #8d3030;
    border-radius: 5px;
}

.register button {
    color: white;
    margin: auto;
    padding: 10px;
    width: 325px;
    background-color: #8d3030;
    border-radius: 5px;
    cursor: pointer;
}

.logo {
    width: 185px;
}

.signup-container {
    background-color: #f1f5f6;
    padding: 30px;
    width: 500px;
    margin: auto;    
    border: 1px solid brown;
    border-radius: 10px;
}
</style>
