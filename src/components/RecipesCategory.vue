<template>
    <div>
        <div
            data-placeholder
            class="relative h-8 mt-10 mb-6 overflow-hidden rounded-md w-52 bg-gradient-to-r bg-truGray-200 dark:bg-[#2e2e33]"
            v-if="loadingCategory"
        ></div>
        <div
            v-else
            class="mb-6 text-2xl font-semibold text-truGray-700 dark:text-white/80"
        >
            Kategori Resep
        </div>

        <!-- List Category Recipe -->
        <div class="flex flex-col space-y-3" v-if="loadingCategory">
            <div
                data-placeholder
                class="relative w-full h-8 overflow-hidden rounded-md bg-gradient-to-r bg-truGray-200 dark:bg-[#2e2e33]"
            ></div>
            <div
                data-placeholder
                class="relative w-full h-8 overflow-hidden rounded-md bg-gradient-to-r bg-truGray-200 dark:bg-[#2e2e33]"
            ></div>
            <div
                data-placeholder
                class="relative w-full h-8 overflow-hidden rounded-md bg-gradient-to-r bg-truGray-200 dark:bg-[#2e2e33]"
            ></div>
        </div>

        <div v-else class="flex flex-row space-x-5">
            <div
                v-for="(category, index) in categories"
                v-bind:key="category.key"
                v-on:click="getRecipeByCategory(category.key)"
                :class="[
                    'recipes-food-category',
                    { activeCategory: currentCategory === category.key }
                ]"
            >
                <div class="flex flex-col items-center space-y-3">
                    <div class="text-xs">
                        <img
                            :src="`${thumbsCategories[index]}`"
                            class="w-8 h-8"
                            alt="Category Food"
                        />
                    </div>
                    <div
                        class="text-xs font-bold text-center text-truGray-700 dark:text-white/50"
                    >
                        {{ category.category }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
                require('@/assets/categories-food/breakfast.png')
            ],
            loadingCategory: true
        }
    },

    created() {
        this.getFoodCategories()
    },

    computed: {
        ...mapGetters({
            loading: 'loading',
            recipes: 'recipe/recipes'
        })
    },

    methods: {
        ...mapActions({
            set: 'set',
            setResultRecipe: 'setResultRecipe',
            add: 'recipe/add'
        }),

        getFoodCategories() {
            this.loadingCategory = true

            // eslint-disable-next-line no-undef
            this.axios
                .get('category/recipes')
                .then(({ data }) => {
                    this.loadingCategory = false
                    this.categories.push(...data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        getRecipeByCategory(slug) {
            this.set(true)
            this.setResultRecipe(false)

            if (this.timeout) clearTimeout(this.timeout)

            this.timeout = setTimeout(() => {
                this.currentCategory = slug

                // eslint-disable-next-line no-undef
                this.axios
                    .get(`/categorys/recipes/${slug}`)
                    .then(({ data }) => {
                        this.set(false)
                        this.add(data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }, 200)
        }
    }
}
</script>
