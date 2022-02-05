<template>
<div>
    <div class="grid grid-cols-2 my-40" v-if="loading">
        <div class="flex flex-col space-y-3">
            <div data-placeholder class="h-14 w-full overflow-hidden relative bg-truGray-300/80 dark:bg-[#2e2e33] rounded-md"></div>
            <!-- <div data-placeholder class="h-8 w-3/4 overflow-hidden relative bg-gradient-to-r from-truGray-100 to-truGray-200 rounded-md"></div> -->
            <div data-placeholder class="h-14 w-3/4 overflow-hidden relative bg-truGray-300/80 dark:bg-[#2e2e33] rounded-md"></div>
            <div data-placeholder class="h-14 w-1/2 overflow-hidden relative bg-truGray-300/80 dark:bg-[#2e2e33] rounded-md"></div>
        </div>
        <div>
            <div class="flex justify-center items-center">
                <div data-placeholder class="h-48 w-48 overflow-hidden relative bg-truGray-200 dark:bg-[#2e2e33] rounded-full"></div>
            </div>
        </div>
    </div>

    <div v-else class="grid grid-cols-2">
        <div class="flex items-center h-full">
            <h1 class="font-display text-amber-400/80 dark:text-amber-400/90 text-7xl tracking-[5px] font-semibold capitalize">
                What do you want to <span class="text-green-500/70">cook today</span> ?
            </h1>
        </div>
        <div class="select-none">
            <img src="@/assets/logo.png" class="select-none" loading="lazy" width="625" alt="Logo">
        </div>
    </div>

</div>

</template>

<script>
export default {
    data(){
        return {
            loading: false,
        }
    },

    created() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
        }, 1200);
    },
}
</script>