
async function checkUpgrade() {
  const from = document.getElementById('from').value.trim().toUpperCase();
  const to = document.getElementById('to').value.trim().toUpperCase();
  const upgrade = document.getElementById('upgrade').value;
  const resultBox = document.getElementById('result');
  const noteBox = document.getElementById('note');

  const response = await fetch('rcc.json');
  const data = await response.json();

  const match = data.find(row => row.From?.toUpperCase() === from && row.To?.toUpperCase() === to);
  let value = match ? match[upgrade] : null;
  let note = match ? match['Notes'] : null;

  if (value && value !== '-') {
    resultBox.textContent = value;
    if (upgrade === 'Business to First') resultBox.style.color = 'red';
    else if (upgrade === 'Economy to Business') resultBox.style.color = 'blue';
    else if (upgrade === 'Economy to Premium Economy') resultBox.style.color = 'purple';
    else resultBox.style.color = 'green';
  } else {
    resultBox.textContent = 'Update the Route & Upgrade Type selections';
    resultBox.style.color = 'black';
  }

  noteBox.textContent = note || '';
}

function resetForm() {
  document.getElementById('from').value = '';
  document.getElementById('to').value = '';
  document.getElementById('upgrade').selectedIndex = 0;
  document.getElementById('result').textContent = '';
  document.getElementById('note').textContent = '';
}
