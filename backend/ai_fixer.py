import requests
import time

def monitor():
    print("AI Fixer active. Waiting for system crash...")
    while True:
        try:
            status = requests.get("http://localhost:5000/api/status").json()
            if status["status"] == "CRASHED":
                print("Crash detected. Analyzing code...")
                time.sleep(2)
                print("Generating Patch...")
                requests.post("http://localhost:5000/api/patch")
                print("System Fixed!")
                break
        except:
            pass
        time.sleep(1)

if __name__ == "__main__":
    monitor()
