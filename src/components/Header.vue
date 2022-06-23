<template>
    <div class="flex items-center w-20 justify-start">
        <!-- class= menu-left -->
        <button class="px-1" @click="isOpen = true" title="Help">
            <svg v-if="darkmode" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                        <h3 class="text-3xl font-semibold">How to Play</h3>
                        <svg
                            @click="isOpen = false"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 text-red-900 cursor-pointer hover:animate-spin"
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
                        <p class="my-4 text-lg leading-relaxed">
                            Guess the Wordingo in six tries! <br>
                            <br>
                            Each guess must be a 5-letter word. Hit the enter key to submit your guess.<br>
                            The letter tiles will change color depending on how close your guess was!<br>
                            <br>
                            <span style="color: #16a34a; font-weight:bold">GREEN</span> tiles indicate that the letter is in the word and in the correct spot.<br>
                            <img src="https://i.imgur.com/ZGyKEke.png" alt="Green tile means letter is in the word and right spot" title="Green letter tile" /><br>
                            <span style="color: #eab308; font-weight:bold">YELLOW</span> tiles indicate that the letter is in the word but in the incorrect spot.<br>
                            <img src="https://i.imgur.com/IUIOi5F.png" alt="Yellow tile means letter is in word but wrong spot" title="Yellow letter tile" /><br>
                            <span style="color: #6b7280; font-weight:bold">GRAY</span> tiles mean that the letter is not in the word in any spot.<br>
                            <img src="https://i.imgur.com/qoMOkIC.png" alt="Gray tile means letter is not in the word at all" title="Gray letter tile" /><br>
                            <br>
                            Hit <b>Play Again</b> to guess a different word!
                        </p>
                    </div>
                    <!-- footer -->
                    <div class="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                        <a href="https://github.com/kellyjellykitten/wordingo" target="_blank"><img alt="Source Code" class="w-11 h-11 object-left hover:animate-spin" title="View Source Code on GitHub" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></a>
                        <button class="text-green-500 bg-transparent border border-solid border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="isOpen = false">
                            Ok, let's play!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="darkmode" class="text-4xl font-bold tracking-wide text-green-600 hover:animate-spin">
        Wordingo
    </div>
    <div v-else class="text-4xl font-bold tracking-wide text-green-500 hover:animate-spin">
        Wordingo
    </div>

    <div class="flex w-20 justify-end">
        <button class="px-1" @click="toggleDark" title="Toggle Dark Mode">
            <svg v-if="darkmode" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
            <svg v-if="!darkmode" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const emit = defineEmits(["toggleDark"])

const props = defineProps({
    isOpen: Boolean,
    darkmode: Boolean,
})

const isOpen = ref(false)

function toggleDark() {
    console.log("clicked moon before emit")
    emit("toggleDark")
}

</script>

<style>
</style>


