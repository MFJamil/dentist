<template >
<!-- App.vue -->
<!-- base color 011838 -->
<v-app>
  <Header />
  <!-- Sizes your content based upon application components -->
  <v-sheet id="pageBody" class="overflow-y-auto" max-height="100vh" style="overflow-x: hidden;">
  <v-main >
    
      <!-- Provides the application the proper gutter -->
      <v-container fluid >

        <!-- If using vue-router -->
        <router-view ></router-view>
      </v-container>
   
  </v-main>
<Footer /> 
</v-sheet>

</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    Footer
  }, 
})

export default class App extends Vue{

}
</script>
