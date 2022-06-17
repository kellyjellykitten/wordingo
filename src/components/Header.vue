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
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                bg-gray-700 bg-opacity-50
                outline-none
                focus:outline-none
                justify-center
                items-center
                flex
            "
        >
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
                <!-- content -->
                <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!-- header -->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 class="text-3xl font-semibold">Instructions</h3>
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
                    <!-- body -->
                    <div class="relative p-6 flex-auto">
                        <p class="my-4 text-slate-500 text-lg leading-relaxed">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Voluptatibus qui nihil laborum quaerat blanditiis nemo explicabo
                            voluptatum ea architecto corporis quo vitae, velit temporibus
                            eaque quisquam in quis provident necessitatibus.
                        </p>
                    </div>
                    <!-- footer -->
                    <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="isOpen = false">
                            Close
                        </button>
                        <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="isOpen = false">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-4xl font-bold tracking-wide text-green-500 hover:animate-spin">
        Wordingo
    </div>

    <div class="flex w-20 justify-end">
        <button class="px-1" @click="toggleDark" title="Toggle Theme">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
    isOpen: Boolean
})

const isOpen = ref(false)

function toggleDark() {
    console.log("clicked moon")
}

</script>

<style>
</style>


