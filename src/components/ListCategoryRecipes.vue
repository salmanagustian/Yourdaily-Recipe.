<template>
    <div>
        <div class="mt-16 mb-6 text-2xl font-semibold text-truGray-700">Kategori Resep</div>
        <div class="flex flex-row space-x-5">
            <div 
                v-for="(category, index) in categories" 
                :key="index" 
                @click="getRecipe(category.key)" 
                class="select-none w-28 rounded-[25px] py-7 border-[1px] border-truGray-200 bg-truGray-100 hover:border-green-500 hover:bg-green-100/40 cursor-pointer">
                <div class="flex flex-col items-center space-y-3">
                    <div class="text-xs">
                        <img src="@/assets/categories-food/meat.png" class="w-8 h-8" alt="Category Food">
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
            isActive: false,
        }
    },

    created() {
        this.getFoodCategories();
    },

    methods: {
        getFoodCategories() {
           
           // eslint-disable-next-line no-undef
           axios.get('https://khansa-salman.com/api/category/recipes')
            .then(({data}) => {
                this.categories.push(...data);
            }).catch((err) => {
                console.log(err);
            });
        },

        getRecipe(slug) {
            this.isActive = true;
             // eslint-disable-next-line no-undef
            axios.get(`https://khansa-salman.com/api/categorys/recipes/${slug}`)
            .then(({data}) => {
                this.$emit('completed-get-recipe', data);
            }).catch((err) => {
                console.log(err);
            });
        },
    },
}
</script>