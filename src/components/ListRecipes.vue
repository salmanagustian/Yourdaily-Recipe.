<template>
    <div>
        <div class="mt-10 mb-6 text-2xl font-semibold text-truGray-700">Popular Resep</div>

        <div class="grid grid-cols-4 gap-8">
            <div class="recipes-food" v-for="(recipe, index) in recipes" :key="index">
                <div class="recipes-food__image">
                    <img :src="`${recipe.thumb}`" class="rounded-3xl object-cover duration-200 hover:scale-105" loading="lazy" alt="Resep Food" width="300" height="168">
                </div>
                <div class="recipes-food__title">{{ recipe.title }}</div>
                <div class="flex flex-row items-center mt-2 space-x-3">
                    <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-xs font-medium text-truGray-300">{{ recipe.times }}</span>
                    </div>
                     <!-- <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span class="text-xs text-truGray-300">Mudah</span>
                    </div> -->
                    <div class="flex items-center space-x-1">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg> -->
                        <span class="text-xs font-medium text-truGray-300">{{ recipe.dificulty }}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg> -->
                        <span class="text-xs font-medium text-truGray-300">{{ recipe.portion }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListRecipes',

    props: ['recipes'],
}
</script>