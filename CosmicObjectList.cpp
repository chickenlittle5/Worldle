#include <iostream>
#include <fstream>
#include <sstream>
#include "CosmicObjectList.h"

using namespace std;

void CosmicObjectList::populateListFromFile(const string &filename) {
    ifstream file(filename);

    if (!file.is_open()) {
        cerr << "Error: Could not open the file " << filename << endl;
        return;
    }

    string line;
    getline(file, line);

    
    while (getline(file, line)) {
        stringstream lineStream(line);
        string name, type, radiusStr, massStr, tempStr, yearStr, distanceStr;

        getline(lineStream, name, ';');
        getline(lineStream, radiusStr, ';');
        getline(lineStream, massStr, ';');
        getline(lineStream, tempStr, ';');
        getline(lineStream, yearStr, ';');
        getline(lineStream, distanceStr, ';');
        getline(lineStream, type, ';');

        double radius = stod(radiusStr);
        double mass = stod(massStr);
        double temperature = stod(tempStr);
        int yearDiscovered = yearStr == "Unknown" ? 0 : stoi(yearStr);
        double distanceFromEarth = stod(distanceStr);

        CosmicObject obj(name, radius, mass, temperature, yearDiscovered, distanceFromEarth, type);
        cosmicObjects.push_back(obj);
    }

    file.close();
}

void CosmicObjectList::printAllObjects() const {
    for (const auto &obj : cosmicObjects) {
        cout << "Name: " << obj.getName() << ", "
             << "Radius: " << obj.getRadius() << " km, "
             << "Mass: " << obj.getMass() << " kg, "
             << "Temperature: " << obj.getTemp() << " C, "
             << "Year Discovered: " << (obj.getYear() == 0 ? "Unknown" : to_string(obj.getYear())) << ", "
             << "Distance from Earth: " << obj.getDistance() << " km, "
             << "Type: " << obj.getType() << endl;
    }
}
