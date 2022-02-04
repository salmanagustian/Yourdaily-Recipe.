<template>
  <div>
      <Hero/>
      
      <ListCategoryRecipes v-on:completed-get-recipe="showRecipe"/>
      
      <ListRecipes :recipes="recipes" v-on:completed-get-search-recipe="showRecipe"/>
  </div>
</template>

<script>
import ListCategoryRecipes from '@/components/ListCategoryRecipes.vue';
import ListRecipes from '@/components/ListRecipes.vue';
import Hero from '@/components/Hero.vue';
import {mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
    ListCategoryRecipes,
    ListRecipes,
    Hero,
  },

  
    data() {
        return {
            recipes: [],
        }
    },

    created() {
        this.getRecipes();
    },

    methods: {
        ...mapActions({
            set: 'set'
        }),
        getRecipes() {
           
            this.set(true);
           // eslint-disable-next-line no-undef
           axios.get('https://khansa-salman.com/api/recipes')
            .then(({data}) => {
                this.set(false);
                this.recipes.push(...data);
            }).catch((err) => {
                console.log(err);
            });
        },

        showRecipe(data, clearRecipe = false) {

          if(clearRecipe === true)
            return this.recipes = [];

          this.recipes = data;
        },
    },
}
</script>
