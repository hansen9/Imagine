<template>
  <v-container class="aboutcontent">
    <v-row no-gutters>
      <v-col
        :transition="isScroll ? slide-x-transition : slide-x-reverse-transition"
        @scroll.passive="isScroll = !isScroll"
        >
        <v-img 
        src="@/assets/Images/antique_bottle.jpeg" 
        width="300" 
        />
      </v-col>
      <v-col>
        <v-card class="mb-5 pa-5" width="650">
          <h1>Welcome To Imagine</h1>
          <p>Welcome to Imagine, your one-stop platform for visual inspiration 
            and creative exploration! We're passionate about empowering individuals 
            to discover and share captivating content, just like Pinterest. But Imagine 
            takes it a step further, offering a unique blend of inspiration and creation tools.
          </p>
        </v-card>
      </v-col>
      
      <v-col>
        <v-card class="mb-5 pa-5" width="650">
          <h2>Here's what sets Imagine apart:</h2>
          <ul>
            <li>
              <h3>Curated Collections:</h3> Dive into a world of stunning visuals across various categories. 
              From travel photography and mouthwatering recipes to DIY projects and fashion inspiration, 
              we have something to ignite your curiosity in everyone.
            </li>

            <li>
              <h3>Creative Playground:</h3> Unleash your inner artist with our intuitive tools. Craft beautiful 
              mood boards, curate personalized collections, and even add your own creative flair to existing images.
            </li>

            <li>
              <h3>Community Connection: </h3>Join a vibrant community of creators and discover new perspectives. 
              Share your creations, get inspired by others, and collaborate on projects to bring your vision to life.
            </li>
            
            <li>
              <h3>Always Evolving: </h3> We're constantly innovating to bring you the latest trends and features. 
              Stay tuned for exciting updates that will push the boundaries of your imagination.
            </li>
          </ul>
        </v-card>
      </v-col>
      
      <v-col>
        <v-img src="@/assets/Images/antique_bottle.jpeg" width="300"/>
      </v-col>

      <v-col>
        <v-img src="@/assets/Images/antique_bottle.jpeg" width="300"/>
      </v-col>
      <v-col>
        <v-card class="mb-5 pa-5" width="650">
          <h2>Imagine is perfect for:</h2>
          <ul>
            <li>
              <h3>Visual Learners:</h3> Explore a world of ideas and inspiration through captivating imagery.
            </li>

            <li>
              <h3>Content Creators:</h3> Find endless inspiration for your next blog post, social media content, 
              or creative project.
            </li>

            <li>
              <h3>Design Enthusiasts: </h3>Develop your aesthetic sense and curate beautiful mood boards for any occasion.
            </li>
            
            <li>
              <h3>Anyone who wants to have fun! </h3>Unleash your creativity and explore new possibilities in 
              a positive and inspiring environment.
            </li>
          </ul>
        </v-card>
      </v-col>
    </v-row>
    <p>Join the Imagine Community Today!</p>
  </v-container>
</template>

<script>

export default {
  name: 'AboutView',
  components: {
    
  },
  data: ()=>({
    isScroll: true
  })
}
</script>