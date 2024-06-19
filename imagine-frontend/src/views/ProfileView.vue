<template>
  <v-container>
    <!-- profile info -->
    <!-- profile picture and name -->
    <v-card class="d-flex pa-5">
      <v-sheet>
        <v-img src="@/assets/Images/defaultuser.png" width="85">
        </v-img>
      </v-sheet>
        
      <v-sheet class="ml-10 pl-6">
        <h1 align-center>Account name here</h1>
        <v-container class="d-flex">
          <v-sheet>
            <h2>
              First Name
            </h2>
          </v-sheet>
          <v-spacer></v-spacer>
          <v-sheet>
            <h2>
              Last Name
            </h2>
          </v-sheet>
        </v-container>
      </v-sheet>
      <v-spacer width="300"></v-spacer>
      <v-card-actions>
        <v-btn flat class="grey-text" :to="{name: 'signup'}">
            <v-icon small left>mdi-tag-edit</v-icon>
            Edit Profile
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- interests -->
    <v-card class="ma-3">
      <h2 class="pa-3 ml-3 pb-0">
        Interested in
      </h2>
      <v-container class="ma-2 pa-5">
        <ul v-for="interest in interests" :key="interest">
          <li>{{ interest }}</li>
        </ul>
      </v-container>
    </v-card>
    <!-- posts -->
    <v-container>
      <ExploreFeed/>
    </v-container>
  </v-container>
  
</template>

<script>
import ExploreFeed from '@/components/ExploreFeed.vue';

export default {
  name: 'ProfileView',
  components:{
    ExploreFeed,
  },
  data() {
    return {
      interests:  [
        'warhammer 40k',
        'dnd',
        'retro-art',
        'cats'
      ],
      posts:  [
        {
          "caption": 'hello world',
          "liked": true
        },
        {
          "caption": 'hello world 2',
          "liked": false
        }
      ],
    }
  }
}
</script>

<style>

</style>