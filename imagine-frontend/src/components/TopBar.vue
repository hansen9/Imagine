<template>
    <div class="navbar">
        <div class="float-left d-flex align-content-start flex-wrap">
            <v-img
            src="@/assets/imagine-logo-zip-file/png/logo-no-background-no-text.png"
            width="70"
            class="ma-2"
            />
            <nav class="ma-3">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> | 
                <router-link to="/explore">Explore</router-link>
            </nav>
        </div>
        

        <v-card-actions class="float-right" v-if="!isLogin">
            <v-btn flat class="grey-text" :to="{name: 'login'}">
                Log In
            </v-btn>
            <v-btn flat class="grey-text" :to="{name: 'signup'}">
                Sign up
            </v-btn>
        </v-card-actions>
        <v-card-actions class="float-right" v-else>
            <v-btn flat class="grey-text" :to="{name: 'profile'}">
                Account
            </v-btn>
            <v-btn flat class="grey-text" :to="{name: 'create'}">
                Create
            </v-btn>
        </v-card-actions>
    </div>
    
</template>

<script>
export default {
    name: 'TopBar',
    data() {
    return {
      "isLogin":true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar{
        background-color: #7BC9FF;
        height: 100px;
        padding-left: 5px;
        padding-right: 5px;
    }
    /* a{
        color: #5DEBD7;
    }
    a:visited{
        color: #1679AB;
    } */
</style>