<template>
    <div class="navbar">
        <div class="float-left d-flex align-content-start flex-wrap">
            <v-img
            src="@/assets/logo.png"
            width="70"
            />
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> | 
                <router-link to="/explore">Explore</router-link>
            </nav>
        </div>
        

        <v-card-actions class="float-right">
            <v-btn flat class="grey-text">
                Log In
                <!-- <v-icon small left>{{ likeIcon }}</v-icon> -->
            </v-btn>
            <v-btn flat class="grey-text">
                <router-link to="/signup">Sign up</router-link>
                <!-- <v-icon small left>{{ keepIcon }}</v-icon> -->
            </v-btn>
        </v-card-actions>
    </div>
    
</template>

<script>
export default {
    name: 'TopBar',
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar{
        background-color: #C5FF95;
        height: 100px;
        padding-left: 5px;
        padding-right: 5px;
    }
    a{
        color: #5DEBD7;
    }
    a:visited{
        color: #1679AB;
    }
</style>