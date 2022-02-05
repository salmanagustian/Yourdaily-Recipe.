<template>
  <div class="about">
    <h1 v-text="recipe"></h1>
  </div>
</template>

<script>
export default {
   data(){
      return {
         recipe: this.$route.params.slug,
      }
   },
}
</script>
