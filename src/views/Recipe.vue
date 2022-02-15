<template>
   <div class="flex justify-center items-center my-20">
      <div class="w-1/2">
         <div v-if="recipe.title" class="flex flex-col space-y-5">
            <div>
               <img :src="recipe.thumb" class="object-cover rounded-3xl w-full" loading="lazy" alt="Resep Food" width="350">
            </div>
            <div class="text-2xl font-semibold text-truGray-800 dark:text-white/50">
               {{ recipe.title }}
            </div>
            <div class="w-full
               bg-[#6d432d] hover:bg-[#4f3122] rounded-xl py-2 px-5 cursor-pointer">
               <div class="flex items-center justify-between">
                  <div class="text-white text-sm">
                     Ingredients
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 stroke-current text-white"
                        fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                     </svg>
                  </div>
               </div>
            </div>
            <div class="w-full
               bg-[#6d432d] hover:bg-[#4f3122] rounded-xl py-2 px-5 cursor-pointer">
               <div class="flex items-center justify-between">
                  <div class="text-white text-sm">
                     Steps
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 stroke-current text-white"
                        fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                     </svg>
                  </div>
               </div>
            </div>
            <div>
               <button class="bookmark" role="button" v-on:click="bookmark()">
                  <div class="flex items-center gap-1">
                     <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                     </svg>
                     <div>
                        Bookmark
                     </div>
                  </div>
               </button>
            </div>
         </div>
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

   computed: {
      formattedStep() {
         return this.recipe.step.map((steps, index) => {
            const indexes = String(index + 1);
            return steps.replace(indexes, '');
         })
      }
   },
   methods: {
      ...mapActions({
         add : 'bookmark/add',
      }),

      bookmark() {
         this.add(this.recipe.title);
      },
   },
}
</script>
