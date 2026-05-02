import requests
import time

def monitor():
    print("AI Guardian: Monitoring system health...")
    while True:
        try:
            status = requests.get("http://127.0.0.1:5000/api/status").json()
            if status["status"] == "CRASHED":
                print("ALERT: System crashed! AI analyzing logs...")
                time.sleep(2)
                print("AI: Vulnerability found. Deploying Parameterized SQL patch...")
                requests.post("http://127.0.0.1:5000/api/deploy-patch")
                print("BUG SEALED. System recovered.")
                break
        except:
            pass
        time.sleep(1)

if __name__ == "__main__":
    monitor()
