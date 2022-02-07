<template>
  <div v-if="recipe.title" class="flex flex-col items-center justify-center my-20 space-y-3">
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
         <ul>
            <li v-for="(ingredients, index) in recipe.ingredient" :key="index">
               {{ ingredients }}
            </li>
         </ul>
      </div>
      <div class="text-sm text-truGray-500">
         <ul>
            <li v-for="(steps, index) in recipe.step" :key="index">
               {{ steps }}
            </li>
         </ul>
      </div>
      <div>
         <button class="bookmark" role="button" v-on:click="addToBookmark()">
            Bookmark
         </button>
      </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
   name: 'RecipeDetail',
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

   methods: {
      ...mapActions({
         add : 'bookmark/add',
      }),

      addToBookmark() {
         this.add(this.recipe.title);
      },
   },
}
</script>
