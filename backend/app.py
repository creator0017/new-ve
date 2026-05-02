from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

system_state = {
    "status": "READY", 
    "current_user": "", 
    "current_pass": "", 
    "is_clicking": False, 
    "logs": []
}

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify(system_state)

@app.route('/api/update-payload', methods=['POST'])
def update_payload():
    data = request.json
    system_state["current_user"] = data.get('user', '')
    system_state["current_pass"] = data.get('password', '')
    system_state["is_clicking"] = data.get('clicking', False)
    return jsonify({"success": True})

@app.route('/api/fuzz-start', methods=['POST'])
def start_fuzz():
    system_state["status"] = "ATTACKING"
    return jsonify({"message": "Fuzzer Active"})

@app.route('/api/login-attempt', methods=['POST'])
def login():
    user = request.json.get('username', '')
    pw = request.json.get('password', '')
    
    # THE ATTACK TRIGGER: Crash on the 35th entry
    if "admin'--" in user:
        system_state["status"] = "CRASHED"
        system_state["logs"].append(f"CRITICAL: SQL Injection Breach Detected: {user}")
        return jsonify({"error": "Database Kernel Panic"}), 500
    
    # NORMAL MODE: Allow real login when not crashing
    if user == "admin" and pw == "admin123":
        return jsonify({"success": True, "redirect": "/dashboard"})
    
    # FUZZER MODE: All fake entries return 401 Unauthorized
    return jsonify({"success": False, "message": "Invalid Credentials"}), 401

@app.route('/api/deploy-patch', methods=['POST'])
def deploy():
    system_state["status"] = "FIXED"
    return jsonify({"success": True})

@app.route('/api/reset', methods=['POST'])
def reset():
    global system_state
    system_state = {"status": "READY", "current_user": "", "current_pass": "", "is_clicking": False, "logs": []}
    return jsonify({"success": True})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=False)
