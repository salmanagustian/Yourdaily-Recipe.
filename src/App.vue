<template>
  <div id="app">
      <main>
        <Navbar/>
        <router-view/>
        <Footer/>
      </main>
  </div>
</template>

<script>

import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Footer,
    Navbar
  },  
}
</script>
