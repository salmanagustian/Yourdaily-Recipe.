<template>
<div>
    <div class="grid grid-cols-2 my-40" v-if="loading">
        <div class="flex flex-col space-y-3">
            <div data-placeholder class="h-10 w-full overflow-hidden relative bg-truGray-200 rounded-2xl"></div>
            <div data-placeholder class="h-10 w-1/2 overflow-hidden relative bg-truGray-200 rounded-2xl"></div>
            <div data-placeholder class="h-10 w-1/2 overflow-hidden relative bg-truGray-200 rounded-2xl"></div>
        </div>
        <div>
            <div class="flex justify-center items-center">
                <div data-placeholder class="h-40 w-40 overflow-hidden relative bg-truGray-200 rounded-full"></div>
            </div>
        </div>
    </div>

    <div v-else class="grid grid-cols-2">
        <div class="flex items-center h-full">
            <h1 class="font-display text-amber-400/75 text-7xl tracking-[5px] font-semibold capitalize">
                What do you want to <span class="text-green-500/70">cook today</span> ?
            </h1>
        </div>
        <div>
            <img src="@/assets/logo.png" loading="lazy" width="625" alt="Logo">
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