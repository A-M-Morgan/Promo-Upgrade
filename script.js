
async function checkUpgrade() {
  const from = document.getElementById('from').value.trim().toUpperCase();
  const to = document.getElementById('to').value.trim().toUpperCase();
  const upgradeType = document.getElementById('upgradeType').value;
  const resultDiv = document.getElementById('result');

  const response = await fetch('rcc.json');
  const data = await response.json();

  const match = data.find(row =>
    row.From && row.To && row[upgradeType] &&
    row.From.toUpperCase() === from &&
    row.To.toUpperCase() === to
  );

  if (match) {
    resultDiv.textContent = `Upgrade Value: ${match[upgradeType]}`;
  } else {
    resultDiv.textContent = 'Update the Route & Upgrade Type selections';
  }
}
