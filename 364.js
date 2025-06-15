async function cargarDesdeIPFS(hash) {
  const url = `https://ipfs.io/ipfs/${hash}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.text();
      console.log('Código recuperado IPFS:', data.slice(0, 100));
      document.getElementById("status").textContent = "Sistema verificado 🔐";
    }
  } catch (e) {
    document.getElementById("status").textContent = "Error de conexión IPFS";
  }
}

// Bucle eterno
setInterval(() => {
  cargarDesdeIPFS('Qm...'); // Reemplaza con tu hash real
}, 15000);
