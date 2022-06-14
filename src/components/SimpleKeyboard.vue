<template>
    <div class="simple-keyboard"></div>
</template>

<script setup>
import Keyboard from "simple-keyboard"
import "simple-keyboard/build/css/index.css"
import { ref, onMounted } from "vue"

//array contains all event names that we're going to send out of keyboard
const emit = defineEmits(["onKeyPress"])

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
        onKeyPress: onKeyPress,
    })
})

</script>   

<style></style>