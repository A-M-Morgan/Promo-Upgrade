
async function calculateUpgrade() {
  const from = document.getElementById('from').value.trim().toUpperCase();
  const to = document.getElementById('to').value.trim().toUpperCase();
  const upgrade = document.getElementById('upgrade').value;

  const response = await fetch('rcc.json');
  const data = await response.json();

  const match = data.find(row => row.From.toUpperCase() === from && row.To.toUpperCase() === to);

  let resultText = "Update the POS, Route & Upgrade Type selections";
  if (match && match[upgrade]) {
    resultText = match[upgrade];
  }

  document.getElementById('result').innerText = resultText;
}
