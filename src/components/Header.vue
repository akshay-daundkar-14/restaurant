<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link> 
    <a class="user-greeting">Hello, {{name}}</a>
    <a @click="fn_logout" >LogOut</a>
</div>
</template>

<script>
export default {
    name: 'HeaderComp',
    data(){
        return{
            name:''
        }
    },
    methods:{
        fn_logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    },
    mounted(){
        const user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
    }
}
</script>

<style>
.nav{
    background-color: #e67e22;
    overflow: hidden;
    display: flex;
    margin-bottom: 10px;
}

.nav a {
    text-decoration: none;
    padding: 14px 18px;
    color: white;
    font-size: 18px;
}

.nav a:hover{
    background-color: white;
    color: black;
}
.user-greeting {
    margin-left: auto; /* Pushes this item to the right */
}
</style>
