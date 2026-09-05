function rollDice() {
    const numDice = parseInt(document.getElementById("numDice").value);
    const dieSize = parseInt(document.getElementById("dieSize").value);
    const resultsDiv = document.getElementById("results");

    let rolls = [];
    let total = 0;

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * dieSize) + 1;
        rolls.push(roll);
        total += roll;
    }

    resultsDiv.innerHTML = `
    <p><strong>Rolls:</strong> ${rolls.join(",")}</p>
    <p><strong>Total:</strong> ${total}</p>
    `;
}