<template>
  <div class="mt-8">
    <!-- Title & Search Navigation -->
    <div class="flex flex-col items-center md:flex-row my-10">
      <div class="mr-auto">
        <div
          data-placeholder
          class="h-8 w-52 overflow-hidden relative bg-gradient-to-r from-truGray-100 to-truGray-200 rounded-md"
          v-if="loadingRecipe"
        ></div>
        <div
          v-else
          class="text-2xl font-semibold text-truGray-700 dark:text-white/80"
        >
          Daftar Resep
        </div>
      </div>
      <div>
        <div class="flex w-[430px] flex-col space-y-3" v-if="loadingRecipe">
          <div
            data-placeholder
            class="h-10 w-full overflow-hidden relative bg-gradient-to-r from-truGray-100 to-truGray-200 rounded-md"
          ></div>
        </div>
        <div
          v-else
          class="flex items-center w-[430px] rounded-xl bg-truGray-100 dark:bg-[#2e2e33] py-3 px-5"
        >
          <div class="relative w-full mr-auto">
            <form v-on:submit.prevent>
              <input
                class="w-full text-sm font-light bg-transparent outline-none text-truGray-400"
                type="text"
                name="search"
                v-model="querySearch"
                v-on:keyup.enter="recipeSearch()"
                placeholder="Cari Resep Masakan"
              />
              <div
                class="absolute right-0 mr-5 cursor-pointer top-[5px]"
                v-show="clearQuerySearch"
                v-on:click="allRecipes(true)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3 h-3 text-red-500 stroke-current stroke-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </form>
          </div>
          <div class="cursor-pointer" v-on:click="recipeSearch()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 stroke-current text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Result Query Search -->
    <div class="flex mb-10" v-if="resultRecipe && resultRecipeLength > 0">
      <div class="text-truGray-600 text-base font-medium">
        Ada {{ resultRecipeLength }} data resep loh.. untuk pencarian
        <span class="text-amber-400 text-base">"{{ searchRecipe }}"</span>
      </div>
    </div>
    <div
      class="flex flex-col mb-10"
      v-else-if="resultRecipe && resultRecipeLength == 0"
    >
      <div class="text-truGray-600 text-base font-medium">
        Maaf, sepertinya kami tidak menemukan resep untuk pencarian
        <span class="text-amber-400 text-base">"{{ searchRecipe }}"</span>
      </div>
      <div class="text-truGray-600 text-base font-medium">
        Coba temukan dengan kata kunci pencarian yang lain
      </div>
    </div>

    <!-- List Recipes  -->
    <div class="flex items-center justify-center h-96" v-if="loading">
      <div class="loader"></div>
    </div>
    <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-4">
      <div class="recipes-food" v-for="(recipe, index) in recipes" :key="index">
        <div class="recipes-food__image">
          <router-link v-bind:to="`/recipe/${recipe.key}`">
            <img
              :src="`${recipe.thumb}`"
              class="object-cover duration-200 rounded-3xl hover:scale-105"
              loading="lazy"
              alt="Resep Food"
              width="300"
              height="168"
            />
          </router-link>
        </div>
        <div class="recipes-food__title">
          <router-link v-bind:to="`/detail/${recipe.key}`">{{
            recipe.title
          }}</router-link>
        </div>
        <div class="flex flex-row items-center mt-2 space-x-3">
          <div class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 stroke-current text-truGray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-xs font-medium text-truGray-300">{{
              recipe.times
            }}</span>
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
            <span class="text-xs font-medium text-truGray-300">{{
              recipe.dificulty
            }}</span>
          </div>
          <div class="flex items-center space-x-1">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-truGray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg> -->
            <span class="text-xs font-medium text-truGray-300">{{
              recipe.portion
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListRecipes",

  data() {
    return {
      querySearch: "",
      loadingRecipe: false,
      searchRecipe: "",
      resultRecipeLength: "",
    };
  },

  computed: {
    clearQuerySearch() {
      return this.querySearch !== "";
    },

    ...mapGetters({
      loading: "loading",
      resultRecipe: "resultRecipe",
      recipes: "recipe/recipes",
    }),
  },

  created() {
    this.allRecipes(false);
  },

  methods: {
    ...mapActions({
      set: "set",
      setResultRecipe: "setResultRecipe",
      add: "recipe/add",
    }),
    recipeSearch() {
      const qSearch = this.querySearch;
      this.searchRecipe = qSearch;

      this.setResultRecipe(false);

      if (qSearch.length == 0) {
        return alert("cant search with 0 keyword");
      }

      this.set(true);

      // eslint-disable-next-line no-undef
      axios
        .get(`https://khansa-salman.com/api/recipe/search/${qSearch}`)
        .then(({ data }) => {
          this.set(false);
          this.setResultRecipe(true);
          this.resultRecipeLength = data.length;

          if (data.length > 0) {
            this.add(data);
          } else {
            this.add([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    allRecipes(clearSearch = false) {
      this.querySearch = "";
      this.setResultRecipe(false);
      this.set(true);

      if (clearSearch !== true) this.loadingRecipe = true;
      // eslint-disable-next-line no-undef
      axios
        .get("https://khansa-salman.com/api/recipes")
        .then(({ data }) => {
          this.set(false);
          this.loadingRecipe = false;
          this.add(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
