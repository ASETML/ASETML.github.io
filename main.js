const app = Vue.createApp({
  data() {
    return {
      letter: "",
      guessedLetters: [],
      word: "",
      mistakes: 0,
      guessedWord: "",
      sampleWords: ["Scrum Team", "Daily Scrum", "Multi-Application User Interface", "Javascript", "dotnet maui", "Captain Impero", "InnoWeeks"]
    };
  },
  methods: {
    startGame() {
      this.guessedWord = ""
      this.guessedLetters = []
      this.mistakes = 0
      this.selectRandomWord()
      this.fillWord()
    },
    selectRandomWord() {
      min = 0;
      max = this.sampleWords.length;
      this.word = this.sampleWords[Math.floor(Math.random() * (max - min + 1)) + min].toUpperCase();
      console.log(this.word)
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
      if (this.letter.match(/[A-Za-z\-\s]/) && !this.guessedLetters.includes(this.letter.toUpperCase())) {
        this.guessedLetters.push(this.letter.toUpperCase())

        this.guessWord(this.letter.toUpperCase())
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
