<template >
<!-- App.vue -->
<!-- base color 011838 -->
<v-app>
  <v-expand-x-transition>
  <Header :isMobile="isOnMobile" />
  </v-expand-x-transition>
  <!-- Sizes your content based upon application components -->
  <v-sheet id="pageBody" class="overflow-y-auto" max-height="100vh" style="overflow-x: hidden;">
    <v-expand-x-transition>
  <v-main >
    
      <!-- Provides the application the proper gutter -->
      <v-container fluid >

        <!-- If using vue-router -->
        <router-view ></router-view>
      </v-container>
   
  </v-main>
    </v-expand-x-transition>
<Footer  :isMobile="isOnMobile" />
</v-sheet>

</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import webUtils from './utils/WebUtils';
import themHandler from './ThemeHandler';

@Component({
  components: {
    Header,
    Footer
  }, 
})

export default class App extends Vue{
  isOnMobile = false;
  mounted(){
    console.log("Screen Size : " + webUtils.screenSize(this));
    console.log("Is Mobile   : " + webUtils.isMobile(this));
    this.isOnMobile = webUtils.isMobile(this);
    themHandler.activateTheme(this.isOnMobile,false);
  }
}
</script>
