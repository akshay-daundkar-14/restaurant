<template>
<div>
    <div class="card">
        <img :src="getImageUrl(id)" alt="Restaurant Image" class="card-image">
        <div class="card-content">
            <h2 class="card-title">{{title}}</h2>
            <p class="card-description">{{description}}</p>
            <div class="card-details">
                <p><strong>Location:</strong> {{ location }}</p>
                <p><strong>Rating:</strong>

                    <span v-if="rating ==1">
                        ★☆☆☆☆
                    </span>
                    <span v-else-if="rating ==2">
                        ★★☆☆☆
                    </span>
                    <span v-else-if="rating ==3">
                        ★★★☆☆
                    </span>
                    <span v-else-if="rating ==4">
                        ★★★★☆
                    </span>
                    <span v-else-if="rating ==5">
                        ★★★★★
                    </span>
                    <span v-else>
                        ☆☆☆☆☆
                    </span>
                </p>
            </div>            
            <router-link class="card-button" :to="'/edit/'+id">Action</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'RestoCard',
    data() {
        return {

        }
    },
    props: {
        title: String,
        description: String,
        location: String,
        rating: Number,
        id:{
            type:Number,
            required:true
        }
    },
    methods:{
        getImageUrl(id) {
      // Compute the filename based on id
      const filename = `resto${id - 1 + 2}.jpg`;
      // Use require to resolve the path
      return require(`@/assets/${filename}`);
    }
    }
}
</script>

<style>
.resto-container {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f8f8f8;
}

.card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 350px;
    margin: 20px;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.5em;
    margin: 0;
    color: #333;
}

.card-description {
    font-size: 1em;
    color: #666;
    margin: 10px 0;
}

.card-details {
    margin: 15px 0;
    font-size: 0.9em;
    color: #555;
}

.card-button {
    display: block;
    width: 100%;
    padding: 10px 0;
    background-color: #e67e22;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.2s;
    text-decoration: none
}

.card-button:hover {
    background-color: #d35400;
}
</style>
