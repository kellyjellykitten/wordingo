<script setup>
import LetterBox from "./LetterBox.vue";
import { ref, watch } from "vue";

const props = defineProps({
    //current value of row
    value: String,
    solution: String,
    //whether or not uess has already been submitted
    submitted: Boolean,
    darkmode: Boolean
})

//CHECKING GUESSES:
//1. check for exact matches
//2. check for misplaced letters w/ remaining chars
//iterate through solution, check if guess has exact match, set to green
//if not, throw letter into a letter pool
//loops over remaining grey boxes & see if value in that box is in letter pool
//if so, set to yellow & take out of pools so it can't be used more than once.

const colors = ref(["", "", "", "", "", ""])

//watch if submitted value changes
//make async to get nice delay through a word when checking values
watch(
    () => props.submitted,
    async (submitted, prevSubmitted) => {
        if (props.submitted) {
            let s = props.solution;
            let v = props.value;

            let temp = ["gray", "gray", "gray", "gray", "gray"];
            let letterPool = [];
            for (let i = 0; i < 5; i++) {
                if (s.charAt(i) == v.charAt(i)) {
                    //if value matches
                    temp[i] = "green";
                } else {
                    letterPool.push(s.charAt(i));
                }
            }
            for (let i = 0; i < 5; i++) {
                //loop thru guess & see if value in letter pool to remove & set temp to yellow
                if (temp[i] == "gray") {
                    if (letterPool.indexOf(v.charAt(i)) != -1) {
                        letterPool.splice(letterPool.indexOf(v.charAt(i)), 1)
                        temp[i] = "yellow";
                    }
                }
                colors.value[i] = temp[i];
                await new Promise((resolve) => setTimeout(resolve, 500));
            }
        }
    },
)


</script>   

<template>
    <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
        <!-- create for loops for i & 5 so we have 5 letters -->
        <!-- map letter to our value at i minus 1 -->
        <letter-box
            v-for="i in 5"
            :key="i"
            :letter="value[i - 1]"
            :color="colors[i - 1]"
        />
    </div>

</template>

<style lang="postcss">
div.dark {
    @apply text-white;
}
</style>