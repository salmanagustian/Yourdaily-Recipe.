<template>
    <navbar>
        <div class="mr-auto cursor-pointer select-none">
            <span class="text-2xl font-light">Yourdaily 🍲</span> <br>
            <span class="text-4xl font-bold text-amber-400">Recipe.</span>
        </div>
        <div class="flex mr-5">
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
}
</script>