<template>
<HeaderComp />

<h1>Welcome, To Restaurant Forest</h1>

<div v-if="restaurants.length > 0">
    <div class="card-container">
        <div v-for="rest in restaurants" :key="rest.id">
            <RestoCard :title="rest.title" :description="rest.description" :location="rest.location" :rating="rest.rating" :id="rest.id"/>
        </div>        
    </div>
</div>
</template>

<script>
import HeaderComp from "./Header.vue";
import RestoCard from "./RestoCard.vue";
import axios from "axios";

export default {

    name: 'HomeComp',
    components: {
        HeaderComp,
        RestoCard
    },
    data() {
        return {
            restaurants: []
        }
    },
    async mounted() {
        this.fn_FetchAllResaurants();
        const user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            });
        }
    },
    methods: {
        async fn_FetchAllResaurants() {
            const data = await axios.get('http://localhost:3000/Restaurant');
            this.restaurants = data.data;
        }
    }
}
</script>

<style>
.register input,
.login input {
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

.register button,
.login button {
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

.signup-container,
.login-container {
    background-color: #f1f5f6;
    padding: 30px;
    width: 500px;
    margin: auto;
    border: 1px solid brown;
    border-radius: 10px;
    margin-top: 20px;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

@media (max-width: 1024px) {
    .card-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .card-container {
        grid-template-columns: 1fr;
    }
}
</style>
