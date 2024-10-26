#ifndef COSMIC_OBJECTS
#define COSMIC_OBJECTS
#include <iostream>
#include <string>

using namespace std;

class CosmicObject {

private:
    string _name;
    double _radius;
    double _mass;
    double _temperature;    
    int _yearDiscovered;
    double _distanceFromEarth;
    string _type;

public:
    CosmicObject() 
    : _name(""), _type(""), _temperature(0.0), _radius(0.0), _mass(0.0), _yearDiscovered(0), _distanceFromEarth(0.0) {}

    CosmicObject(string name, double radius, double mass, double temperature, int yearDiscovered, double distanceFromEarth, string type) {
        _name = name; 
        _radius = radius; 
        _mass = mass; 
        _temperature = temperature; 
        _yearDiscovered = yearDiscovered; 
        _distanceFromEarth = distanceFromEarth; 
        _type = type;
    }

    // Setters
    void setName(string name) { _name = name; }
    void setRadius(double radius) { _radius = radius; }
    void setMass(double mass) { _mass = mass; }
    void setTemp(double temp) { _temperature = temp; }
    void setYear(int year) { _yearDiscovered = year; }
    void setDistance(double dist) { _distanceFromEarth = dist; }
    void setType(string type) { _type = type; }

    // Getters
    string getName() const { return _name; }
    double getRadius() const { return _radius; }
    double getMass() const { return _mass; }
    double getTemp() const { return _temperature; }
    int getYear() const { return _yearDiscovered; }
    double getDistance() const { return _distanceFromEarth; }
    string getType() const { return _type; }

};

#endif