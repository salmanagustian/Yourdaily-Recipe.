<template>
    <div class="flex justify-center items-center my-20">
        <div class="w-1/2">
            <div v-if="recipe.title" class="flex flex-col">
                <div>
                    <img
                        :src="recipe.thumb"
                        class="object-cover rounded-3xl w-full"
                        loading="lazy"
                        alt="Resep Food"
                        width="350"
                    />
                </div>
                <div
                    class="text-2xl font-semibold text-truGray-800 dark:text-white/50 mt-4"
                >
                    {{ recipe.title }}
                </div>
                <div class="flex flex-row items-center space-x-3 mt-1">
                    <div class="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 stroke-current text-truGray-500"
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
                        <span class="text-[15px] font-medium text-truGray-400">
                            {{ recipe.times }}
                        </span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <span class="text-[15px] font-medium text-truGray-400">
                            {{ recipe.dificulty }}
                        </span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <span class="text-[15px] font-medium text-truGray-400">
                            {{ recipe.servings }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col space-y-5 mt-8">
                <div>
                    <div
                        class="w-full bg-[#6d432d] dark:border-[#333] dark:bg-[#2e2e33] hover:bg-[#4f3122] rounded-xl py-2 px-5 cursor-pointer"
                        @click="showDescription = !showDescription"
                    >
                        <div class="flex items-center justify-between">
                            <div class="text-white text-sm">Deskripsi</div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 stroke-current text-white transition-all duration-200 transform"
                                    :class="{
                                        'rotate-180': showDescription,
                                        'rotate-0': !showDescription
                                    }"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="panel" v-show="showDescription">
                        {{ recipe.desc }}
                    </div>
                </div>
                <div>
                    <div
                        class="w-full bg-[#6d432d] dark:border-[#333] dark:bg-[#2e2e33] hover:bg-[#4f3122] rounded-xl py-2 px-5 cursor-pointer"
                        @click="showIngredients = !showIngredients"
                    >
                        <div class="flex items-center justify-between">
                            <div class="text-white text-sm">
                                Bahan yang diperlukan
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 stroke-current text-white transition-all duration-200 transform"
                                    :class="{
                                        'rotate-180': showIngredients,
                                        'rotate-0': !showIngredients
                                    }"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="panel" v-show="showIngredients">
                        <ol>
                            <li
                                v-for="(ingredient, index) in recipe.ingredient"
                                :key="index"
                            >
                                <div class="flex">
                                    <div class="mr-4">{{ index + 1 }}.</div>
                                    <div>{{ ingredient }}</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

                <div>
                    <div
                        class="w-full bg-[#6d432d] dark:border-[#333] dark:bg-[#2e2e33] hover:bg-[#4f3122] rounded-xl py-2 px-5 cursor-pointer"
                        @click="showSteps = !showSteps"
                    >
                        <div class="flex items-center justify-between">
                            <div class="text-white text-sm">Cara Membuat</div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 stroke-current text-white transition-all duration-200 transform"
                                    :class="{
                                        'rotate-180': showSteps,
                                        'rotate-0': !showSteps
                                    }"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="panel" v-show="showSteps">
                        <ol>
                            <li
                                v-for="(step, index) in formattedStep"
                                :key="index"
                            >
                                <div class="flex">
                                    <div class="mr-4">{{ index + 1 }}.</div>
                                    <div>{{ step }}</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

                <div>
                    <button
                        class="bookmark"
                        role="button"
                        v-on:click="bookmark()"
                        v-if="!hasBookmark"
                    >
                        <div class="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 stroke-current text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </svg>
                            <div>Simpan Resep</div>
                        </div>
                    </button>
                    <button class="bookmarked" role="button" v-else>
                        <div>Tersimpan</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'RecipeDetail',
    data() {
        return {
            slug: this.$route.params.slug,
            recipe: {},
            showIngredients: false,
            showSteps: false,
            showDescription: false
        }
    },

    created() {
        // eslint-disable-next-line no-undef
        this.axios
            .get(`recipe/${this.slug}`)
            .then(({ data }) => {
                this.recipe = data
            })
            .catch((err) => {
                console.log(err)
            })
    },

    computed: {
        ...mapGetters({
            lists: 'bookmark/bookmarkRecipe'
        }),
        formattedStep() {
            return this.recipe.step.map((steps, index) => {
                const indexes = String(index + 1)
                return steps.replace(indexes, '')
            })
        },
        hasBookmark() {
            const listBookmark = this.lists.filter(
                (list) => list.title === this.recipe.title
            )

            if (listBookmark.length > 0) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        ...mapActions({
            add: 'bookmark/add'
        }),

        bookmark() {
            const keepRecipe = {
                title: this.recipe.title,
                thumb: this.recipe.thumb,
                desc: this.recipe.desc
            }
            this.add(keepRecipe)
        }
    }
}
</script>

<style scoped>
.panel {
    padding: 1rem;
    height: auto;
}
</style>
