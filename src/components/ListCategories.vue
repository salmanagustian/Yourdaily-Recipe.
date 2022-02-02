<template>
    <div class="my-10">
        <div class="flex flex-row space-x-5">
            <div class="w-28 rounded-[25px] py-7 px- border-[1px] border-truGray-200 bg-truGray-100" v-for="(category, index) in categories" :key="index">
                <div class="flex flex-col items-center space-y-3">
                    <div class="text-xs">
                        <img :src="`${category.images}`" class="w-8 h-8" alt="Category Food">
                    </div>
                    <div class="font-bold text-truGray-500 text-xs">{{ category.name }}</div>
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
            categories: [
                {
                    'name': 'Dessert',
                    'images': require('@/assets/categories-food/ice-cream.png')
                },
                {
                    'name': 'Daging',
                    'images': require('@/assets/categories-food/meat.png')
                },
                {
                    'name': 'Sayuran',
                    'images': require('@/assets/categories-food/harvest.png')
                },
                {
                    'name': 'Sea Food',
                    'images': require('@/assets/categories-food/sea-food.png')
                },
            ],
        }
    },

    created() {
        this.getFoodCategories();
    },

    methods: {
        getFoodCategories() {
           
           // eslint-disable-next-line no-undef
           axios.get('https://cors.bridged.cc/https://masak-apa.tomorisakura.vercel.app/api/recipes/')
            .then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
            // fetch('https://masak-apa.tomorisakura.vercel.app/api/recipes', {
            //     mode: 'development',
            //     devServer: {
            //         headers: {
            //             'Access-Control-Allow-Origin': '*',
            //             'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
            //             'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            //         },
            //         proxy: {
            //             '/recipes' : {
            //                 target: 'https://masak-apa.tomorisakura.vercel.app',
            //                 secure: false,
            //                 changeOrigin: true,
            //                 pathRewrite: { '^/recipes': '' },
            //             },
            //         },
            //     },
            // })
            //     .then((result) => {
            //         console.log(result);
            //     }).catch((err) => {
            //         console.log(err);
            //     });
            //  const config = {
            //     headers: {"Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Credentials':true}
            // }
            // eslint-disable-next-line no-undef
            // axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipes', {crossdomain: true} ,config)
            //     .then(({data}) => {
            //         const dataCategories = data.results;

            //         this.categories.push(...dataCategories);
            //     }).catch((err) => console.log(err));
        },
    },
}
</script>