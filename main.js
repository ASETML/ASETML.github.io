const app = Vue.createApp({
  data() {
    return {
      letter: "",
      guessedLetters: [],
      word: "dotnet maui",
      mistakes: 0,
      guessedWord: "",
    };
  },
  methods: {
    startGame() {
      this.guessedWord = ""
      this.guessedLetters = []
      this.mistakes = 0
      this.fillWord()
    },
    fillWord() {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === " ") {
          this.guessedWord += " "
        }
        else {
          this.guessedWord += "_"
        }
      }
    },
    guessLetter() {
      if (this.letter.match(/[A-Za-z\-\s]/) && !this.guessedLetters.includes(this.letter)) {
        this.guessedLetters.push(this.letter)

        this.guessWord(this.letter)
        this.letter = "";
      }
    },
    guessWord(letter) {
      if (this.word.includes(letter)) {
        //find every index of guessed letter in word
        let indices = [];
        for(let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
              indices.push(i)
            };
        }

        //replace
        for (const i of indices) {
          let firstPart = this.guessedWord.substr(0, i);
          let lastPart = this.guessedWord.substr(i + 1);
            
          this.guessedWord = firstPart + letter + lastPart; 
        }
      }
      else {
        this.mistakes++
      }

      this.checkIfWordGuessed()
    },
    checkIfWordGuessed() {
      if (this.guessedWord.includes("_")) {
        console.log("Not Guessed")
      }
      else {
        console.log("Guessed ! 🎆🎆🎆🎇🎇")
      }
    }
  },
});
