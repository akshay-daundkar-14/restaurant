<template>
<HeaderComp />

<div class="rest-container">

    <img class='logo' alt="Vue logo" src="../assets/resto1.png">
    <h1>Edit Restaurant</h1>

    <div class="add-resto-form">
        <input type="text" v-model="title" placeholder="Enter Restaurant Title">
        <input type="text" v-model="description" placeholder="Enter Restaurant Description">
        <input type="text" v-model="location" placeholder="Enter Restaurant Location">
        <input type="text" v-model="rating" placeholder="Enter Restaurant Rating">
        <div class="button-group">
            <button @click="fn_EditResto">Edit Restaurant</button>
            <button @click="fn_DeleteResto">Delete Restaurant</button>
        </div>
    </div>

</div>
</template>

    
<script>
import HeaderComp from "./Header.vue";
import axios from "axios";
import {
    useRoute
} from "vue-router"

export default {
    name: 'EditResto',
    components: {
        HeaderComp
    },
    data() {
        return {
            id:0,
            title: '',
            description: '',
            rating: '',
            location: ''
        }
    },
    async mounted() {
        const resId = useRoute().params.id;
        this.id = resId;
        const result = await axios.
        get(`http://localhost:3000/Restaurant?id=${resId}`);


        if (result.status == 200 && result.data.length > 0) {
            this.title = result.data[0].title;
            this.description = result.data[0].description;
            this.rating = result.data[0].rating;
            this.location = result.data[0].location;
        }

    },
    methods: {
        async fn_EditResto() {
            const restoInfo = {
                id:this.id,
                title: this.title,
                description: this.description,
                rating: this.rating,
                location: this.location
            }

            const result = await axios.put("http://localhost:3000/Restaurant/"+this.id, restoInfo);

            if(result.status == 200){
                console.log("Restaurant Successful!");
                this.$router.push({name:'Home'});
            }
            else{
                console.log("Adding Restaurant Failed!");
            }
        },
        async fn_DeleteResto() {

            const result = await axios.delete("http://localhost:3000/Restaurant/"+this.id);

            if(result.status == 200){
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

    
<style>
.add-resto-form input {
    width: 460px;
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
    width: 225px;
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

.button-group {
    display: flex;
    gap: 10px; /* Add space between buttons */
}


</style>
