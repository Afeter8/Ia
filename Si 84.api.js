// frontend/src/services/api.js
const secureApi = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Quantum-Encrypted': true
  },
  transformRequest: [async (data) => {
    const quantumKey = await generateQuantumSessionKey();
    return quantumEncrypt(data, quantumKey);
  }]
});
