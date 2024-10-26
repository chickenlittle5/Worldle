#include <iostream>
#include "CosmicObjectList.cpp"
#include <random>

int main() {


    CosmicObjectList list;
    list.populateListFromFile("Data.txt"); // Load data from Data.txt
    // list.printAllObjects(); // Print all cosmic objects to verify

    CosmicObject initialObj = list.getRandObj();
    cout << initialObj;


    return 0;
}
