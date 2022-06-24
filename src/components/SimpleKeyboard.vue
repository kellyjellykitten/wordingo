<template>
    <div class="simple-keyboard"></div>
</template>

<script setup>
import Keyboard from "simple-keyboard"
import "simple-keyboard/build/css/index.css"
import { ref, onMounted, watch } from "vue"

//array contains all event names that we're going to send out of keyboard
const emit = defineEmits(["onKeyPress"])

const props = defineProps({
    guessedLetters: Object,
})

const keyboard = ref(null)

const onKeyPress = (button) => {
    //emit on vue: emit(name, payload)
    //button is a string value of whatever you press
    emit("onKeyPress", button)
}

//has to mount before we can access the div
onMounted(() => {
    keyboard.value = new Keyboard("simple-keyboard", {
        layout: {
            default: [
                "q w e r t y u i o p",
                "a s d f g h j k l",
                "{enter} z x c v b n m {bksp}", 
            ],
        },
        display: {
            '{enter}': 'enter',
            '{bksp}': 'backspace'
        },
        onKeyPress: onKeyPress,
    })
})

//watch for certain reactive dependency 
//first property is the getter we want to track
//when this changes, it triggers a handler that takes the current value of guest letters & the previous value
//addButtonTheme adds a class to certain char buttons
watch(
    () => props.guessedLetters,
    (guessedLetters, prevGuessedLetters) => {
        keyboard.value.addButtonTheme(
            guessedLetters.miss.join(" "),
            "miss"
        );
        keyboard.value.addButtonTheme(
            guessedLetters.found.join(" "),
            "found"
        );
        keyboard.value.addButtonTheme(
            guessedLetters.hint.join(" "),
            "hint"
        );
    },
    //deep b/c we're checking an obj's properties
    { deep: true }
)

</script>   

<style lang="postcss">
div.miss {
    @apply bg-gray-500 !important;
    @apply text-white;
}

div.found {
    @apply bg-green-600 !important;
    @apply text-white;
}

div.hint:not(.found) {
    @apply bg-yellow-500 !important;
    @apply text-white;
}
</style>