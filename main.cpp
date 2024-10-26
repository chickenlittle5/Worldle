#include <iostream>
#include "CosmicObjectList.cpp"
#include <random>

int main() {


    CosmicObjectList list;
    list.populateListFromFile("Data.txt"); // Load data from Data.txt
    // list.printAllObjects(); // Print all cosmic objects to verify

    CosmicObject initialObj = list.getRandObj();
    cout << initialObj << endl;
    
    string guessName;
    cout << "Guess: ";
    cin >> guessName;

    while (guessName != initialObj.getName()) {

        CosmicObject guess = list.getObjectByName(guessName);

        cout << "Radius: ";
        string radius = (guess.getRadius() < initialObj.getRadius()) ? "Higher Radius ^" : "Lower _";
        cout << radius << "\t";

        cout << "Mass: ";
        string mass = (guess.getMass() < initialObj.getMass()) ? "Higher ^" : "Lower _";
        cout << mass << "\t";

        cout << "Temp: ";
        string temp = (guess.getTemp() < initialObj.getTemp()) ? "Higher ^" : "Lower _";
        cout << temp << "\t";

        cout << "Year: ";
        string year = (guess.getYear() < initialObj.getYear()) ? "Higher ^" : "Lower _";
        cout << year << "\t";

        cout << "Distance: ";
        string distance = (guess.getDistance() < initialObj.getDistance()) ? "Higher ^" : "Lower _";
        cout << distance << "\t";

        cout << "Type: ";
        string type = (guess.getType() == initialObj.getType()) ? "Correct!" : "Incorrect!";
        cout << type << "\t" << endl;

        cout << "Guess: ";
        cin >> guessName;
    }

    cout << "Correct!" << endl;


    return 0;
}
