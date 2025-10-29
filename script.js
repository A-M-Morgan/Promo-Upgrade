
async function checkUpgrade() {
    const from = document.getElementById('from').value.trim().toUpperCase();
    const to = document.getElementById('to').value.trim().toUpperCase();
    const upgradeType = document.getElementById('upgradeType').value;

    const response = await fetch('rcc.json');
    const data = await response.json();

    const match = data.find(row => row.From.toUpperCase() === from && row.To.toUpperCase() === to);

    let result = "Update the POS, Route & Upgrade Type selections";
    if (match && match[upgradeType]) {
        result = `Upgrade Value: ${match[upgradeType]}`;
    }

    document.getElementById('result').innerText = result;
}
