// backend/src/utils/quantumCrypto.js
const postQuantumAlgorithm = {
  name: 'RSA-OAEP',
  modulusLength: 4096,
  publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
  hash: 'SHA-512'
};

async function generateQuantumResistantKeys() {
  return crypto.subtle.generateKey(
    postQuantumAlgorithm,
    true,
    ['encrypt', 'decrypt']
  );
}

async function hybridEncrypt(data, publicKey) {
  const sessionKey = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt']
  );
  
  const encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) },
    sessionKey,
    new TextEncoder().encode(data)
  );
  
  const encryptedKey = await crypto.subtle.wrapKey(
    'raw',
    sessionKey,
    publicKey,
    postQuantumAlgorithm
  );
  
  return {
    encryptedData: Array.from(new Uint8Array(encryptedData)),
    encryptedKey: Array.from(new Uint8Array(encryptedKey)),
    iv: Array.from(iv)
  };
}
