<template>
    <navbar>
        <div class="mr-auto cursor-pointer select-none">
            <router-link to="/">
                  <span class="text-2xl font-light dark:text-white">Yourdaily 🍲</span> <br>
                  <span class="text-4xl font-bold text-amber-400">Recipe.</span>
            </router-link>
        </div>
        <div class="flex items-center mr-5">

           <!-- Set Theme Icon -->
            <div
               data-placeholder
               class="mr-8 p-6 overflow-hidden relative bg-gradient-to-r
                     from-truGray-100 to-truGray-200 rounded-md"
               v-if="loading"></div>
            <div v-else class="mr-12">
               <svg
                  v-if="darkMode === false"
                  v-on:click="setDarkMode(true)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 stroke-current text-truGray-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
               </svg>
               <svg
                  v-else-if="darkMode === true"
                  v-on:click="setDarkMode(false)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 stroke-current text-truGray-500 dark:text-white cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
            </div>

            <!-- Bookmark Icon -->
            <div
               data-placeholder
               class="p-6 overflow-hidden relative bg-gradient-to-r
                     from-truGray-100 to-truGray-200 rounded-md"
               v-if="loading"></div>

            <div v-else class="relative px-4 py-3 bg-amber-100 dark:bg-[#2e2e33] rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <div
                  v-if="bookmarkCount > 0"
                  class="absolute top-[-10px] right-[-5px]
                     px-2 py-1
                      text-white text-center text-xs
                     bg-green-500 dark:bg-green-600 rounded-lg
                     w-6">
                  {{ bookmarkCount }}
                </div>
            </div>
        </div>
    </navbar>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'NavbarSection',

    data() {
       return {
          loading: false,
          darkMode: false,
       }
    },

    computed: {
       ...mapGetters({
          bookmarkCount: 'bookmark/bookmarkCount',
       }),
    },
    created() {

      let html = document.documentElement;

      if (localStorage.theme === 'dark') {
         html.className = 'dark';
         html.style.backgroundColor = '#1d1e20';
         this.darkMode = true;
      }

       this.loading = true;

       setTimeout(() => {
          this.loading = false;
       }, 1200);
    },

    methods: {
       setDarkMode(setDarkMode) {
         this.darkMode = setDarkMode;

         if(this.darkMode === true) {
            this.updateLocalStorage('dark');
         } else {
            this.updateLocalStorage('light');
         }

       },

       updateLocalStorage(theme) {
           let html = document.documentElement;

            localStorage.setItem('theme', theme);
            html.className = theme;

            if(theme === 'dark') {
               html.style.backgroundColor = '#1d1e20';
            } else {
               html.style.backgroundColor = '#ffffff';
            }
       },
    },
}
</script>