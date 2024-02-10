function generateRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").textContent =randomNumber;
}