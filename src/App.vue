<template>
  <div id="app">
      <div class="container">
        <Navbar/>
        <ListCategories/>
        <ListProducts/>

      </div>
    <router-view/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import ListCategories from '@/components/ListCategories.vue';
import ListProducts from '@/components/ListProducts.vue';

export default {
  components: {
    Navbar,
    ListCategories,
    ListProducts,
  },  
}
</script>
