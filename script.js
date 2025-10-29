
async function checkUpgrade() {
    const from = document.getElementById("from").value.trim().toUpperCase();
    const to = document.getElementById("to").value.trim().toUpperCase();
    const upgrade = document.getElementById("upgrade").value;

    const res = document.getElementById("result");
    const note = document.getElementById("note");

    const response = await fetch("rcc.json");
    const data = await response.json();

    const match = data.find(row => row.From?.toUpperCase() === from && row.To?.toUpperCase() === to);

    if (match && match[upgrade] && match[upgrade] !== "-") {
        res.textContent = match[upgrade];
        note.textContent = match.Notes || "";

        if (upgrade === "Business to First") {
            res.style.color = "red";
        } else if (upgrade === "Economy to Business") {
            res.style.color = "blue";
        } else if (upgrade === "Economy to Premium Economy") {
            res.style.color = "purple";
        } else if (upgrade === "Premium Economy to Business") {
            res.style.color = "blue";
        }
    } else {
        res.textContent = "Not Available";
        res.style.color = "gray";
        note.textContent = "";
    }
}

function resetForm() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("upgrade").selectedIndex = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("note").textContent = "";
}


function checkUpgradeVisibility() {
    const from = document.getElementById("fromLocation").value;
    const to = document.getElementById("toLocation").value;
    const upgradeType = document.getElementById("upgradeType");
    if (from && to) {
        upgradeType.classList.remove("hidden");
    } else {
        upgradeType.classList.add("hidden");
    }
}
document.getElementById("fromLocation").addEventListener("change", checkUpgradeVisibility);
document.getElementById("toLocation").addEventListener("change", checkUpgradeVisibility);
