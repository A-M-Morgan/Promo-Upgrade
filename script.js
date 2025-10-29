
async function checkUpgrade() {
    const from = document.getElementById("from").value.trim().toUpperCase();
    const to = document.getElementById("to").value.trim().toUpperCase();
    const upgradeType = document.getElementById("upgradeType").value;
    const resultBox = document.getElementById("result");
    const noteBox = document.getElementById("note");

    const response = await fetch("rcc.json");
    const data = await response.json();

    const match = data.find(row => row.From?.toUpperCase() === from && row.To?.toUpperCase() === to);

    if (match && match[upgradeType]) {
        resultBox.textContent = match[upgradeType];
        noteBox.textContent = match.Notes || "";
        if (upgradeType === "Business to First") {
            resultBox.style.color = "red";
        } else if (upgradeType === "Economy to Business") {
            resultBox.style.color = "blue";
        } else if (upgradeType === "Economy to Premium Economy") {
            resultBox.style.color = "purple";
        } else {
            resultBox.style.color = "green";
        }
    } else {
        resultBox.textContent = "Update the Route & Upgrade Type selections";
        resultBox.style.color = "black";
        noteBox.textContent = "";
    }
}

function resetFields() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("upgradeType").selectedIndex = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("note").textContent = "";
}
