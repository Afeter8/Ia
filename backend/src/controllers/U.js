<!-- frontend/src/views/Dashboard.vue -->
<div class="security-grid">
  <div class="quantum-channel">
    <h3>Canal Cuántico QKD</h3>
    <div class="photons-container">
      <div v-for="(photon, index) in photons" :key="index" 
           :class="`photon ${photon.polarization}`"></div>
    </div>
    <button @click="generateNewKey">Generar Nueva Clave Cuántica</button>
  </div>
  
  <threat-detection-radar :threats="detectedThreats" />
</div>
