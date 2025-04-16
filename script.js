const words = ["javascript", "programacao", "desenvolvimento", "computador", "tecnologia"];
let selectedWord = "";
let guessedLetters = [];
let attempts = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 6;
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("letter-input").value = "";
    document.getElementById("restart-button").style.display = "none";
    updateWordDisplay();
}

function updateWordDisplay() {
    const wordDisplay = selectedWord.split("").map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(" ");
    document.getElementById("word").innerText = wordDisplay;

    if (!wordDisplay.includes("_")) {
        document.getElementById("message").innerText = "Parabéns! Você adivinhou a palavra!";
        document.getElementById("restart-button").style.display = "block";
    }
}

document.getElementById("guess-button").addEventListener("click", function() {
    const letterInput = document.getElementById("letter-input");
    const letter = letterInput.value.toLowerCase();

    if (letter && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!selectedWord.includes(letter)) {
            attempts--;
            document.getElementById("attempts").innerText = attempts;
            if (attempts === 0) {
                document.getElementById("message").innerText = `Você perdeu! A palavra era "${selectedWord}".`;
                document.getElementById("
