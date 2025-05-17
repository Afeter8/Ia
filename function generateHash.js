async function generateHash() {
  const msg = new TextEncoder().encode(Date.now().toString());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msg);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

async function loopDefense() {
  while (true) {
    const hash = await generateHash();
    const line = document.createElement('p');
    line.textContent = `[DEFENSE] Hash generado: ${hash}`;
    document.getElementById('hashes').prepend(line);
    await new Promise(res => setTimeout(res, 5000));
  }
}

loopDefense();
