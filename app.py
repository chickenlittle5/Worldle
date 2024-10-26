from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows CORS for all domains on all routes

@app.route('/', methods=['GET'])
def home():
    return "hufdgigfnj fdgngfdjngfo, World!"

@app.route('/select', methods=['POST'])
def select():
    data = request.json
    value = data['value']
    text = data['text']
    
    print(f"Received: value = {value}, text = {text}")
    
    # Process the data as needed
    # For example, you could save it to a file:
    with open('selections.txt', 'a') as f:
        f.write(f"Value: {value}, Text: {text}\n")
    
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
