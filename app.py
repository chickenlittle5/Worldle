from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from main import find_planet_info, get_all_planets_info
import logging
import random

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')


@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "This is the latest version"})


@app.route('/select', methods=['POST'])
def select():
    data = request.json
    if 'text' not in data:
        return jsonify({"status": "error", "message": "No 'text' field in request data"}), 400
    
    selected_text = data['text']
    
    planet_info = find_planet_info(selected_text)
    all_planets = get_all_planets_info()
    
    if planet_info:
        threshold_planet = random.choice(all_planets)
        response = {
            "status": "success",
            "planet_info": {
                "name": planet_info[0],
                "radius": str(planet_info[1]),
                "mass": f"{planet_info[2]:.2e}",
                "temperature": str(planet_info[3]),
                "year_discovered": str(planet_info[4]),
                "distance_from_earth": f"{planet_info[5]:.2e}"
            },
            "threshold_planet": {
                "name": threshold_planet[0],
                "radius": str(threshold_planet[1]),
                "mass": f"{threshold_planet[2]:.2e}",
                "temperature": str(threshold_planet[3]),
                "year_discovered": str(threshold_planet[4]),
                "distance_from_earth": f"{threshold_planet[5]:.2e}"
            }
        }
    else:
        response = {"status": "error", "message": f"No information found for '{selected_text}'"}
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=8000)