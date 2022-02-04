<template>
    <div>
        <div data-placeholder class="h-8 mb-6 w-52 mt-10 overflow-hidden relative bg-truGray-200 rounded-2xl" v-if="loading"></div>
        <div v-else class="mb-6 text-2xl font-semibold text-truGray-700">Kategori Resep</div>

        <!-- List Category Recipe -->
        <div class="flex flex-col space-y-3" v-if="loading">
            <div data-placeholder class="h-10 w-full overflow-hidden relative bg-truGray-200 rounded-2xl"></div>
            <div data-placeholder class="h-10 w-full overflow-hidden relative bg-truGray-200 rounded-2xl"></div>
            <div data-placeholder class="h-10 w-full overflow-hidden relative bg-truGray-200 rounded-2xl"></div>
        </div>

        <div v-else class="flex flex-row space-x-5">
            <div 
                v-for="(category, index) in categories" 
                v-bind:key="category.key" 
                v-on:click.prevent="getRecipe(category.key)" 
                :class="['recipes-food-category', { activeCategory : currentCategory === category.key }]">
                <div class="flex flex-col items-center space-y-3">
                    <div class="text-xs">
                        <img :src="`${thumbsCategories[index]}`" class="w-8 h-8" alt="Category Food">
                    </div>
                    <div class="text-xs font-bold text-center text-truGray-700">{{ category.category }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListCategories',

    data() {
        return {
            categories: [],
            currentCategory: '',
            thumbsCategories: [
                require('@/assets/categories-food/dessert.png'),
                require('@/assets/categories-food/hari-raya.png'),
                require('@/assets/categories-food/traditional.png'),
                require('@/assets/categories-food/dinner.png'),
                require('@/assets/categories-food/lunch.png'),
                require('@/assets/categories-food/chicken.png'),
                require('@/assets/categories-food/meat.png'),
                require('@/assets/categories-food/sayuran.png'),
                require('@/assets/categories-food/sea-food.png'),
                require('@/assets/categories-food/breakfast.png'),
            ],
            loading: false,
        }
    },

    created() {
        this.getFoodCategories();
    },

    methods: {
        getFoodCategories() {
           this.loading = true;

           // eslint-disable-next-line no-undef
           axios.get('https://khansa-salman.com/api/category/recipes')
            .then(({data}) => {
                this.loading = false;
                this.categories.push(...data);
            }).catch((err) => {
                console.log(err);
            });
        },

        getRecipe(slug) {
            if (this.timeout) 
                clearTimeout(this.timeout); 

            this.timeout = setTimeout(() => {
                this.currentCategory = slug;
                
                // eslint-disable-next-line no-undef
                axios.get(`https://khansa-salman.com/api/categorys/recipes/${slug}`)
                .then(({data}) => {
                    this.$emit('completed-get-recipe', data);
                }).catch((err) => {
                    console.log(err);
                });
            }, 200);

        },
    },
}
</script>