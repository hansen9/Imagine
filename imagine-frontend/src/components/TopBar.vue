<template>
    <div class="navbar">
        <img alt="Vue logo" src="../assets/logo.png">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> | 
            <router-link to="/explore">Explore</router-link>
        </nav>

        <button>Log In</button> 
        <button>Create Account</button>
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
        /* padding: 5px; */
        padding-left: 5px;
        padding-right: 5px;
    }
    .navbar *{
        display: inline-block;
        margin-top: 25px;
        margin-bottom: 10px;
    }
    img{
        width: 50px;
        height: 50px;
    }
    img, nav{
        float: left;
    }
    button{
        float: right;
    }
    a{
        color: #5DEBD7;
    }
    a:visited{
        color: #1679AB;
    }
</style>