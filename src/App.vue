<script setup>
import SimpleKeyboard from "./components/SimpleKeyboard.vue";
import WordRow from "./components/WordRow.vue";
import { reactive, onMounted, computed } from "vue";
import DarkModeToggle from "./components/DarkModeToggle.vue";
// import Header from "./components/Header.vue";

const state = reactive({
  solution: "books",
  guesses: ["", "", "", "", "", ""],
  currentGuessIndex: 0,
  guessedLetters: {
    //black
    miss: [],
    //green
    found: [],
    //yellow
    hint: [],
  }
})

const wonGame = computed(
  () =>
  //check if last guess is equal to solution
    state.guesses[state.currentGuessIndex - 1] === state.solution
)

const lostGame = computed(() => !wonGame.value
  && state.currentGuessIndex >= 6
)

const handleInput = (key) => {
  console.log(key)
  //first check if current guess index is >= 6 -- no typing if out of guesses
  //disable input if we've won
  if (state.currentGuessIndex >= 6 || wonGame.value) {
    return
  }
  const currentGuess = state.guesses[state.currentGuessIndex]

  if (key == "{enter}") {
    //send guess, check if 5 letters entered
    if (currentGuess.length == 5) {
      state.currentGuessIndex++;
      //loop over every char in guess
      for (var i = 0; i < currentGuess.length; i++) {
        let c = currentGuess.charAt(i)
        //check if current char matches solution
        if (c == state.solution.charAt(i)) {
          state.guessedLetters.found.push(c);
        //if not negative 1, letter is somewhere in solution
        } else if (state.solution.indexOf(c) != -1) {
          state.guessedLetters.hint.push(c);
        } else {
          state.guessedLetters.miss.push(c);
        }
      }
    }
  } else if (key == "{bksp}") {
    //remove last letter
    //set state to current index & chop off last char
    state.guesses[state.currentGuessIndex] =
      currentGuess.slice(0, -1)
  } else if (currentGuess.length < 5) {
    //add latter if alphabetical
    const alphaRegex = /[a-zA-Z]/;
    if (alphaRegex.test(key)) {
      state.guesses[state.currentGuessIndex] += key;
    }
  }
}

onMounted(() => {
  window.addEventListener("keyup", (e) => {
    e.preventDefault()
    //get key
    let key =
      //in order to pass the same enter & bckspc values, create ternary operator
      //checks if key code is 13, meaning we want to enter
      //& if key code is 8, meaning we want to backspace
      //if neither, just want to get the string from the current char code
      //make lowerspace to match virtual keyboard
      //NOTE: keyCode deprecated -- switched to key per docs
      e.key == "Enter"
        ? "{enter}"
        : e.key == "Backspace"
        ? "{bksp}"
        : e.key
        // : String.fromCharCode(e.key).toLowerCase();
    handleInput(key);
  });
})

</script>

<template>
  <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
    <h1 class="text-4xl font-bold tracking-wide text-center text-green-500 hover:animate-spin">Wordingo</h1>
    <!-- <dark-mode-toggle /> -->
    <!-- <Header /> -->

    <div>
      <word-row
        v-for="(guess, i) in state.guesses"
        :key="i"
        :value="guess"
        :solution="state.solution"
        :submitted="i < state.currentGuessIndex"
      />
    </div>
    <p v-if="wonGame" class="text-center">
      🏆 Congrats you solved it!
    </p>
    <p v-else-if="lostGame" class="text-center">
      😔 Out of tries.
    </p>
    <!-- listen for event -->
    <simple-keyboard
      @onKeyPress="handleInput"
      :guessedLetters="state.guessedLetters"
    />
  </div>
</template>

<style></style>
