<template>
    <div>
        <div class="mt-16 mb-6 text-2xl font-semibold">Resep Popular</div>

        <div class="grid grid-cols-4 gap-8">
            <div class="flex flex-col justify-start" v-for="(recipe, index) in recipes" :key="index">
                <div>
                    <img :src="`${recipe.images}`" class="rounded-3xl" alt="Resep Food" width="280" height="168">
                </div>
                <div class="text-sm font-semibold text-truGray-800 mt-3">{{ recipe.name }}</div>
                <div class="flex flex-row items-center space-x-3 mt-2">
                    <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-xs text-truGray-300 font-medium">45 Menit</span>
                    </div>
                     <!-- <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span class="text-xs text-truGray-300">Mudah</span>
                    </div> -->
                    <div class="flex items-center space-x-1">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg> -->
                        <span class="text-xs text-truGray-300 font-medium">Mudah</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg> -->
                        <span class="text-xs text-truGray-300 font-medium">4 Porsi</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListProducts',

    data() {
        return {
            recipes: [
                {
                    'name': 'Resep Ceker Pedas Empuk',
                    'images': require('@/assets/recipes-food/ceker.jpg')
                },
                {
                    'name': 'Resep Puding Mangga A la Hong Kong',
                    'images': require('@/assets/recipes-food/pudding.jpg')
                },
                {
                    'name': 'Resep Sate Sapi Bumbu Ketumbar',
                    'images': require('@/assets/recipes-food/sate-sapi.jpg')
                },
                {
                    'name': 'Resep Laksa Udang,',
                    'images': require('@/assets/recipes-food/laksa-udang.jpg')
                },
                {
                    'name': 'Resep Ceker Pedas Empuk',
                    'images': require('@/assets/recipes-food/ceker.jpg')
                },
                {
                    'name': 'Resep Puding Mangga A la Hong Kong',
                    'images': require('@/assets/recipes-food/pudding.jpg')
                },
                {
                    'name': 'Resep Sate Sapi Bumbu Ketumbar',
                    'images': require('@/assets/recipes-food/sate-sapi.jpg')
                },
                {
                    'name': 'Resep Laksa Udang,',
                    'images': require('@/assets/recipes-food/laksa-udang.jpg')
                },
            ],
        }
    },
}
</script>