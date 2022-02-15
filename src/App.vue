<template>
  <div id="app">
    <main>
      <Navbar />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Footer: () => import("@/components/Footer.vue"),
    Navbar: () => import("@/components/Navbar.vue"),
  },
};
</script>
