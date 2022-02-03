<template>
  <div id="app">
      <main>
        <NavbarSection/>
        <router-view/>
        <FooterSection/>
      </main>
  </div>
</template>

<script>

import NavbarSection from '@/components/Navbar.vue';
import FooterSection from '@/components/Footer.vue';

export default {
  components: {
    NavbarSection,
    FooterSection,
  },  
}
</script>
