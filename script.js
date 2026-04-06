function generateFancy() {
  const name = document.getElementById('username').value.trim();
  const output = document.getElementById('output');
  if(name === "") { output.innerHTML = "Please type a name!"; return; }

  const styles = [
    name.toUpperCase(),
    name.split('').join(' '),
    `✨${name}✨`,
    `𝓕𝓪𝓷𝓬𝔂 ${name}`,
    name.split('').reverse().join(''),
    `💖${name}💖`,
    `~*~${name}~*~`
  ];

  output.innerHTML = '';
  styles.forEach(s => {
    const div = document.createElement('div');
    div.innerHTML = `<span>${s}</span> <button onclick="copyText('${s}')">Copy</button>`;
    output.appendChild(div);
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}
