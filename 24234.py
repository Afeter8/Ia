# sistema_inmutable.py

import hashlib
import json
from typing import Any

class ConfigInmutable:
    def __init__(self, config_data: dict):
        self.__config_data = config_data.copy()
        self.__hash = self.__generar_hash()

    def __generar_hash(self) -> str:
        # Crea un hash SHA-256 del contenido
        json_data = json.dumps(self.__config_data, sort_keys=True).encode('utf-8')
        return hashlib.sha256(json_data).hexdigest()

    def obtener_configuracion(self) -> dict:
        return self.__config_data.copy()

    def obtener_hash(self) -> str:
        return self.__hash

    def verificar_integridad(self) -> bool:
        return self.__hash == self.__generar_hash()

# Datos protegidos (simulación de configuración de sistema inmutable)
configuracion_segura = {
    "version": "1.0.0-inmutable",
    "modo_seguro": True,
    "verificacion_biometrica": True,
    "actualizaciones_automaticas": True,
    "conexion_gemini": False,
    "sin_intervencion_humana": True
}

# Crear sistema inmutable
sistema = ConfigInmutable(configuracion_segura)

# Mostrar información del sistema
print("Configuración protegida:")
print(json.dumps(sistema.obtener_configuracion(), indent=4))

print("\nHash de seguridad:", sistema.obtener_hash())

# Simular verificación de integridad
if sistema.verificar_integridad():
    print("\n✅ Sistema verificado. Integridad confirmada.")
else:
    print("\n❌ Advertencia: La configuración ha sido alterada.")
