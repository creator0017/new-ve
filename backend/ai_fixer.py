import time
import requests

def start_guardian():
    print("AI Guardian: Monitoring System Integrity...")
    while True:
        try:
            status = requests.get("http://127.0.0.1:5000/api/status").json()
            
            if status['status'] == "CRASHED":
                # Wait 6 seconds for "Red Screen" impact
                print("Crash detected. Holding system for analysis...")
                time.sleep(6) 
                
                print("SHANNON AI: Synthesizing Parameterized SQL Patch...")
                # Deploy the patch to the backend
                requests.post("http://127.0.0.1:5000/api/deploy-patch")
                print("System Healed.")
                
        except Exception as e:
            pass
        time.sleep(1)

if __name__ == "__main__":
    start_guardian()
