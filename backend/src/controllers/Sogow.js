// backend/src/middlewares/securityHeaders.js
const setQuantumSecurityHeaders = (req, res, next) => {
  res.setHeader('Content-Security-Policy', `
    default-src 'self';
    connect-src 'self' ${process.env.QUANTUM_NETWORK_URL};
    script-src 'self' 'wasm-unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    frame-ancestors 'none';
  `);
  
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Quantum-Security-Policy', 'v2.0; protections=full');
  
  next();
};
