document.addEventListener("DOMContentLoaded", function() {
    const increaseButton = document.getElementById("increaseButton");
    const resultDiv = document.getElementById("result");
    const chanceDiv = document.getElementById("chance");

    increaseButton.addEventListener("click", function() {
        const mode = document.getElementById("mode").value;
        const modeIncrement = { "1": 2, "2": 4, "3": 6 };
        let count = parseInt(chanceDiv.textContent.replace("Current chance of losing: ", "").replace("%", ""));
        let number = parseInt(resultDiv.textContent);

        number++;
        resultDiv.textContent = number;

        count += modeIncrement[mode];

        chanceDiv.textContent = "Current chance of losing: " + count + "%";

        if (eventWithChance(count)) {
            resultDiv.textContent = "You lose!";
            increaseButton.disabled = true;
        } else {
            resultDiv.textContent = "You're safe!";
        }
    });

    function eventWithChance(percentage) {
        return Math.random() < percentage / 100;
    }
});
