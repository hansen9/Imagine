<template>
    <div>
        <div class="nav ma-2">
            <img>
            <div class="search-bar ml-4 pl-5">
                <img>
                <input type="text" placeholder="Search">
            </div>
            <div class="nav-icons">
                <img />
            </div>
        </div>
        <v-main>
            <div class="images">
                <h1 class="subheading grey-text ml-4 pl-5">Images</h1>
                <v-container class="my-5">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3 v-for="post in posts" :key="post">
                            <v-hover
                            v-slot="{ isHovering, props }">
                                <v-card 
                                flat 
                                class="text-xs-center ma-3 pa-4 imageCard" 
                                :class="{ 'on-hover': isHovering }"
                                :elevation="isHovering ? 12 : 2"
                                :color="isHovering ? 'blue-grey-lighten-2' : 'blue-grey-lighten-4'"
                                v-bind="props"
                                height="200"
                                width="170"
                                >
                                    <v-responsive class="pt4">
                                        image goes here
                                    </v-responsive>
                                    <div v-if="isHovering">
                                        <v-card-text>
                                            <div class="subheading">{{ post.owner }}</div>
                                            <div class="grey-text">#hashtag</div>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn flat class="grey-text" @click="toggleLike">
                                                <v-icon small left>{{ likeIcon }}</v-icon>
                                            </v-btn>
                                            <v-btn flat class="grey-text" @click="toggleKeep">
                                                <v-icon small left>{{ keepIcon }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card>
                            </v-hover>
                            
                        </v-flex>
                    </v-layout>
                </v-container>
            </div> 
        </v-main>
        
    </div>
</template>

<script>

export default {
    name: 'ExploreFeed',
    data() {
        return {
            posts:  [
                {
                    "owner": 'user1',
                    "caption": 'hello world',
                    "liked": true
                },
                {
                    "owner": 'user2',
                    "caption": 'hello world 2',
                    "liked": false
                }
            ],
            likeIcon: 'mdi-heart-outline',
            keepIcon: 'mdi-bookmark-outline',
        }
    },
    methods: {
        toggleLike(){
            this.likeIcon = (this.likeIcon === 'mdi-heart-outline' ? 'mdi-heart' : 'mdi-heart-outline')
        },
        toggleKeep(){
            this.keepIcon = (this.keepIcon === 'mdi-bookmark-outline' ? 'mdi-bookmark' : 'mdi-bookmark-outline')
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>  