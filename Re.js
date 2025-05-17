(async () => {
  const status = document.getElementById("status");

  function generateRandomKey(length = 64) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }

  function simulateDefense() {
    const key = generateRandomKey();
    console.log("Encrypted KEY:", key);
    status.textContent = "DEFENSE ACTIVE | KEY HASHED";
  }

  // Defensa automática en bucle
  setInterval(simulateDefense, 5000); // cada 5 segundos

  // Protección Tor y redes rotativas (simulada)
  console.log("Checking TOR & IP Rotation...");
})();
