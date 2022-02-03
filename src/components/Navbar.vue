<template>
    <navbar>
        <div class="mr-auto">
            <span class="text-2xl font-light">Yourdaily 🍲</span> <br>
            <span class="text-4xl font-bold text-amber-400">Recipe.</span>
        </div>
        <div class="flex flex-row space-x-2">
            <div class="flex items-center w-[430px] rounded-xl bg-truGray-100 py-3 px-5">
                <div class="w-full mr-auto">
                    <input 
                        class="w-full text-sm font-light bg-transparent outline-none text-truGray-400" 
                        type="text" 
                        name="search" 
                        v-model="querySearch"
                        placeholder="Cari Resep Masakan">
                </div>
                <div 
                    class="cursor-pointer"
                    v-on:click="recipeSearch()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div class="relative px-4 py-3 bg-amber-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <div class="absolute top-[-10px] right-[-5px] px-2 py-1 text-white text-xs bg-green-500 rounded-lg">
                    4
                </div>
            </div>
        </div>
    </navbar>
</template>

<script>
export default {
    name: 'NavbarSection',

    data() {
        return {
            querySearch: '',
        }
    },

    methods: {
        recipeSearch() {
            const qSearch = this.querySearch;

            // eslint-disable-next-line no-undef
            axios.get(`https://khansa-salman.com/api/recipe/search/${qSearch}`)
                .then(({data}) => {
                    console.log(data);
                    // this.$emit('completed-get-recipe', data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
}
</script>