<script setup>
import LetterBox from "./LetterBox.vue"

const props = defineProps({
    //current value of row
    value: String,
    solution: String,
    //whether or not uess has already been submitted
    submitted: Boolean,
})
</script>   

<template>
    <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
        <!-- create for loops for i & 5 so we have 5 letters -->
        <!-- map letter to our value at i minus 1 -->
        <letter-box
            v-for="i in 5"
            :key="i"
            :letter="value[i - 1]"
        />
    </div>

</template>