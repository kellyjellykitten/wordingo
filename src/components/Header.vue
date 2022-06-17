<template>
    <div class="flex items-center w-20 justify-start">
        <!-- class= menu-left -->
        <button class="px-1" @click="isOpen = true" title="Help">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </button>
        <div
            v-show="isOpen"
            class="
                
                fixed
                inset-0
                flex
                items-center
                justify-center
                bg-gray-700 bg-opacity-50
            "
        >
            <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
                <div class="flexitems-center justify-between">
                    <h3 class="text-2xl">Modal Title</h3>
                    <svg
                        @click="isOpen = false"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-red-900 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div class="mt-4">
                    <p class="mb-4 text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Voluptatibus qui nihil laborum quaerat blanditiis nemo explicabo
                        voluptatum ea architecto corporis quo vitae, velit temporibus
                        eaque quisquam in quis provident necessitatibus.
                    </p>
                    <button
                        @click="isOpen = false"
                        class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
                    >
                        Cancel
                    </button>
                    <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
                        Save
                    </button>
                </div>

            </div>
        </div>
    </div>

    <div class="text-4xl font-bold tracking-wide text-green-500 hover:animate-spin">
        Wordingo
    </div>

    <div class="flex w-20 justify-end">
        <button class="px-1" title="Toggle Theme">T</button>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
    isOpen: Boolean
})

const isOpen = ref(false)

</script>

<style>
</style>


