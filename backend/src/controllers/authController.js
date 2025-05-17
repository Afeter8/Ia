// backend/src/controllers/authController.js
const quantumAuth = async (req, res) => {
  try {
    const { username, quantumSignature } = req.body;
    const user = await User.findOne({ username });
    
    const valid = await verifyQuantumSignature(
      quantumSignature,
      user.quantumPublicKey
    );
    
    valid ? generateToken(res, user) : res.status(403).json({ error: 'Firma cuántica inválida' });
  } catch (error) {
    res.status(500).json({ error: 'Error en autenticación cuántica' });
  }
};
