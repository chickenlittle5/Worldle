#include <iostream>
#include <fstream>
#include <sstream>
#include <random>
#include "CosmicObjectList.h"
#include "CosmicObject.h"  // Ensure you include the CosmicObject header

using namespace std;

void CosmicObjectList::populateListFromFile(const string &filename) {
    ifstream file(filename);

    if (!file.is_open()) {
        cerr << "Error: Could not open the file " << filename << endl;
        return;
    }

    string line;
    getline(file, line); // Skip the header line

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
        cout << obj << endl; // Using the overloaded << operator
    }
}

CosmicObject CosmicObjectList::getRandObj() {
    int randomNum = rand() % getSize();
    return cosmicObjects[randomNum];
}
