<template>
  <div>
        <ListCategoryRecipes v-on:completed-get-recipe="showRecipe"/>
        
        <ListRecipes :recipes="recipes"/>
  </div>
</template>

<script>
import ListCategoryRecipes from '@/components/ListCategoryRecipes.vue';
import ListRecipes from '@/components/ListRecipes.vue';

export default {
  name: 'Home',
  components: {
    ListCategoryRecipes,
    ListRecipes,
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
        getRecipes() {
           
           // eslint-disable-next-line no-undef
           axios.get('https://khansa-salman.com/api/recipes')
            .then(({data}) => {
                this.recipes.push(...data);
            }).catch((err) => {
                console.log(err);
            });
        },

        showRecipe(data) {
          this.recipes = data;
        },
    },
}
</script>
