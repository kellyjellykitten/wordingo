<script setup>
import SimpleKeyboard from "./components/SimpleKeyboard.vue";
import WordRow from "./components/WordRow.vue";
import { reactive, ref, onMounted, computed } from "vue";
import Header from "./components/Header.vue";

import words from "./assets/data.json"
const wordArray = words['words']


const state = reactive({
  solution: "books",
  darkmode: false,
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

const getWord = () => {
  let randIndex = Math.floor(Math.random() * wordArray.length)
  //console.log("randIndex: ", randIndex)
  //grab that index from word array
  let word = wordArray[randIndex]
  //console.log("ranWord: ", word)
  state.solution = word
}
getWord()


function onDarkSwitch() {
  state.darkmode = !state.darkmode
  localStorage.setItem('darkmode', state.darkmode)
  console.log("darkmode: ", state.darkmode)
}

  
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
    //add letter if alphabetical
    const alphaRegex = /[a-zA-Z]/;
    if (alphaRegex.test(key)) {
      state.guesses[state.currentGuessIndex] += key;
    }
  }
}

onMounted(() => {
  let darkPref = JSON.parse(window.localStorage.getItem('darkmode'))
  if (darkPref) {
    state.darkmode = darkPref
  } else {
    state.darkmode = false
  }
  window.addEventListener("keyup", (e) => {
    e.preventDefault()
    //get key
    let key =
      //in order to pass the same enter & bckspc values, create ternary operator
      //make lowerspace to match virtual keyboard
      e.key == "Enter"
        ? "{enter}"
        : e.key == "Backspace"
        ? "{bksp}"
        : e.key
        // : String.fromCharCode(e.key).toLowerCase();
    handleInput(key);
  });
})


function resetGame() {
  document.location.reload(true)
}

</script>

<template>

<div :class="{ darkbg: state.darkmode }">
  <div class="flex flex-row px-16 h-28 items-center justify-between">
    <Header @toggleDark="onDarkSwitch" :darkmode=state.darkmode />
  </div>
  <div class="flex flex-col h-[calc(100vh_-_7rem)] max-w-md mx-auto justify-evenly">
    <div>
      <word-row
        v-for="(guess, i) in state.guesses"
        :key="i"
        :value="guess"
        :solution="state.solution"
        :submitted="i < state.currentGuessIndex"
        :darkmode=state.darkmode
      />
    </div>
    <p v-if="wonGame" :class="state.darkmode ? 'darktxt' : 'lighttxt'">
      😸 WOOOORDIIIIINGO! You solved it! 😸
      <br>
      <br>
      <button @click="resetGame" class="text-green-600 hover:animate-spin bg-transparent border border-solid border-green-600 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        Play again!
      </button>
    </p>
    <p v-else-if="lostGame" :class="state.darkmode ? 'darktxt' : 'lighttxt'">
      😿 Out of tries! 😿 <b>Solution: {{ state.solution }}</b>
      <br>
      <br>
      <button @click="resetGame" class="text-green-600 hover:animate-spin bg-transparent border border-solid border-green-600 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
        Play again!
      </button>
    </p>
    <div>
    <!-- listen for event -->
    <simple-keyboard
      @onKeyPress="handleInput"
      :guessedLetters="state.guessedLetters"
    />
    </div>
  </div>
</div>

</template>

<style lang="postcss">
div.darkbg {
  @apply bg-gradient-to-tl from-gray-800 via-gray-900 to-black;
}

p.darktxt {
  @apply text-center;
  @apply text-slate-100;
}

p.lighttxt {
  @apply text-black;
  @apply text-center;
}
</style>
