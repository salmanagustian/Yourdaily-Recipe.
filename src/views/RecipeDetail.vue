<template>
  <div class="flex flex-col space-y-3 justify-center items-center my-20" v-if="recipe.thumb">
      <div>
         <img :src="recipe.thumb" class="object-cover rounded-3xl" loading="lazy" alt="Resep Food" width="350">
      </div>
      <div class="flex flex-row">
         <div class="text-base text-truGray-500">
            {{ recipe.title }}
         </div>
         <div class="text-base text-truGray-500">
            {{ recipe.servings }}
         </div>
         <div class="text-base text-truGray-500">
            {{ recipe.time }}
         </div>
         <div class="text-base text-truGray-500">
            {{ recipe.dificulty }}
         </div>
      </div>
      <div class="text-sm text-truGray-500">
         {{ recipe.desc }}
      </div>
      <div class="text-sm text-truGray-500">
         {{ recipe.ingredient }}
      </div>
      <div class="text-sm text-truGray-500">
         {{ recipe.step }}
      </div>
  </div>
</template>

<script>
export default {
   data(){
      return {
         slug: this.$route.params.slug,
         recipe: {},
      }
   },

   created() {
      // eslint-disable-next-line no-undef
      axios.get(`https://khansa-salman.com/api/recipe/${this.slug}`)
      .then(({data}) => {
         this.recipe = data;
      }).catch((err) => {
            console.log(err);
      });
   },
}
</script>
