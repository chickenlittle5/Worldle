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
    int counter = 0;

    while (guessName != initialObj.getName()) {

        CosmicObject guess = list.getObjectByName(guessName);
        vector<int> statCompare;

        // Compare radius, mass, temp, year, and distance. Pushes it into stat vector
        // -1 is less, 0 is equal, 1 is greater than
        statCompare.push_back((guess.getRadius() < initialObj.getRadius()) ? -1 : (guess.getRadius() > initialObj.getRadius()) ? 1 : 0);
        statCompare.push_back((guess.getMass() < initialObj.getMass()) ? -1 : (guess.getMass() > initialObj.getMass()) ? 1 : 0);
        statCompare.push_back((guess.getTemp() < initialObj.getTemp()) ? -1 : (guess.getTemp() > initialObj.getTemp()) ? 1 : 0);
        statCompare.push_back((guess.getYear() < initialObj.getYear()) ? -1 : (guess.getYear() > initialObj.getYear()) ? 1 : 0);
        statCompare.push_back((guess.getDistance() < initialObj.getDistance()) ? -1 : (guess.getDistance() > initialObj.getDistance()) ? 1 : 0);
        statCompare.push_back(guess.getType() == initialObj.getType() ? 1 : 0);

        

        counter++;
        cout << "Guess: ";
        cin >> guessName;
    }


    cout << "Correct!" << endl;
    cout << "Took " << counter << " tries" << endl;


    return 0;
}
