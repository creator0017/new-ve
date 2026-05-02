from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

system_state = {"status": "READY", "current_payload": "", "logs": [], "patch": ""}

def init_db():
    conn = sqlite3.connect('bank.db')
    conn.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, acc TEXT, bal REAL)')
    conn.execute("INSERT OR IGNORE INTO users (id, acc, bal) VALUES (1, 'admin_account', 1000000)")
    conn.commit()
    conn.close()

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify(system_state)

@app.route('/api/update-payload', methods=['POST'])
def update_payload():
    system_state["current_payload"] = request.json.get('payload', '')
    return jsonify({"success": True})

@app.route('/api/transfer', methods=['POST'])
def transfer():
    acc_name = request.json.get('account', '')
    if "'" in acc_name or "--" in acc_name:
        system_state["status"] = "CRASHED"
        system_state["logs"].append(f"SQL INJECTION DETECTED: {acc_name}")
        return jsonify({"error": "CRITICAL SYSTEM FAILURE: SQL INJECTION"}), 500
    return jsonify({"success": True, "message": f"Transfer to {acc_name} successful!"}), 200

@app.route('/api/fuzz-start', methods=['POST'])
def start_fuzz():
    system_state["status"] = "ATTACKING"
    return jsonify({"message": "Attack Agent Started"})

@app.route('/api/deploy-patch', methods=['POST'])
def deploy():
    system_state["status"] = "FIXED"
    system_state["patch"] = "c.execute('SELECT * FROM users WHERE acc = ?', (acc_name,))"
    return jsonify({"success": True})

if __name__ == '__main__':
    init_db()
    app.run(port=5000, host='127.0.0.1')
