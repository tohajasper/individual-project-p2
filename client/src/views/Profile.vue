<template>
<div id='profile_page' class="container-sm p-5 mt-5">
    <h3><i class="bi bi-person-circle"></i> Your Profile</h3>
    <br>
    <div class ='ms-5 mb-5'>
        <p>Name :    {{userData.name}}</p>
        <p>Email:    {{userData.email}}</p>
        <p>Status:   {{userData.status}}</p>
    </div>
    <hr>
    <br>
    <div id='children' class="d-flex justify-content-between">
        <div>
            <router-link to="/profile">Your Recipes</router-link> | 
            <router-link to="/profile/purchased">Purchased Recipes</router-link>
        </div>
        <div v-if='$route.path == "/profile"' class=" me-5">
            <button class="btn btn-primary" @click='$router.push("/addRecipe")'>+ Create Recipe</button>
        </div>
    </div>
    <router-view></router-view>
</div>
  
</template>

<script>
export default {
    name: 'Profile',
    computed :{
        userData(){
            return this.$store.state.userData
        }
    },
    mounted(){
        if(!localStorage.access_token) this.$router.push('/')
    }
}
</script>

<style>
#children a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#profile_page{
    background-color: rgba(245, 245, 245);
    min-height: 100vh;
}

#children a.router-link-exact-active {
  color: #8a3d4f;
}

</style>