<template>
    <div class="flex justify-start items-center mt-40">
        <div class="mr-auto">
            <span class="text-4xl font-semibold">Yourdaily</span><span class="ml-1 text-4xl font-bold text-amber-400">Recipe</span>
        </div>
        <div class="flex flex-row space-x-2">
            <div class="flex items-center w-[380px] rounded-xl bg-truGray-100 py-3 px-5">
                <div class="mr-auto w-full">
                    <input class="w-full font-light text-truGray-400 text-sm outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search">
                </div>
                <div class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div class="bg-amber-100 rounded-xl py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>