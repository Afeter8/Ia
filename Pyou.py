import hashlib, time, os

def verificar_integridad(archivo, hash_original):
    with open(archivo, 'rb') as f:
        data = f.read()
        sha = hashlib.sha512(data).hexdigest()
        return sha == hash_original

while True:
    if not verificar_integridad("index.html", "HASH_VERDADERO_AQUÍ"):
        print("⚠️ Código modificado. Reparando...")
        os.system("git checkout index.html")
    else:
        print("✅ Código intacto.")
    time.sleep(10)
