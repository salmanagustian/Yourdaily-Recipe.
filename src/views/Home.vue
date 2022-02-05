<template>
  <div>
      <Hero/>

      <RecipesCategory/>

      <Recipes/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
      RecipesCategory : () => import('@/components/RecipesCategory.vue'),
      Recipes : () => import('@/components/Recipes.vue'),
      Hero : () => import('@/components/Hero.vue'),
  },
}
</script>
