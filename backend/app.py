from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

system_status = {
    "status": "READY",
    "latest_crash_input": "",
    "broken_code": "",
    "fixed_code": ""
}

def init_db():
    conn = sqlite3.connect('bank.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users (acc TEXT, balance REAL)''')
    c.execute("INSERT OR IGNORE INTO users VALUES ('admin', 9999)")
    conn.commit()
    conn.close()

@app.route('/api/transfer', methods=['POST'])
def transfer():
    global system_status
    data = request.json
    account = data.get('account', '')

    query = "SELECT * FROM users WHERE acc='" + account + "'"

    try:
        conn = sqlite3.connect('bank.db')
        c = conn.cursor()
        c.execute(query)
        result = c.fetchall()
        conn.close()
        return jsonify({"success": True, "data": result})
    except Exception as e:
        system_status["status"] = "CRASHED"
        system_status["latest_crash_input"] = account
        system_status["broken_code"] = 'query = "SELECT * FROM users WHERE acc=\'" + account + "\'"\nc.execute(query)'
        return jsonify({"error": "Internal Server Error"}), 500

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify(system_status)

@app.route('/api/fuzz-start', methods=['POST'])
def start_fuzz():
    global system_status
    system_status["status"] = "ATTACKING"
    return jsonify({"message": "Fuzzer started"})

@app.route('/api/patch', methods=['POST'])
def patch_system():
    global system_status
    system_status["status"] = "FIXED"
    system_status["fixed_code"] = 'c.execute("SELECT * FROM users WHERE acc=?", (account,))'
    return jsonify({"message": "System Patched"})

if __name__ == '__main__':
    init_db()
    app.run(port=5000, debug=True)
