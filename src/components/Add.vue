<template>
<HeaderComp />

<div class="rest-container">
    
    <img class='logo' alt="Vue logo" src="../assets/resto1.png">
    <h1>Add New Restaurant</h1>

    <div class="add-resto-form">
        <input type="text" v-model="title" placeholder="Enter Restaurant Title">
        <input type="text" v-model="description" placeholder="Enter Restaurant Description">
        <input type="text" v-model="location" placeholder="Enter Restaurant Location">
        <input type="text" v-model="rating" placeholder="Enter Restaurant Rating">
        <button @click="fn_AddResto">Add Restaurant</button>
    </div>

</div>
</template>

<script>
import HeaderComp from "./Header.vue";
import axios from "axios";

export default {
    name: 'AddResto',
    components: {
        HeaderComp
    },
    data(){
        return{
            title:'',
            description:'',
            rating:'',
            location:''
        }
    },
    methods:{
       async fn_AddResto(){

            const restoInfo = {
                title:this.title,
                description:this.description,
                rating:this.rating,
                location:this.location
            }

            const result = await axios.post("http://localhost:3000/Restaurant",restoInfo);

            if(result.status == 201){
                console.log("Restaurant Successful!");
                this.$router.push({name:'Home'});
            }
            else{
                console.log("Adding Restaurant Failed!");
            }
            
        }
    }
}
</script>

<style scoped>
.add-resto-form input {
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

.add-resto-form button {
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

.rest-container {
    background-color: #f1f5f6;
    padding: 30px;
    width: 500px;
    margin: auto;    
    border: 1px solid brown;
    border-radius: 10px;
}
</style>
